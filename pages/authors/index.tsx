import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthorTable from "../../components/authors/AuthorTable";
import EditAuthorModal from "../../components/authors/EditAuthorModal";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { trpc } from "../../server/trpc";

const Authors = () => {
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
    <div className='m-4 flex justify-center'>
      <div className='m-4 w-1/2'>
        <div className='font-bold text-2xl text-center'>Authors</div>
        <div className='flex justify-end my-4'>
          <EditAuthorModal header='Add Author' trigger={<Button color='linkedin'>Add new Author</Button>} />
        </div>
        <AuthorTable authors={authors} />
      </div>
    </div>
  );
};

export default Authors;
