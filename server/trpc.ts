import { MutationCache, QueryCache } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { get, toString } from "lodash";
import type { AppRouter } from "../server/routers/_app";

function getBaseUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "";

  if (process.env.HOST)
    // reference for render.com
    return `http://${process.env.HOST}:${process.env.PORT}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

const onError = (err: any) => {
  const errorMsg = get(err, "response.data.message") || toString(get(err, "response.data")) || err.message;
  //TODO toast service
};

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       **/
      queryClientConfig: {
        defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 2, staleTime: 60 * 1000 } },
        queryCache: new QueryCache({
          onError,
        }),
        mutationCache: new MutationCache({
          onError,
        }),
      },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
});
