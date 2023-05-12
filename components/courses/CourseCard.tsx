import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useAuthors } from "../../service/course.hooks";
import Button from "../common/Button";
import LabelGroup from "../common/LabelGroup";
import Card from "../common/Card";

const CourseCard: React.FC<Course> = ({ id, title, description, duration, creationDate, authors }) => {
  const router = useRouter();
  const authorList = useAuthors(authors);
  const showCourse = useCallback(() => {
    router.push(`/courses/${id}`);
  }, [router, id]);

  return (
    <Card header={title} description={description} className='!mt-4 !w-1/5 h-full'>
      <div className='flex flex-col justify-evenly'>
        <LabelGroup label='Authors'>{authorList?.join(",")}</LabelGroup>
        <LabelGroup label='Duration'>{duration} hours</LabelGroup>
        <LabelGroup label='Created'>{creationDate}</LabelGroup>
        <div className='my-2'>
          <Button onClick={showCourse}>Show course</Button>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
