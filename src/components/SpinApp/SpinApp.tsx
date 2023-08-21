import React, { FC } from "react";
import { Row, Spin } from "antd";

export const SpinApp: FC = () => {
  return (
    <Row justify="center">
      <Spin size="large" />
    </Row>
  );
};
