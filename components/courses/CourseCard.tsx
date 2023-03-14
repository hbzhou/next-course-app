import React from "react";

const CourseCard: React.FC<Course> = ({ id, title, description, duration, creationDate, authors }) => {
  return (
    <div className='flex justify-between items-center m-4 border-solid border-2 border-green-500'>
      <div className='card m-4 w-1/2'>
        <div className='card-body'>
          <h2 className=' card-title'>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='divider lg:divider-horizontal'></div>
      <div className='flex flex-col justify-evenly flex-grow m-4 min-w-fit'>
        <div className='m-2'>
          <label>Authors:</label>
          <span>{authors.join(",")}</span>
        </div>
        <div className='m-2'>
          <label>Duration:</label>
          <span>{duration} hours</span>
        </div>
        <div className='m-2'>
          <label>Created:</label>
          <span>{creationDate}</span>
        </div>
        <div className='m-2 text-center'>
          <button className='btn btn-info'>Show course</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
