import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export default function LocationCard({ data }) {
	return (
		<Wrapper>
			<ImageContainer>
				<Image
					src={data.img}
					objectFit="cover"
					objectPosition="center"
					layout="fill"
					alt=""
				/>
			</ImageContainer>

			<Details>
				<Title>{data.location}</Title>
				<Description>{data.title}</Description>

				<ApartmentInfo>{data.description}</ApartmentInfo>
				<PriceAndRating>
					<RatingContainer>
						<FaStar />
						<p>
							{data.star} <span>(542)</span>
						</p>
					</RatingContainer>

					<Pricing>
						<span>
							£30<small>/night</small>
						</span>
						<span className="total-price">{data.total}</span>
					</Pricing>
				</PriceAndRating>
			</Details>
		</Wrapper>
	);
}

const Wrapper = styled.article`
	border-radius: 1rem;
	display: flex;
	transition: box-shadow 0.25s ease;
	overflow: hidden;

	&:hover {
		box-shadow: 0px 0rem 2rem -1rem rgba(0, 0, 0, 0.3);
	}

	&:hover > div {
		transform: scale(0.9);
	}

	@media (max-width: 850px) {
		flex-direction: column;
		box-shadow: 0px 0rem 2rem -1rem rgba(0, 0, 0, 0.3);
	}
`;

const ImageContainer = styled.div`
	background-color: var(--gray);
	border-radius: 1rem;
	height: 240px;
	overflow: hidden;
	position: relative;
	transition: transform 0.25s ease;
	width: 350px;

	@media (max-width: 850px) {
		width: 100%;
		height: 400px;
	}

	@media (max-width: 768px) {
		height: 205px;
		transform: scale(0.9);
	}

	@media (max-width: 727px) {
		transform: scale(0.95);
		border-radius: 0.5rem;
		height: 300px;
	}

	@media (max-width: 450px) {
		transform: scale(0.9);
		border-radius: 0.5rem;
		height: 250px;
	}
`;

const Details = styled.article`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 1rem;

	@media (max-width: 768px) {
		padding-top: 0;
	}
`;

const Title = styled.p`
	font-size: 1.125rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const Description = styled.h2`
	font-size: 1.25rem;
	font-weight: 600;
	margin: 0.4rem 0 0.6rem;
	line-height: 1.2;

	@media (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

const ApartmentInfo = styled.p`
	margin-bottom: 1rem;
	font-size: 1.1rem;
	color: #888899;

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

const PriceAndRating = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	@media (max-width: 768px) {
		gap: 0.25rem;
		align-items: flex-start;
		flex-direction: column;
	}
`;

const RatingContainer = styled.div`
	display: flex;
	align-items: center;

	svg {
		color: var(--red);
		font-size: 1.1rem;
		margin-right: 0.3rem;
	}

	p {
		font-size: 1.1rem;
	}
	span {
		color: #888899;
	}

	@media (max-width: 768px) {
		p {
			font-size: 1rem;
		}
	}
`;

const Pricing = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	span {
		font-weight: 700;
		font-size: 1.3rem;
	}
	span.total-price {
		font-weight: 400;
		font-size: 0.9rem;
		color: #888899;
	}
	small {
		font-size: 1rem;
		font-weight: 400;
	}

	@media (max-width: 768px) {
		span {
			font-size: 1.1rem;
		}
		span.total-price {
			display: none;
		}
		small {
			font-size: 0.9rem;
		}
	}
`;
