import React from "react";
import { Card, Col, Row, Typography } from "antd";
const { Title } = Typography;

const Dresses = () => {
  return (
    <div>
      <Title level={1}>Все платья</Title>
      <Row >
        <Col span={8}>
          <Card title="Card title" bordered={false} hoverable style={{ width: 260 }}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false} hoverable style={{ width: 260 }}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false} hoverable style={{ width: 260 }}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dresses;
