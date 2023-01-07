import React from "react";
import CourseCard from "../../components/courses/CourseCard";
import Header from "../../components/header/Header";
import { mockedCoursesList as courses } from "../../constants/mockedCourses";

const Courses = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='border-solid border-2 border-green-300  m-4'>
        {courses.map((course) => {
          return <CourseCard key={course.id} {...course} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Courses;
