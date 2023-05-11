import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Modal } from "semantic-ui-react";
import Button from "../common/Button";
import { trpc } from "../../server/trpc";

type Props = {
  header: string;
  trigger: React.ReactNode;
};

const EditAuthorModal = ({ header, trigger }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Author>();

  const useMutation = trpc.author.createAuthor.useMutation();
  const ctx = trpc.useContext();

  const onSubmit = (data: Author) => {
    useMutation.mutateAsync(
      { name: data.name },
      {
        onSuccess: () => {
          ctx.author.invalidate();
          setOpen(false);
        },
      }
    );
  };

  const onOpen = () => {
    setOpen(true);
    reset({
      name: "",
    });
  };

  return (
    <Modal onClose={() => setOpen(false)} onOpen={onOpen} open={open} size='small' trigger={trigger}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Author Name</label>
            <input placeholder='Enter author name' {...register("name", { required: true })} />
            {errors.name && <span className='mx-1 text-red-500'>Required</span>}
          </Form.Field>
          <Form.Field className='flex justify-end'>
            <Button color='black' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type='submit' content='Submit' labelPosition='right' icon='checkmark' positive />
          </Form.Field>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EditAuthorModal;
