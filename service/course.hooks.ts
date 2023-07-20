import { isEmpty } from "lodash";
import { trpc } from "../server/trpc";
import { useAuthors } from "./author.hook";
import { useRouter } from "next/router";

export const useAuthorNames = (authorIds: string[] | undefined) => {
  const { data: authors } = useAuthors()
  const authorDict = new Map(authors?.map((author) => [author.id, author.name]));
  return authorIds?.map((id) => authorDict.get(id) ?? "").filter((name) => !isEmpty(name));
};

export const useCourses = () => {
  return trpc.course.courses.useQuery();
}

export const useCreateCourse = () => {
  const mutation = trpc.course.createCourse.useMutation();
  const ctx = trpc.useContext();
  const router = useRouter();
  return (course: Course) => mutation.mutateAsync(
    course,
    {
      onSuccess: (_: Course) => {
        ctx.course.courses.invalidate();
        router.push("/courses");
      },
    }
  );
}
