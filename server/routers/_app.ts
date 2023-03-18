import { createNextRouter } from "../server";
import { authorRouter } from "./author";
import { courseRouter } from "./course";
import { githubRouter } from "./github";

export const appRouter = createNextRouter({
  github: githubRouter,
  course: courseRouter,
  author: authorRouter,
});

export type AppRouter = typeof appRouter;
