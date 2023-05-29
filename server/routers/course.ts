import z from "zod";
import prisma from "../../db/PrismaClient";
import { createNextRouter, procedure } from "../server";

export const courseRouter = createNextRouter({
  courses: procedure.query<Course[]>(async () => {
    return prisma.course.findMany();
  }),
  getCourse: procedure
    .input(
      z.object({
        id: z.string().nonempty(),
      })
    )
    .query<Course | null>(async ({ input }) => {
      return prisma.course.findUniqueOrThrow({
        where: {
          id: input.id,
        },
      });
    }),
  createCourse: procedure
    .input(
      z.object({
        title: z.string().nonempty(),
        description: z.string(),
        duration: z.number(),
        authors: z.array(z.string()),
        creationDate: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return prisma.course.create({ data: { ...input } });
    }),
});
