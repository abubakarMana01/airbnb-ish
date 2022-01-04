import React, { useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

export default function LocationDetails({
	setShowSearchDetails,
	location,
	setLocation,
	startDate,
	endDate,
	setStartDate,
	setEndDate,
	adultsCounter,
	setAdultsCounter,
	childrenCounter,
	setChildrenCounter,
	totalGuests,
	setTotalGuests,
}) {
	const router = useRouter();

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const handleSearch = () => {
		router.push({
			pathname: "/search",
			query: {
				location,
				totalGuests,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
			},
		});
		setShowSearchDetails(false);
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleClose = () => {
		setLocation("");
		setShowSearchDetails(false);
	};

	const handleAdultIncrement = () => {
		setAdultsCounter((prev) => {
			setTotalGuests(prev + 1 + childrenCounter);
			return prev + 1;
		});
	};

	const handleAdultDecrement = () => {
		setAdultsCounter((prev) => {
			setTotalGuests(prev - 1 + childrenCounter);
			return prev - 1;
		});
	};

	const handleChildrenIncrement = () => {
		setChildrenCounter((prev) => {
			setTotalGuests(adultsCounter + prev + 1);
			return prev + 1;
		});
	};

	const handleChildrenDecrement = () => {
		setChildrenCounter((prev) => {
			setTotalGuests(adultsCounter + prev - 1);
			return prev - 1;
		});
	};

	return (
		<Wrapper>
			<DetailsContainer>
				<div>
					<p>Location</p>
					{location ? (
						<span>{location}</span>
					) : (
						<span className="placeholder">
							Where are you going going going going?
						</span>
					)}
				</div>
				<div>
					<p>Check-in</p>
					<span>{new Date(startDate).toDateString()}</span>
				</div>
				<div>
					<p>Check-out</p>
					<span>{new Date(endDate).toDateString()}</span>
				</div>
				<div>
					<div>
						<p>Guests</p>
						{totalGuests ? (
							<span>{totalGuests}</span>
						) : (
							<span className="placeholder">Add guests</span>
						)}
					</div>
					<SearchIconContainer
						onClick={handleSearch}
						disabled={!totalGuests || !location}
						totalGuests={totalGuests}
						location={location}
					>
						<FaSearch style={{ color: "var(--white)" }} />
						<span>Search</span>
					</SearchIconContainer>
				</div>
			</DetailsContainer>
			<Container>
				<HeaderContainer>
					<Title>Pick Check-in & Check-out dates</Title>
					<CloseButton onClick={handleClose}>Close</CloseButton>
				</HeaderContainer>
				<DateRangePicker
					ranges={[selectionRange]}
					onChange={handleSelect}
					rangeColors={["#ff385c"]}
					minDate={new Date()}
				/>
				<AddGuestsContainer>
					<h2>Add guests</h2>
					<div>
						<SelectionContainer>
							<Category>Adults</Category>
							<Select decrementButtonDisabled={adultsCounter <= 0}>
								<button
									id="adultsDecrementButton"
									disabled={adultsCounter <= 0}
									onClick={handleAdultDecrement}
								>
									-
								</button>
								<span>{adultsCounter}</span>
								<button onClick={handleAdultIncrement}>+</button>
							</Select>
						</SelectionContainer>
						<SelectionContainer>
							<Category>Children</Category>
							<Select decrementButtonDisabled={childrenCounter <= 0}>
								<button
									id="childrenDecrementButton"
									disabled={childrenCounter <= 0}
									onClick={handleChildrenDecrement}
								>
									-
								</button>
								<span>{childrenCounter}</span>
								<button onClick={handleChildrenIncrement}>+</button>
							</Select>
						</SelectionContainer>
					</div>
				</AddGuestsContainer>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: 2rem;

	@media (max-width: 550px) {
		padding-top: 2.5rem;
	}
`;

const Container = styled.div`
	max-height: 60vh;
	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}

	max-width: 720px;
	margin-inline: auto;
	display: flex;
	flex-direction: column;
	place-items: center;

	.rdrDateRangePickerWrapper {
		justify-content: space-between;
		width: 100%;
		color: var(--black);

		.rdrDateDisplayWrapper {
			background-color: transparent;
		}

		.rdrDateDisplayItem {
			border-radius: 1rem;
			background-color: var(--light);
		}

		.rdrDefinedRangesWrapper {
			font-size: 1rem;
			background-color: var(--light);
			border-right: 0;
			border-radius: 1rem;
			overflow: hidden;
			width: 300px;
		}

		.rdrDefinedRangesWrapper * {
			background-color: transparent;
		}

		.rdrStaticRange {
			border-bottom: 0;

			span:hover {
				background-color: var(--gray);
			}
		}

		.rdrCalendarWrapper {
			font-size: 1rem;
			width: 100%;
		}

		.rdrDateDisplay {
			width: 27.667em;
			margin-inline: auto;
		}

		.rdrMonthAndYearWrapper {
			width: 27.667em;
			margin-inline: auto;
		}

		.rdrMonth {
			margin-inline: auto;
		}

		button {
			color: var(--black);
			font-family: var(--font-sans);
		}
	}

	@media (max-width: 830px) {
		.rdrDateRangePickerWrapper {
			justify-content: center;

			.rdrDefinedRangesWrapper {
				font-size: 0.825rem;
				width: 300px;
			}

			.rdrCalendarWrapper {
				font-size: 0.825rem;
			}
		}
	}

	@media (max-width: 700px) {
		.rdrDefinedRangesWrapper {
			display: none;
		}
	}
	@media (max-width: 500px) {
		.rdrDateRangePickerWrapper {
			padding-inline: 0.5rem;
			.rdrCalendarWrapper {
				font-size: 0.725rem;
			}
		}
	}
	@media (max-width: 375px) {
		.rdrDateRangePickerWrapper {
			.rdrCalendarWrapper {
				font-size: 0.625rem;
			}
		}
	}
`;

const DetailsContainer = styled.div`
	margin-bottom: 2rem;
	width: 100%;
	max-width: 720px;
	margin-inline: auto;
	box-shadow: rgb(0 0 0 / 7%) 0px 1rem 1.5rem -0.5rem;
	border-radius: 2rem;
	background-color: var(--light);
	display: flex;
	justify-content: space-between;

	& > div:last-child {
		flex: 2;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		padding-right: 0.5rem;
	}

	& > div {
		flex: 1;
		border-radius: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 0.5rem 1.5rem;
		border-left: 2px solid var(--gray);
		overflow: hidden;

		&:hover {
			background-color: var(--gray);
		}

		p {
			font-size: 0.825rem;
			cursor: default;
		}

		span {
			font-size: 0.875rem;
			font-weight: 700;
			cursor: default;

			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		span.placeholder {
			opacity: 0.8;
			font-weight: 400;
		}
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

const SearchIconContainer = styled.button`
	position: relative;
	padding: 1rem;
	margin-left: 1rem;
	border: none;
	cursor: ${({ totalGuests, location }) =>
		totalGuests && location ? "pointer" : "default"};
	border-radius: 100px;
	background-color: ${({ totalGuests, location }) =>
		totalGuests && location ? "var(--red)" : "#ef8094"};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 115px;
	height: 50px;

	svg {
		font-size: 1rem;
	}

	span {
		font-family: var(--font-sans);
		font-weight: 600;
		color: var(--white);
		font-size: 1.1rem !important;
	}

	&::before {
		content: "";
		position: absolute;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: ${({ disabled }) => (disabled ? "0" : "1.7px solid var(--red)")};
		border-radius: 50px;
		z-index: -1;
		transition: transform 0.25s ease-out;
	}

	&:hover::before {
		transform: ${({ disabled }) =>
			disabled ? "scale(1)" : "scaleX(1.05) scaleY(1.1)"};
		z-index: 1;
	}
`;

const HeaderContainer = styled.div`
	width: 100%;
	margin-bottom: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 1rem;

	@media (max-width: 550px) {
		justify-content: center;
		margin: 0.5rem 0;
	}
`;

const Title = styled.h2`
	font-size: 1.25rem;

	@media (max-width: 350px) {
		font-size: 1.1rem;
	}
`;

const CloseButton = styled.button`
	border: 0;
	outline: 0;
	padding: 0.6em 1.3em;
	border-radius: 1em;
	color: var(--red);
	background-color: rgba(255, 88, 93, 0.125);
	cursor: pointer;
	font-family: var(--font-sans);

	@media (max-width: 550px) {
		display: none;
	}
`;

const AddGuestsContainer = styled.div`
	padding: 0 1rem;
	padding-bottom: 2rem;
	width: 100%;
	margin-block: 2rem;

	& > div {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;

		@media (max-width: 700px) {
			flex-direction: column;
			gap: 1rem;
		}
	}

	h2 {
		font-size: 1.25rem;

		@media (max-width: 350px) {
			font-size: 1.1rem;
		}
	}
`;

const SelectionContainer = styled.div`
	display: flex;
	align-items: center;
	flex: 0.5;

	@media (max-width: 700px) {
		justify-content: space-between;
	}
`;

const Select = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 160px;

	button {
		font-family: var(--font-sans);
		outline: none;
		border: none;
		border-radius: 50px;
		font-size: 1.1rem;
		font-weight: 600;
		height: 45px;
		width: 45px;
		display: grid;
		place-items: center;
		cursor: pointer;
		transition: transform 0.25s ease;

		&:hover {
			border: 1px solid var(--black);
			transform: scale(0.9);
		}
	}

	#adultsDecrementButton {
		&:hover {
			border: ${({ decrementButtonDisabled }) =>
				decrementButtonDisabled ? "none" : "1px solid var(--black)"};
		}
	}
	#childrenDecrementButton {
		&:hover {
			border: ${({ decrementButtonDisabled }) =>
				decrementButtonDisabled ? "none" : "1px solid var(--black)"};
		}
	}
`;

const Category = styled.h3`
	font-size: 1rem;
	font-weight: 400;
	width: 70px;
	margin-right: 2rem;
`;
