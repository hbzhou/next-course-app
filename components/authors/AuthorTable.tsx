import React from "react";
import { Table } from "semantic-ui-react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import DeleteAuthorModal from "./DeleteAuthorModal";
import EditAuthorModal from "./EditAuthorModal";

type Props = {
  authors?: Author[];
};

const AuthorTable: React.FC<Props> = ({ authors }) => {
  return (
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
              <EditAuthorModal header='Edit Author' author={author} trigger={<Button color='linkedin'>Edit</Button>} />
              <DeleteAuthorModal trigger={<Button color='red'>Delete</Button>} dataId={author.id} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default AuthorTable;
