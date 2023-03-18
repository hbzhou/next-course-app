import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { trpcReact, trpcClient, queryClient } from "./trpc";

export const withReactTRPC = ({ children }: PropsWithChildren<{}>) => (
  <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </trpcReact.Provider>
);
