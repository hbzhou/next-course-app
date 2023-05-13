import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Label, Modal } from "semantic-ui-react";
import Button from "../common/Button";
import { trpc } from "../../server/trpc";

type Props = {
  header: string;
  trigger: React.ReactNode;
  author?: Author;
};

const EditAuthorModal = ({ header, trigger, author }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Author>();

  const createMutation = trpc.author.createAuthor.useMutation();
  const updateMutation = trpc.author.updateAuthor.useMutation();
  const ctx = trpc.useContext();

  const onSubmit = (data: Author) => {
    if (!author) {
      createMutation.mutateAsync(
        {
          name: data.name,
        },
        {
          onSuccess: () => {
            ctx.author.invalidate();
            setOpen(false);
          },
        }
      );
    } else {
      updateMutation.mutateAsync(
        {
          id: author.id,
          name: data.name,
        },
        {
          onSuccess: () => {
            ctx.author.invalidate();
            setOpen(false);
          },
        }
      );
    }
  };

  const onOpen = () => {
    setOpen(true);
    if (!author) {
      reset({
        name: "",
      });
    } else {
      setValue("name", author.name);
    }
  };

  return (
    <Modal onClose={() => setOpen(false)} onOpen={onOpen} open={open} size='small' trigger={trigger} closeIcon={true}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Author Name</label>
            <input placeholder='Enter author name' {...register("name", { required: true })} />
            {errors.name && (
              <Label basic color='red' pointing='above'>
                Required
              </Label>
            )}
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
