/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function Explore({ exploreData }) {
	return (
		<Wrapper>
			<h2>Explore nearby</h2>

			<ExploreContent>
				{exploreData?.map((item) => (
					<ExploreItem key={Math.random()}>
						<ImageContainer>
							<Image
								src={item.img}
								width={85}
								height={85}
								objectFit="contain"
								alt={item.name}
							/>
						</ImageContainer>
						<div>
							<h3 key={Math.random()}>{item.location}</h3>
							<span>{item.distance}</span>
						</div>
					</ExploreItem>
				))}
			</ExploreContent>
			<Banner>
				<div>
					<h3>Not sure where to go? Perfect</h3>
					<a href="#">I'm flexible</a>
				</div>
			</Banner>
		</Wrapper>
	);
}

const Wrapper = styled.section``;

const ExploreContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1.75rem;
	padding: 2rem 0;
`;

const ExploreItem = styled.div`
	height: 85px;
	display: flex;
	align-items: center;
	border-radius: 1rem;
	gap: 1.5rem;
	cursor: pointer;
	transition: box-shadow 0.25s ease;

	&:hover {
		background-color: var(--white);
		box-shadow: rgb(0 0 0 / 7%) 0px 1rem 1.5rem -0.5rem;
	}

	&:hover div:first-child {
		transform: scale(0.8);
	}

	&:hover div:nth-child(2) {
		transform: translateX(-0.7rem);
	}

	div {
		transition: all 0.25s ease;

		h3 {
			font-size: clamp(1.1rem, 1.35rem, 1.6rem);
		}

		span {
			font-size: 1.1rem;
			display: block;
			margin-top: 0.2rem;
		}

		&:first-child {
			box-shadow: 0px 0px 10px 2px rgb(145 145 145 / 30%);
		}
	}
`;

const ImageContainer = styled.div`
	width: 85px;
	height: 85px;
	border-radius: 1rem;
	overflow: hidden;
`;

const Banner = styled.div`
	width: 100%;
	background-image: url("/images/banner.jpg");
	background-size: cover;
	border-radius: 1rem;
	padding: 6rem 3rem;
	margin: 2rem 0 0;

	h3 {
		font-size: clamp(1.9rem, 3vw, 2.5rem);
		line-height: 1.5;
		margin-bottom: 1.5rem;
		font-weight: 800;
		color: #3f3f1a;
		max-width: 450px;
	}

	a {
		position: relative;
		display: block;
		width: fit-content;
		padding: 0.8em 1.3em;
		background-color: #3f3f1a;
		color: var(--white);
		font-size: 1.3rem;
		border-radius: 0.5em;
		font-weight: 600;

		&::after {
			content: "";
			position: absolute;
			inset: 0;
			background-color: rgba(0, 0, 0, 0);
			border: 2px solid #3f3f1a;
			border-radius: 0.6em;
			transition: 0.1s ease-out;
		}

		&:hover::after {
			transform: scaleX(1.05) scaleY(1.125);
		}
	}
`;
