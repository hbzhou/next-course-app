import React from "react";
import { Table } from "semantic-ui-react";
import Button from "../common/Button";
import DeleteAuthorModal from "./DeleteAuthorModal";
import EditAuthorModal from "./EditAuthorModal";

type Props = {
  authors?: Author[];
};

const AuthorTable: React.FC<Props> = ({ authors }) => {
  return (
    <Table celled>
      <Header />
      <Table.Body>
        {authors?.map((author) => (
          <Row key={author.id} author={author} />
        ))}
      </Table.Body>
    </Table>
  );
};

const Header = () => {
  const headers = ["Author Name", "Actions"];
  return (
    <Table.Header>
      <Table.Row>
        {headers.map((header) => {
          return (
            <Table.HeaderCell className='!text-center' key={header}>
              {header}
            </Table.HeaderCell>
          );
        })}
      </Table.Row>
    </Table.Header>
  );
};

const Row = ({ author, key }: { author: Author; key: string }) => {
  return (
    <Table.Row key={key}>
      <Table.Cell className='!text-center'>{author.name}</Table.Cell>
      <Table.Cell className='!text-center'>
        <EditAuthorModal trigger={<Button color='linkedin'>Edit</Button>} header='Edit Author' author={author} />
        <DeleteAuthorModal trigger={<Button color='red'>Delete</Button>} dataId={author.id} />
      </Table.Cell>
    </Table.Row>
  );
};

export default AuthorTable;
