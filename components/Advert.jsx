import React from "react";
import styled from "styled-components";

export default function Advert() {
	return (
		<section>
			<h2>Hosting</h2>

			<Banner style={{}}>
				<article>
					<h3>Try hosting</h3>
					<p>
						Earn extra income and unlock new oppurtunities by sharing your
						space.
					</p>
					<a href="#">Learn more</a>
				</article>
			</Banner>
		</section>
	);
}

const Banner = styled.div`
	position: relative;
	width: 100%;
	background-image: url("/images/host.jpg");
	background-position: center;
	background-size: cover;
	border-radius: 1rem;
	padding: 6rem 3rem;
	margin: 2rem 0 0;
	overflow: hidden;

	h3 {
		font-size: clamp(1.9rem, 3vw, 2.5rem);
		line-height: 1.5;
		font-weight: 800;
		color: var(--white);
	}

	p {
		color: var(--white);
		max-width: 320px;
		z-index: 1;
	}

	a {
		margin-top: 1.5rem;
		position: relative;
		display: block;
		width: fit-content;
		padding: 0.8em 1.3em;
		background-color: var(--white);
		color: var(--dark);
		font-size: 1.3rem;
		border-radius: 0.5em;
		font-weight: 600;

		&::after {
			content: "";
			position: absolute;
			inset: 0;
			background-color: rgba(0, 0, 0, 0);
			border: 2px solid var(--dark);
			border-radius: 0.6em;
			transition: 0.1s ease-out;
		}

		&:hover::after {
			transform: scaleX(1.05) scaleY(1.125);
		}
	}
`;
