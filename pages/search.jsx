import React, { useState } from "react";
import styled from "styled-components";
import LocationCard from "../components/search/LocationCard";
import Nav from "../components/Nav";
import Head from "next/head";
import Map from "../components/search/Map";
import { useRouter } from "next/router";
import { format } from "date-fns";

export default function Search({ searchResults }) {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{router.query.location} | Stays | Airbnb-ish</title>
				<link rel="icon" href="/images/airbnb-logo-small.svg" />
			</Head>

			<Nav query={router.query} />

			<Map searchResults={searchResults} />
			<Wrapper>
				<div>
					<p>
						{searchResults?.length}+ stays |{" "}
						<span>
							{`${format(new Date(router.query.startDate), "dd MMMM yy")} -
							${format(new Date(router.query.endDate), "dd MMMM yy")}`}
						</span>{" "}
						for <span>{router.query.totalGuests} guests</span>
					</p>
					<h1>Stays in {router.query.location}</h1>
					<Cards>
						{searchResults.map((result) => (
							<LocationCard key={Math.random()} data={result} />
						))}
					</Cards>
				</div>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	background-color: var(--light);
	padding-bottom: 3rem;

	& > div {
		position: relative;
		background-color: var(--light);
		padding: 3rem;
		border-radius: 1.5rem 1.5rem 0px 0px;
		box-shadow: rgb(0 0 0 / 20%) 0px -1rem 2rem -1rem;
		max-width: 1200px;
		margin: 0px auto;
		margin-top: -30vh;
		z-index: 2;
		left: 0;
		right: 0;
		top: 0;

		h1 {
			margin-top: 0.5rem;
			margin-bottom: 2rem;
			font-size: clamp(1.4rem, 3vw, 2rem);
			line-height: 1;
		}

		p {
			span {
				background-color: var(--gray);
			}
		}

		@media (max-width: 550px) {
			padding-inline: 1rem;
		}
	}
`;

const Cards = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}

	@media (max-width: 550px) {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
`;

export async function getServerSideProps() {
	const res = await fetch("https://links.papareact.com/isz");
	const data = await res.json();

	return {
		props: {
			searchResults: data,
		},
	};
}
