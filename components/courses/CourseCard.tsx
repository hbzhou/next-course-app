import { useRouter } from "next/router";
import React, { useCallback } from "react";
import Button from "../common/Button";
import LabelGroup from "../common/LabelGroup";

const CourseCard: React.FC<Course> = ({ id, title, description, duration, creationDate, authors }) => {
  const router = useRouter();
  const showCourse = useCallback(() => {
    router.push(`/courses/${id}`);
  }, [router, id]);

  return (
    <div className='course-card flex flex-col  m-4 border-solid border-2 border-green-500'>
      <div className='card'>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description}</p>
          <div className='flex flex-col justify-evenly'>
            <LabelGroup label='Authors'>{authors.join(",")}</LabelGroup>
            <LabelGroup label='Duration'>{duration} hours</LabelGroup>
            <LabelGroup label='Created'>{creationDate}</LabelGroup>
            <div className='card-actions justify-center'>
              <Button className='btn-info' onClick={showCourse}>
                Show course
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
