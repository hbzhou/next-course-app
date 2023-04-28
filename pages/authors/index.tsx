import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AddAuthor from "../../components/authors/AddAuthor";
import AuthorItem from "../../components/authors/AuthorItem";
import Modal from "../../components/common/Modal";
import { trpc } from "../../server/trpc";

const Authors = () => {
  const [title, setTitle] = useState<string>("");
  const { register, handleSubmit } = useForm<Author>();

  const ctx = trpc.useContext();
  const { data: authors } = trpc.author.authors.useQuery();
  const mutation = trpc.author.createAuthor.useMutation();

  const onSubmit: SubmitHandler<Author> = (data) => {
    mutation.mutateAsync(data, {
      onSuccess: () => {
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
            <label htmlFor='my-modal' className='btn bg-blue-700 ml-10 h-4' onClick={() => setTitle("New Author")}>
              New
            </label>
          </div>
          {authors?.map((author) => (
            <AuthorItem key={author.id} author={author} setModalTitle={setTitle} />
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal title={title}>
          <AddAuthor register={register} />
        </Modal>
      </form>
    </div>
  );
};

export default Authors;
