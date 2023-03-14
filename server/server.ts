import { initTRPC } from "@trpc/server";
import { createContext } from "./context";

const t = initTRPC.context<typeof createContext>().create();

export const createNextRouter = t.router;
export const procedure = t.procedure;
