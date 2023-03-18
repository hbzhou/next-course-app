import { mockedCoursesList } from "../../constants/mockedCourses";
import { createNextRouter, procedure } from "../server";

export const courseRouter = createNextRouter({
  courses: procedure.query<Course[]>(async () => {
    return Promise.resolve(mockedCoursesList);
  }),
});
