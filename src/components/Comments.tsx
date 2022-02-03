import React, { Suspense } from "react";
import { List, Typography, Skeleton } from "antd";
import { useCommentsQuery } from "../hooks";

const Comments: React.FC = () => {
  const { data: comments } = useCommentsQuery();
  return (
    <div style={{ maxHeight: "100vh", overflow: "scroll" }}>
      <List
        header={<Typography.Title>Comments</Typography.Title>}
        bordered
        dataSource={comments}
        renderItem={(item: any) => (
          <List.Item>
            <Typography.Text>{item.name}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

const CommentsLoader = () => {
  const data = Array.from({ length: 10 }).map((_, index) => index);
  return (
    <List
      header={<Typography.Title>Comments</Typography.Title>}
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

const CommentsWithSuspense = () => {
  return (
    <Suspense fallback={<CommentsLoader />}>
      <Comments />
    </Suspense>
  );
};

export default CommentsWithSuspense;
