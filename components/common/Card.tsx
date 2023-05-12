import React from "react";
import { Card as SmtCard } from "semantic-ui-react";

type Props = {
  header: string;
  description: string;
  className?: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ header, description, className, children }) => {
  return (
    <SmtCard className={className}>
      <SmtCard.Content header={header} />
      <SmtCard.Content>
        <SmtCard.Description className='h-80 max-h-80 flex-wrap overflow-ellipsis overflow-hidden'>{description}</SmtCard.Description>
      </SmtCard.Content>
      <SmtCard.Content extra>{children}</SmtCard.Content>
    </SmtCard>
  );
};

export default Card;
