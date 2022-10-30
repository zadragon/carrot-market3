import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="w-full max-w-xl mx-auto">
			<Component {...pageProps} />
		</div>
	);
}

//8.4  할차례 : 22.10.30
export default MyApp;
