import { mockedCoursesList } from "../../constants/mockedCourses";
import { createNextRouter, procedure } from "../server";
import z from "zod";

export const courseRouter = createNextRouter({
  courses: procedure.query<Course[]>(async () => {
    return mockedCoursesList;
  }),
  course: procedure
    .input(
      z.object({
        id: z.string().nonempty(),
      })
    )
    .query<Course | null>(async ({ input }) => {
      return mockedCoursesList.find((course) => course.id === input.id) ?? null;
    }),
});
