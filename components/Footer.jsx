import React from "react";
import styled from "styled-components";
import {
	FiTwitter,
	FiFacebook,
	FiInstagram,
	FiDollarSign,
	FiGlobe,
} from "react-icons/fi";

export default function Footer() {
	return (
		<Wrapper>
			<Container>
				<Top>
					<SectionLinks>
						<li>About</li>
						<li>
							<a href="#">How Airbnb works</a>
						</li>
						<li>
							<a href="#">Newsroom</a>
						</li>
						<li>
							<a href="#">Airbnb 2021</a>
						</li>
						<li>
							<a href="#">Investors</a>
						</li>
						<li>
							<a href="#">Airbnb Plus</a>
						</li>
						<li>
							<a href="#">Airbnb Luxe</a>
						</li>
					</SectionLinks>

					<SectionLinks>
						<li>Community</li>
						<li>
							<a href="#">Diversity & Belonging</a>
						</li>
						<li>
							<a href="#">Accessibility</a>
						</li>
						<li>
							<a href="#">Airbnb Associates</a>
						</li>
						<li>
							<a href="#">Frontline Stays</a>
						</li>
						<li>
							<a href="#">Guest Referrals</a>
						</li>
						<li>
							<a href="#">Airbnb.org</a>
						</li>
					</SectionLinks>

					<SectionLinks>
						<li>Host</li>
						<li>
							<a href="#">Host your Home</a>
						</li>
						<li>
							<a href="#">Host an Online Experience</a>
						</li>
						<li>
							<a href="#">Host an Experience</a>
						</li>
						<li>
							<a href="#">Responsible hosting</a>
						</li>
						<li>
							<a href="#">Resource Centre</a>
						</li>
						<li>
							<a href="#">Cimmunity Centre</a>
						</li>
					</SectionLinks>

					<SectionLinks>
						<li>SUPPORT</li>
						<li>
							<a href="#">Our COVID-19 Response</a>
						</li>
						<li>
							<a href="#">Help Centre</a>
						</li>
						<li>
							<a href="#">Cancellation options</a>
						</li>
						<li>
							<a href="#">Neighbourhood Support</a>
						</li>
						<li>
							<a href="#">Trust & Safety</a>
						</li>
					</SectionLinks>
				</Top>

				<Bottom>
					<div>
						<p>
							© 2021{" "}
							<a href="https://github.com/abubakarMana01">Abubakar Mana</a>{" "}
						</p>
					</div>

					<div>
						<p>
							<FiGlobe />
							English
						</p>
						<p>
							<FiDollarSign />
							USD
						</p>
						<p>
							<a href="#">
								<FiFacebook />
							</a>
						</p>
						<p>
							<a href="https://twitter.com/abubakarMana1">
								<FiTwitter />
							</a>
						</p>
						<p>
							<a href="https://instagram.com/abubakr_mana_">
								<FiInstagram />
							</a>
						</p>
					</div>
				</Bottom>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	padding: 0 3rem;
	background-color: var(--gray);
	border-top: 1px solid rgba(0, 0, 0, 0.133);

	@media (max-width: 550px) {
		padding: 0 1rem;
	}
`;

const Container = styled.div`
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 3rem 0;
	display: flex;
	flex-direction: column;
`;

const Top = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 0.5rem;
	row-gap: 1.5rem;
	padding-bottom: 1.5rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.133);
`;

const SectionLinks = styled.ul`
	list-style: none;

	li:first-child {
		font-size: 1.1rem;
		text-transform: uppercase;
		font-weight: 800;
		margin-bottom: 0.9rem;
	}

	li {
		margin-bottom: 0.75rem;
	}

	li a {
		color: var(--dark);
		cursor: pointer;
		opacity: 0.8;
		font-size: 0.95rem;
		transition: all 0.25s ease;

		&:hover {
			text-decoration: underline;
			opacity: 1;
		}
	}
`;

const Bottom = styled.div`
	padding-top: 2rem;
	display: flex;
	justify-content: space-between;

	a {
		color: var(--black);
		transition: all 0.3s ease;

		&:hover {
			text-decoration: underline;
		}
	}

	p {
		font-size: 1.15rem;
		color: var(-black);
	}

	div:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 1rem;

		p {
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}

		a {
			display: grid;
			place-items: center;

			margin: 0 0.5rem;
		}
	}

	@media (max-width: 750px) {
		flex-direction: column;
		gap: 1rem;
	}

	@media (max-width: 345px) {
		div:nth-child(2) {
			flex-direction: column;
			align-items: flex-start;

			a {
				margin: 0 0;
			}
		}
	}
`;
