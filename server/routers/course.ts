import { mockedCoursesList } from "../../constants/mockedCourses";
import { createNextRouter, procedure } from "../server";
import z from "zod";
import prisma from "../../db/PrismaClient";

export const courseRouter = createNextRouter({
  courses: procedure.query<Course[]>(async () => {
    return prisma.course.findMany();
  }),
  course: procedure
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
});
