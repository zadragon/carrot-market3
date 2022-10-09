import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="w-full max-w-xl mx-auto">
			<Component {...pageProps} />
		</div>
	);
}

//6.8  할차례2
export default MyApp;
