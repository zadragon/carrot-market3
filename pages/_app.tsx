import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="w-full max-w-xl mx-auto">
			<Component {...pageProps} />
		</div>
	);
}

//8.2  할차례
export default MyApp;
