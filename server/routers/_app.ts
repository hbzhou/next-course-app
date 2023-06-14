import { createNextRouter } from "../server";
import { authorRouter } from "./author";
import { courseRouter } from "./course";
import { githubRouter } from "./github";
import { userRouter } from "./user";

export const appRouter = createNextRouter({
  github: githubRouter,
  course: courseRouter,
  author: authorRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
