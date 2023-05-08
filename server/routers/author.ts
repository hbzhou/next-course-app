import z, { string } from "zod";
import prisma from "../../db/PrismaClient";
import { createNextRouter, procedure } from "../server";

export const authorRouter = createNextRouter({
  authors: procedure.query<Author[]>(async () => {
    return prisma.author.findMany();
  }),
  createAuthor: procedure.input(z.object({ name: z.string().nonempty() })).mutation(async ({ input }) => {
    return prisma.author.create({ data: { ...input } });
  }),
  deleteAuthor: procedure.input(z.object({ id: z.string().nonempty() })).mutation(async ({ input }) => {
    return prisma.author.delete({
      where: {
        id: input.id,
      },
    });
  }),
});
