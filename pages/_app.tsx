import type { AppProps, AppType } from "next/app";
import Navbar from "../components/navbar/Navbar";
import { trpc } from "../server/trpc";
import { SessionProvider } from "next-auth/react";

import "../styles/global.css";
import "semantic-ui-css/semantic.min.css";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />;
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
