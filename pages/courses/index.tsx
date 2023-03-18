import _ from "lodash";
import { useMemo } from "react";
import CourseCard from "../../components/courses/CourseCard";
import { trpc } from "../../server/trpc";

const Courses = () => {
  const { data: courses } = trpc.course.courses.useQuery();
  const { data: authors } = trpc.author.authors.useQuery();
  const authorDic = useMemo(() => new Map(authors?.map((author) => [author.id, author.name])), [authors]);
  const courseWithAuthors = useMemo(() => {
    return courses?.map((item) => {
      const authorNames: string[] = item.authors.map((authorId) => authorDic.get(authorId) ?? "").filter((name) => !_.isEmpty(name));
      return {
        ...item,
        authors: authorNames,
      };
    });
  }, [authorDic, courses]);
  return (
    <div className='border-solid border-2 border-green-300  m-4'>
      {courseWithAuthors?.map((course) => {
        return <CourseCard key={course.id} {...course} />;
      })}
    </div>
  );
};

export default Courses;
