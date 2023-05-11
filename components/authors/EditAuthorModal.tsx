import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "semantic-ui-react";
import Button from "../common/Button";
import Input from "../common/Input";
import Modal from "../common/Modal";
import AddAuthor from "./AddAuthor";

type Props = {
  trigger?: React.ReactNode;
  header: string;
};

const EditAuthorModal = ({ header, trigger }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Author>();

  const onSubmit = (data: Author) => {
    console.log("Submit event");
    alert(JSON.stringify(data));
  };

  return (
    <Modal header={header} trigger={trigger}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Author Name</label>
          <Input placeholder='Enter author name' {...register("name", { required: true })} />
          {errors.name && <span className='mx-1 text-red-500'>Required</span>}
        </Form.Field>
        <Button id='submitBtn' className='!hidden' />
      </Form>
    </Modal>
  );
};

export default EditAuthorModal;
