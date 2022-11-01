import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import queryClient from "../service/queryClient";

import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
