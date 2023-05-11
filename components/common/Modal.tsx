import { useState } from "react";
import { Modal as SmtModal, ModalProps } from "semantic-ui-react";
import Button from "./Button";

type Props = {
  header: string;
} & ModalProps;

const Modal = ({ header, handleSubmit, children, trigger, ...rest }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <SmtModal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} trigger={trigger} {...rest}>
      <SmtModal.Header>{header}</SmtModal.Header>
      <SmtModal.Content>{children}</SmtModal.Content>
      <SmtModal.Actions>
        <Button content='Cancel' color='black' onClick={() => setOpen(false)} />
        <Button content="Yep, that's me" labelPosition='right' icon='checkmark' onClick={() => setOpen(true)} positive />
      </SmtModal.Actions>
    </SmtModal>
  );
};

export default Modal;
