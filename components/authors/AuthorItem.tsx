import React, { Dispatch, SetStateAction } from "react";
import Button from "../common/Button";
import { trpc } from "../../server/trpc";

interface Props {
  author: Author;
  setModalTitle: Dispatch<SetStateAction<string>>;
}

const AuthorItem: React.FC<Props> = ({ author, setModalTitle }) => {
  const mutation = trpc.author.deleteAuthor.useMutation();
  const ctx = trpc.useContext();
  const handleRemove = async () => {
    mutation.mutateAsync(
      { id: author.id },
      {
        onSuccess: () => {
          ctx.author.authors.invalidate();
        },
      }
    );
  };
  return (
    <div className='flex items-center my-4 justify-center'>
      <div className='text-2xl w-1/3'>{author.name}</div>
      <label htmlFor='my-modal' className='btn w-24 mx-2' onClick={() => setModalTitle("Edit Author")}>
        EDIT
      </label>
      <Button className='btn-error mx-2' onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};

export default AuthorItem;
