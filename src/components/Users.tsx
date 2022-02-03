import React, { Suspense } from "react";
import { List, Typography, Skeleton } from "antd";
import { useUsersQuery } from "../hooks";

const Users: React.FC = () => {
  const { data: users } = useUsersQuery();
  return (
    <div style={{ maxHeight: "100vh", overflow: "scroll" }}>
      <List
        header={<Typography.Title>Users</Typography.Title>}
        bordered
        dataSource={users}
        renderItem={(item: any) => (
          <List.Item>
            <Typography.Text>{item.username}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

const UsersLoader = () => {
  const data = Array.from({ length: 10 }).map((_, index) => index);
  return (
    <List
      header={<Typography.Title>Users</Typography.Title>}
      bordered
      dataSource={data}
      renderItem={(key: any) => (
        <List.Item key={key}>
          <Skeleton.Button active block />
        </List.Item>
      )}
    />
  );
};

const UsersWithSuspense = () => {
  return (
    <Suspense fallback={<UsersLoader />}>
      <Users />
    </Suspense>
  );
};

export default UsersWithSuspense;
