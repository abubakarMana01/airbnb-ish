import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Banner() {
	const bannerRef = useRef(undefined);

	useEffect(() => {
		bannerRef.current.style.padding =
			window.innerWidth < 550 ? "0 1rem 0" : "15rem 3rem 6rem";
		bannerRef.current.style.height =
			window.innerWidth < 550 ? "70vh" : "fit-content";

		window.onresize = () => {
			bannerRef.current.style.padding =
				window.innerWidth < 550 ? "7.5rem 1rem 6rem" : "15rem 3rem 6rem";
			bannerRef.current.style.height =
				window.innerWidth < 550 ? "70vh" : "fit-content";
		};

		return () => {
			window.onresize = () => {};
		};
	}, []);

	return (
		<BannerSection ref={bannerRef}>
			<Wrapper>
				<h1>Olympian & Paralympian Online Experiences</h1>
				<button>Explore now</button>
			</Wrapper>
		</BannerSection>
	);
}

const BannerSection = styled.section`
	background-image: url("/images/hero.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	padding: 15rem 3rem 6rem;

	@media (max-width: 550px) {
		display: flex;
		align-items: center;
	}
`;

const Wrapper = styled.div`
	max-width: var(--max-width);
	margin: 0 auto;

	h1 {
		color: var(--white);
		font-weight: 900;
		font-size: clamp(2rem, 5.5vw, 3.5rem);
		line-height: 1.2;
		margin-bottom: 1.5rem;
		max-width: 400px;
	}

	button {
		border: 0;
		outline: none;
		background-color: var(--light);
		font-family: var(--font-sans);
		white-space: nowrap;
		padding: 0.8em 1.3em;
		font-size: 1.25rem;
		font-weight: 600;
		border-radius: 0.66rem;
		color: var(--dark);
	}

	@media (max-width: 550px) {
		margin: 0 0;
		h1 {
			max-width: 70%;
		}
	}
`;
