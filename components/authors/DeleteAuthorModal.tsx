import React from "react";
import { trpc } from "../../server/trpc";
import Modal from "../common/Modal";

type Props = {
  trigger?: React.ReactNode;
  dataId: string;
};

const DeleteAuthorModal = ({ dataId, trigger }: Props) => {
  const ctx = trpc.useContext();
  const mutation = trpc.author.deleteAuthor.useMutation();
  const onConfirm = () => {
    mutation.mutateAsync(
      { id: dataId },
      {
        onSuccess: () => {
          ctx.author.invalidate();
        },
      }
    );
  };

  return (
    <Modal header={"Delete Author"} onConfirm={onConfirm} trigger={trigger} size='tiny'>
      <p>Are you sure you want to delete this author?</p>
    </Modal>
  );
};

export default DeleteAuthorModal;
