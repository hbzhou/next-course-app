import type { AppProps, AppType } from "next/app";
import Navbar from "../components/navbar/Navbar";
import { trpc } from "../server/trpc";

import "../styles/global.css";
import "semantic-ui-css/semantic.min.css";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
};

export default trpc.withTRPC(App);
