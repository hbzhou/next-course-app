import React from "react";
import { useRouter } from "next/router";
import { trpc } from "../../server/trpc";

const CourseInfo: React.FC = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: course, isLoading, isError, error } = trpc.course.course.useQuery({ id });

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError || !course) {
    return <div>{error?.message}</div>;
  }

  return (
    <div className='border-solid border-2 border-blue-300 m-4'>
      <h2>{course.title}</h2>
      <div className='flex'>
        <div className=' w-1/2 m-4'>{course!.description}</div>
        <div className='m-4'>
          <div>
            <span className='font-bold mr-3'>ID:</span>
            <span>{course.id}</span>
          </div>
          <div>
            <span className='font-bold mr-3'>Duration:</span>
            <span>{course.duration} hours</span>
          </div>
          <div>
            <span className='font-bold mr-3'>Created:</span>
            <span>{course.creationDate}</span>
          </div>
          <div className='flex'>
            <div className='font-bold mr-3'>Authors:</div>
            <div>
              {course.authors.map((author) => {
                return <div key={author}>author</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
