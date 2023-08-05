import React from "react";
import { Loader, Table } from "semantic-ui-react";
import { useUsers } from "../../service/users.hook";
import Link from "next/link";

const Users = () => {
  const headers = ["Name", "Email", "Password", "Role", ""];
  const { data: users, isLoading } = useUsers();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {headers.map((header) => {
            return <Table.HeaderCell key={header}>{header}</Table.HeaderCell>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users?.map((user) => {
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
        })}
      </Table.Body>
    </Table>
  );
};

export default Users;
