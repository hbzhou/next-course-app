import { createNextRouter, procedure } from "../server";
import z from "zod";
import githubTransport from "../../transport/githubTransport";

export const githubRouter = createNextRouter({
  userProfile: procedure
    .input(
      z.object({
        userName: z.string().nonempty(),
        projectName: z.string().nonempty(),
      })
    )
    .query<UserProfile>(async ({ input }) => {
      return githubTransport.getUserProfile(input.userName, input.projectName);
    }),
});
