import React from "react";
import { Loader, Table } from "semantic-ui-react";
import { useUsers } from "../../service/users.hook";
import Link from "next/link";

const Users = () => {
  const { data: users, isLoading } = useUsers();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Table>
      <Header />
      <Table.Body>
        {users?.map((user) => (
          <Row user={user} key={user.id}></Row>
        ))}
      </Table.Body>
    </Table>
  );
};

const Header = () => {
  const headers = ["Name", "Email", "Password", "Role", ""];
  return (
    <Table.Header>
      <Table.Row>
        {headers.map((header) => {
          return <Table.HeaderCell key={header}>{header}</Table.HeaderCell>;
        })}
      </Table.Row>
    </Table.Header>
  );
};

const Row: React.FC<{ user: User }> = ({ user }) => {
  const ref = `/users/${user.id}`;
  return (
    <Table.Row key={user.id}>
      <Table.Cell>
        <Link href={ref}>{user.name}</Link>
      </Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.password}</Table.Cell>
      <Table.Cell>{user.role}</Table.Cell>
      <Table.Cell></Table.Cell>
    </Table.Row>
  );
};

export default Users;
