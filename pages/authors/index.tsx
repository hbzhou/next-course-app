import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Table } from "semantic-ui-react";
import Button from "../../components/common/Button";
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
    <div className='m-4 flex justify-center'>
      <div className='m-4 w-1/2'>
        <div>
          <div className='font-bold text-2xl text-center'>Authors</div>
          <div className='flex justify-end my-4'>
            <Button color='linkedin'>Add new Author</Button>
          </div>
          <div>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell className='!text-center'>Author Name</Table.HeaderCell>
                  <Table.HeaderCell className='!text-center'>Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {authors?.map((author) => (
                  <Table.Row key={author.id}>
                    <Table.Cell className='!text-center'>{author.name}</Table.Cell>
                    <Table.Cell className='!text-center'>
                      <Button color='linkedin'>Edit</Button>
                      <Button color='red'>Delete</Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Modal title={title}>
          <AddAuthor register={register} />
        </Modal>
      </form> */}
    </div>
  );
};

export default Authors;
