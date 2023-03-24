import React from "react";
import { useRouter } from "next/router";
import { trpc } from "../../server/trpc";
import LabelGroup from "../../components/common/LabelGroup";
import { useAuthors } from "../../service/course.hooks";

const CourseInfo: React.FC = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: course, isLoading } = trpc.course.getCourse.useQuery({ id }, { enabled: !!id });
  const authors = useAuthors(course?.authors);

  if (isLoading || !course) {
    return <div>loading</div>;
  }

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-title'>{course.title}</div>
        <div>{course.description}</div>
        <div className='flex flex-col'>
          <LabelGroup label='ID'>{course.id}</LabelGroup>
          <LabelGroup label='Duration'>{course.duration} hours</LabelGroup>
          <LabelGroup label='Created'>{course.creationDate}</LabelGroup>
          <LabelGroup label='Authors'>
            {authors?.map((author) => {
              return <div key={author}>{author}</div>;
            })}
          </LabelGroup>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
