import React, { useState } from "react";
import styled from "styled-components";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import Image from "next/image";

export default function Map({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({});

	const coordinates = searchResults?.map((res) => ({
		longitude: res.long,
		latitude: res.lat,
	}));

	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		...center,
		width: "100%",
		height: "100%",
		zoom: 11,
	});

	return (
		<MapWrapper>
			<ReactMapGl
				mapStyle="mapbox://styles/abubakarmana01/ckxzbjuvw0zy814l9866puaup"
				mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
				{...viewport}
				onViewportChange={(viewport) => setViewport(viewport)}
			>
				{searchResults.map((res) => (
					<div key={Math.random()}>
						<Marker longitude={res.long} latitude={res.lat}>
							<p onClick={() => setSelectedLocation(res)}>📌</p>
						</Marker>

						{selectedLocation.long === res.long && (
							<Popup
								closeOnClick={true}
								longitude={res.long}
								latitude={res.lat}
								onClose={() => setSelectedLocation({})}
							>
								<div
									style={{
										width: 300,
										height: 200,
										position: "relative",

										overflow: "hidden",
									}}
								>
									<Image
										src={res.img}
										objectFit="cover"
										objectPosition="center"
										layout="fill"
										alt=""
									/>
								</div>
								<span>{res.title}</span>
							</Popup>
						)}
					</div>
				))}
			</ReactMapGl>
		</MapWrapper>
	);
}

const MapWrapper = styled.section`
	height: 100vh;
	z-index: -1;
	background-color: rgba(0, 0, 0, 0.1);

	p {
		animation: bounce 1500ms infinite ease;
		animation-timing-function: ease;
		cursor: pointer;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-50%);
		}
		70% {
			transform: translateY(-50%);
		}
		100% {
			transform: translateY(0);
		}
	}
`;
