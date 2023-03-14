import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = async (opts: CreateNextContextOptions) => {
  const { req: request, res: response } = opts;
  return { request, response };
};
