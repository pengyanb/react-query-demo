import React, { Suspense } from "react";
import { List, Typography, Skeleton } from "antd";
import { useAlbumsQuery } from "../hooks";
import { ErrorBoundary } from "./ErrorBoundary";

const Albums: React.FC = () => {
  const { data: albums } = useAlbumsQuery();
  return (
    <div style={{ maxHeight: "100vh", overflow: "scroll" }}>
      <List
        header={<Typography.Title>Albums</Typography.Title>}
        bordered
        dataSource={albums}
        renderItem={(item: any) => (
          <List.Item>
            <Typography.Text>{item.title}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

const AlbumsLoader = () => {
  const data = Array.from({ length: 10 }).map((_, index) => index);
  return (
    <List
      header={<Typography.Title>Albums</Typography.Title>}
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

const AlbumsWithSuspense = () => {
  return (
    <ErrorBoundary
      fallback={<Typography.Text>Unable to load Albums</Typography.Text>}
    >
      <Suspense fallback={<AlbumsLoader />}>
        <Albums />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AlbumsWithSuspense;
