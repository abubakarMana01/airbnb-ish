import React, { useState } from "react";
import styled from "styled-components";
import LocationCard from "../components/search/LocationCard";
import Nav from "../components/Nav";
import Head from "next/head";
import Map from "../components/search/Map";

export default function Search({ searchResults }) {
	return (
		<>
			<Head>
				<title>Airbnb-ish | Search</title>
				<link rel="icon" href="/images/airbnb-logo-small.svg" />
			</Head>

			<Nav />

			<Map searchResults={searchResults} />
			<Wrapper>
				<div>
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
