import React, { Dispatch, SetStateAction } from "react";
import Button from "../common/Button";

interface Props {
  author: Author;
  setModalTitle: Dispatch<SetStateAction<string>>;
}

const AuthorItem: React.FC<Props> = ({ author, setModalTitle }) => {
  return (
    <div className='flex items-center my-4 justify-center'>
      <div className='text-2xl w-1/3'>{author.name}</div>
      <label htmlFor='my-modal' className='btn w-24 mx-2' onClick={() => setModalTitle("Edit Author")}>
        EDIT
      </label>
      <Button className='btn-error mx-2'>Remove</Button>
    </div>
  );
};

export default AuthorItem;
