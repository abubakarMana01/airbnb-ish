/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function LiveAnywhere({ liveAnywhereData: data }) {
	return (
		<Wrapper>
			<h2>Live anywhere</h2>

			<Content>
				{data?.map((item) => (
					<Card key={item.title}>
						<ImageContainer>
							<img loading="lazy" src={item.img} alt={item.title} />
						</ImageContainer>
						<h3>{item.title}</h3>
					</Card>
				))}
			</Content>
		</Wrapper>
	);
}

const Wrapper = styled.section``;

const Content = styled.div`
	margin-top: 2rem;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;

	@media (max-width: 800px) {
		display: flex;
		overflow-x: scroll;

		::-webkit-scrollbar {
			display: none;
		}

		div {
			width: 280px;
		}
	}
	@media (max-width: 550px) {
		div {
			width: 250px;
		}
	}
`;

const Card = styled.article`
	h3 {
		margin-top: 0.7rem;
		font-size: clamp(1.1rem, 1.4rem, 1.5rem);
	}
`;

const ImageContainer = styled.div`
	max-width: 280px;

	img {
		border-radius: 1rem;
		width: 100%;
		object-fit: cover;
		box-shadow: rgb(0 0 0 / 40%) 0px 1rem 1.5rem -0.5rem;
		transition: transform 0.25s ease, box-shadow 0.25s ease;

		&:hover {
			transform: scale(0.9);
			box-shadow: rgb(0 0 0 / 60%) 0px 1rem 1.5rem -0.5rem;
		}
	}
`;
