import React from "react";
import CourseCard from "../../components/courses/CourseCard";
import Header from "../../components/header/Header";
import { trpc } from "../../server/trpc";

const Courses = () => {
  const { data: courses, isLoading } = trpc.course.courses.useQuery();

  if (isLoading) return "Loading";

  return (
    <React.Fragment>
      <Header />
      <div className='border-solid border-2 border-green-300  m-4'>
        {courses?.map((course) => {
          return <CourseCard key={course.id} {...course} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Courses;
