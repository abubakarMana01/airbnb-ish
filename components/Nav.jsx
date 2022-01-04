import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaSearch, FaUser } from "react-icons/fa";
import { BsGlobe, BsList } from "react-icons/bs";
import LocationDetails from "./LocationDetails";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Nav() {
	const router = useRouter();

	const navRef = useRef(undefined);
	const searchInput = useRef();

	const [location, setLocation] = useState("");
	const [yOffset, setYOffset] = useState(0);
	const [navIsAtTop, setNavIsAtTop] = useState(
		router.route === "/search" ? false : yOffset === 0 ? true : false
	);
	const [showSearchDetails, setShowSearchDetails] = useState(false);

	function handleSearch() {
		if (location) {
			router.push("/search");
			setShowSearchDetails(false);
		}
	}

	function respondToScroll() {
		setYOffset(window.scrollY);
		if (window.scrollY === 0 && !showSearchDetails) {
			setNavIsAtTop(true);
		} else {
			setNavIsAtTop(false);
		}
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		window.addEventListener("click", (e) => {
			if (!navRef.current?.contains(e.target)) {
				setLocation("");
				setShowSearchDetails(false);
				document.body.style.overflowY = "scroll";
			}

			if (document.activeElement === searchInput.current) {
				setShowSearchDetails(true);
				setNavIsAtTop(false);
				document.body.style.overflowY = "hidden";
			}
		});

		setYOffset(window.scrollY);

		console.log(router.route !== "/search");
		if (router.route == "/") {
			window.addEventListener("scroll", respondToScroll);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<NavContainer top={navIsAtTop} ref={navRef}>
			<SectionWidth>
				<LogoContainer top={navIsAtTop}>
					<a href="#">
						<Image
							src="/images/airbnb-logo-small.svg"
							width={35}
							height={35}
							alt="logo"
						/>
						<span>airbnb</span>
					</a>
				</LogoContainer>

				<SearchContainer top={navIsAtTop}>
					<input
						ref={searchInput}
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						type="text"
						placeholder="Where are you going?"
					/>

					<SearchIconContainer onClick={handleSearch} top={navIsAtTop}>
						<FaSearch style={{ color: "var(--white)" }} />
						<span>Search</span>
					</SearchIconContainer>
				</SearchContainer>

				<NavLinks>
					<MiddleLinks top={navIsAtTop}>
						<li>
							<a href="#">Places to stay</a>
						</li>
						<li>
							<a href="#">Experiences</a>
						</li>
						<li>
							<a href="#">Online Experiences</a>
						</li>
					</MiddleLinks>
					<RightLinks top={navIsAtTop}>
						<li>
							<a href="#">Become a host</a>
						</li>
						<li>
							<BsGlobe />
						</li>
						<li>
							<BsList />
							<FaUser />
						</li>
					</RightLinks>
				</NavLinks>
			</SectionWidth>
			{showSearchDetails && (
				<LocationDetails
					location={location}
					setLocation={setLocation}
					setShowSearchDetails={setShowSearchDetails}
				/>
			)}
		</NavContainer>
	);
}

const NavContainer = styled.nav`
	min-width: 330px;
	position: fixed;
	z-index: 3;
	top: 0;
	width: 100%;
	padding: 1.5rem 3rem;
	background-color: ${({ top }) => (top ? "transparent" : "var(--white)")};
	transition: background-color 0.25s ease-out;
	box-shadow: ${({ top }) =>
		!top ? "0 0 0 2px rgb(145 145 145 / 10%)" : "none"};

	a {
		color: ${({ top }) => (top ? "var(--white)" : "var(--black)")};
		font-size: 1.15rem;
		position: relative;

		&::after {
			content: "";
			position: absolute;
			bottom: -5px;
			left: 50%;
			transform: translateX(-50%);
			height: 2px;
			background-color: ${({ top }) => (top ? "var(--white)" : "var(--black)")};
			width: 0;
			transition: width 0.25s ease-out;
		}

		&:hover::after {
			width: 30px;
		}
	}

	@media (max-width: 550px) {
		padding: 2.5rem 0rem;
	}
`;

const SectionWidth = styled.div`
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

const LogoContainer = styled.div`
	a {
		display: flex;
		align-items: center;

		&::after {
			display: none;
		}
	}

	span {
		font-weight: 600;
		margin-left: 0.5rem;
		font-size: 1.3rem;
		color: ${({ top }) => (top ? "var(--white)" : "var(--black)")};
	}

	@media (max-width: 550px) {
		display: none;
	}
`;

const SearchContainer = styled.div`
	width: ${({ top }) => (top ? "700px" : "400px")};
	height: ${({ top }) => (top ? "70px" : "56px")};
	display: flex;
	align-items: center;
	border-radius: 50px;
	box-shadow: 0 0 0 2px rgb(145 145 145 / 10%);
	padding: 0.5rem;
	background-color: var(--white);
	position: absolute;
	left: 50%;
	transition: transform 0.25s ease-in-out, width 0.25s ease-in-out,
		height 0.25s ease-in-out;
	transform: ${({ top }) =>
		!top ? "translateX(-50%)" : "translateX(-50%) translateY(100px)"};
	z-index: 1;

	input {
		background: transparent;
		font-family: var(--font-sans);
		flex: 1;
		outline: none;
		border: none;
		padding-left: 1.25rem;
		font-size: ${({ top }) => (top ? "1.15rem" : "1rem")};
		transition: font-size 0.5s ease;

		@media (max-width: 550px) {
			font-size: 1rem;
		}
	}

	@media (max-width: 900px) {
		width: ${({ top }) => (top ? "80%" : "auto")};
		left: ${({ top }) => (!top ? "100%" : "50%")};
		transform: ${({ top }) =>
			!top
				? "translateX(calc(-100% - 1rem))"
				: "translateX(-50%) translateY(100px)"};
		transition: none;
		min-width: 300px;

		input {
			width: 100%;
		}
	}

	@media (max-width: 550px) {
		width: 90%;
		height: 56px;
		transform: ${({ top }) => (top ? "translateX(-50%)" : "translateX(-106%)")};
		transition: none;
	}
`;

const SearchIconContainer = styled.button`
	position: relative;
	padding: ${({ top }) => (top ? "1rem" : "0")};
	margin-left: 1rem;
	border: none;
	cursor: pointer;
	border-radius: 100px;
	background-color: var(--red);
	display: flex;
	justify-content: ${({ top }) => (!top ? "center" : "space-between")};
	align-items: center;
	width: ${({ top }) => (!top ? "40px" : "115px")};
	height: ${({ top }) => (!top ? "40px" : "50px")};
	transition: width 0.15s ease, height 0.15s ease;

	svg,
	span {
		font-size: 1.1rem;
	}

	span {
		font-family: var(--font-sans);
		font-weight: 600;
		color: var(--white);
		display: ${({ top }) => (!top ? "none" : "block")};

		@media (max-width: 550px) {
			display: none;
		}
	}

	&::before {
		content: "";
		position: absolute;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 1.7px solid var(--red);
		border-radius: 50px;
		background-color: #fff;
		z-index: -1;
		transition: transform 0.25s ease-out;
	}

	&:hover::before {
		transform: ${({ top }) =>
			top ? "scaleX(1.06) scaleY(1.15)" : "scale(1.15)"};
	}

	@media (max-width: 550px) {
		width: 40px;
		height: 40px;
		justify-content: center;
		padding: 0;
	}
`;

const NavLinks = styled.div`
	display: flex;
	align-items: center;
	padding-left: 1rem;
	gap: 5rem;

	@media (max-width: 550px) {
		display: none;
	}
`;

const MiddleLinks = styled.ul`
	display: ${({ top }) => (top ? "flex" : "none")};
	gap: 2rem;
	list-style: none;

	@media (max-width: 1024px) {
		display: none;
	}
`;

const RightLinks = styled.ul`
	list-style: none;
	display: flex;
	gap: 1.5rem;
	align-items: center;

	li {
		display: flex;
		align-items: center;
		cursor: pointer;

		svg {
			font-size: 1.15rem;
			color: ${({ top }) => (top ? "var(--white)" : "var(--black)")};
		}

		&:first-child {
			@media (max-width: 1150px) {
				display: ${({ top }) => (top ? "block" : "none")};
			}
			@media (max-width: 550px) {
				display: none;
			}
		}

		&:last-child {
			background-color: var(--white);
			display: flex;
			gap: 0.7rem;
			align-items: center;
			border-radius: 50px;
			box-shadow: 0 0 0 2px rgb(145 145 145 / 10%);
			padding: 0.5rem 0.7rem;

			svg {
				font-size: 1.35rem;
				color: ${({ top }) => (top ? "var(--black)" : "var(--black)")};
			}
		}
	}

	@media (max-width: 900px) {
		display: ${({ top }) => (top ? "flex" : "none")};
	}
`;
