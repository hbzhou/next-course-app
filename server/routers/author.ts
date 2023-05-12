import z from "zod";
import prisma from "../../db/PrismaClient";
import { createNextRouter, procedure } from "../server";

export const authorRouter = createNextRouter({
  authors: procedure.query<Author[]>(async () => {
    return prisma.author.findMany();
  }),
  createAuthor: procedure.input(z.object({ name: z.string().nonempty() })).mutation(async ({ input }) => {
    return prisma.author.create({ data: { ...input } });
  }),
  updateAuthor: procedure.input(z.object({ id: z.string().nonempty(), name: z.string().nonempty() })).mutation(async ({ input }) => {
    return prisma.author.update({ where: { id: input.id }, data: { name: input.name } });
  }),

  deleteAuthor: procedure.input(z.object({ id: z.string().nonempty() })).mutation(async ({ input }) => {
    return prisma.author.delete({
      where: {
        id: input.id,
      },
    });
  }),
});
