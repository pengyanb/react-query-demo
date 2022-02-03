import React from "react";
import { Col, Row } from "antd";
import { Albums, Comments, Users } from "../../components";

const Page1: React.FC = () => {
  return (
    <Row>
      <Col span={8}>
        <Albums />
      </Col>
      <Col span={8}>
        <Comments />
      </Col>
      <Col span={8}>
        <Users />
      </Col>
    </Row>
  );
};

export default Page1;
