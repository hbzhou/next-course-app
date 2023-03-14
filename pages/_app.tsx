import type { AppProps, AppType } from "next/app";
import { trpc } from "../server/trpc";

import "../styles/global.css";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
