import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { createTRPCReact } from "@trpc/react-query";
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

const links = [
  httpBatchLink({
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     **/
    url: `${getBaseUrl()}/api/trpc`,
  }),
];
const queryClientConfig = {
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 2, staleTime: 60 * 1000 } },
  queryCache: new QueryCache({
    onError,
  }),
  mutationCache: new MutationCache({
    onError,
  }),
};
export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links,
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       **/
      queryClientConfig,
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
});

export const trpcReact = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient(queryClientConfig);

export const trpcClient = trpcReact.createClient({ links });
