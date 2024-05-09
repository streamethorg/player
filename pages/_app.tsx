import "styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

function MyApp({ Component, pageProps }) {
  const client = createReactClient({
    provider: studioProvider({
      apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY,
    }),
  });

  return (
    <LivepeerConfig client={client}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp;
