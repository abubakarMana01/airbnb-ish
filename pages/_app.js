import { createGlobalStyle, ThemeProvider } from "styled-components";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
	:root {
		--red: #ff385c;
		--white: #fff;
		--black: #2e2e48;
		--light: #fafafc;
		--gray: #efeff5;

		--font-sans: "Nunito Sans", -apple-system, BlinkMacSystemFont, Segoe UI,
			Roboto, Ubuntu, Helvetica Neue, sans-serif;

		--max-width: 1200px;
	}

	*,
	*::before,
	*::after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		font-family: var(--font-sans);
		color: var(--black);
		line-height: 1.5;
	}

	::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #ccc;
		border-left: 2px solid var(--light);
		border-right: 2px solid var(--light);
		border-radius: 5px;
	}
	::-webkit-scrollbar-track {
		background: var(--light);
	}

	a {
		text-decoration: none;
	}

	*::selection {
		background-color: var(--red);
		color: var(--white);
	}
`;

const theme = {
	colors: {
		primary: "#fafafa",
	},
};

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
