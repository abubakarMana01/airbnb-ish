import styled from "styled-components";
import Head from "next/head";
import Advert from "../components/Advert";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import LiveAnywhere from "../components/LiveAnywhere";
import Nav from "../components/Nav";

export default function Home(props) {
	return (
		<div>
			<Head>
				<title>Airbnb-ish</title>
				<link rel="icon" href="/images/airbnb-logo-small.svg" />
			</Head>

			<Hero />
			<Nav />

			<Main>
				<Explore exploreData={props.exploreData} />
				<LiveAnywhere liveAnywhereData={props.liveAnywhereData} />
				<Advert />
			</Main>
		</div>
	);
}

export async function getStaticProps() {
	const expoloreRes = await fetch("https://links.papareact.com/pyp");
	const exploreData = await expoloreRes.json();

	const liveAnywhereRes = await fetch("https://links.papareact.com/zp1");
	const liveAnywhereData = await liveAnywhereRes.json();

	return {
		props: {
			exploreData,
			liveAnywhereData,
		},
	};
}

const Main = styled.main`
	padding: 0 3rem;
	background-color: var(--light);
	padding-bottom: 3rem;

	& > section {
		padding: 3rem 0 0;
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
	}

	& > section h2 {
		font-size: clamp(1.75rem, 1.85rem, 2rem);
		font-weight: 800;
	}

	@media screen and (max-width: 550px) {
		padding: 0 1rem;
	}
`;
