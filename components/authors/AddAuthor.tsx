import Input from "../common/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import Title from "../common/Title";
import { trpc } from "../../server/trpc";

const AddAuthor = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Author>();

  const ctx = trpc.useContext();
  const mutation = trpc.author.createAuthor.useMutation();

  const onSubmit: SubmitHandler<Author> = (data) => {
    mutation.mutateAsync(data, {
      onSuccess: (author) => {
        ctx.author.authors.invalidate();
      },
    });
  };

  return (
    <div className='m-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>Author name</div>
          <Input
            className=' border-amber-300 p-2 my-2 rounded-md w-96'
            placeholder='Enter author name'
            {...register("name", { required: true })}
          />
        </div>
      </form>
    </div>
  );
};

export default AddAuthor;
