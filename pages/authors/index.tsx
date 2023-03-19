import { useEffect, useState } from "react";
import AddAuthor from "../../components/authors/AddAuthor";
import AuthorItem from "../../components/authors/AuthorItem";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { trpc } from "../../server/trpc";

interface QueryAllAuthorsResp {
  successful: boolean;
  result: Author[];
}

const Authors = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data: authors } = trpc.author.authors.useQuery();

  return (
    <div className=' border-solid border-2 border-pink-400 m-4 flex justify-center'>
      <div className='m-4 w-1/2'>
        <div>
          <div className='flex justify-center my-8'>
            <div className='block font-bold text-2xl ml-32'>Authors</div>
            <Button className='ml-24 rounded-md border-purple-400' onClick={() => setShowModal(true)}>
              Create author
            </Button>
          </div>
          {authors?.map((author) => (
            <AuthorItem key={author.id} {...author} />
          ))}
        </div>
      </div>
      {showModal ? (
        // eslint-disable-next-line react/no-children-prop
        <Modal title='Add Author' children={<AddAuthor />} handleClose={() => setShowModal(false)} handleSave={() => setShowModal(false)} />
      ) : null}
    </div>
  );
};

export default Authors;
