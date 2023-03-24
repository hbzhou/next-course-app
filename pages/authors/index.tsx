import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AddAuthor from "../../components/authors/AddAuthor";
import AuthorItem from "../../components/authors/AuthorItem";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { trpc } from "../../server/trpc";

const Authors = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<Author>();

  const ctx = trpc.useContext();
  const { data: authors } = trpc.author.authors.useQuery();
  const mutation = trpc.author.createAuthor.useMutation();

  const onSubmit: SubmitHandler<Author> = (data) => {
    mutation.mutateAsync(data, {
      onSuccess: () => {
        setShowModal(false);
        ctx.author.authors.invalidate();
      },
    });
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal title='Add Author' handleClose={() => setShowModal(false)}>
            <AddAuthor register={register} />
          </Modal>
        </form>
      ) : null}
    </div>
  );
};

export default Authors;
