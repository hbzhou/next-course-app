import { createNextRouter } from "../server";
import { githubRouter } from "./github";

export const appRouter = createNextRouter({
  github: githubRouter,
});

export type AppRouter = typeof appRouter;
