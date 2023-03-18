import { createNextRouter } from "../server";
import { courseRouter } from "./course";
import { githubRouter } from "./github";

export const appRouter = createNextRouter({
  github: githubRouter,
  course: courseRouter,
});

export type AppRouter = typeof appRouter;
