import { useState } from "react";
import { Modal as SmtModal, ModalProps } from "semantic-ui-react";
import Button from "./Button";

type Props = {
  header: string;
  onConfirm: () => void;
} & ModalProps;

const Modal = ({ header, children, onConfirm, trigger, ...rest }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOnConfirm = () => {
    onConfirm();
    setOpen(true);
  };

  return (
    <SmtModal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} trigger={trigger} {...rest}>
      <SmtModal.Header>{header}</SmtModal.Header>
      <SmtModal.Content>{children}</SmtModal.Content>
      <SmtModal.Actions>
        <Button content='Cancel' color='black' onClick={() => setOpen(false)} />
        <Button content='Confirm' labelPosition='right' icon='checkmark' onClick={handleOnConfirm} positive />
      </SmtModal.Actions>
    </SmtModal>
  );
};

export default Modal;
