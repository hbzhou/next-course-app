import React from "react";
import Button from "../common/Button";

const AuthorItem: React.FC<Author> = ({ name }) => {
  return (
    <div className='flex items-center my-4 justify-center'>
      <div className='text-2xl w-1/3'>{name}</div>
      <Button className=' btn-secondary mx-2'>Edit</Button>
      <Button className='btr-error mx-2'>Remove</Button>
    </div>
  );
};

export default AuthorItem;
