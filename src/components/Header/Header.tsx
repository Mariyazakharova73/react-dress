import React from "react";
import { Layout, Button, Typography, Divider, Row, Col } from "antd";
import s from "./Header.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../images/dress.svg";
import SearchApp from "./../SearchApp/SearchApp";

const { Header } = Layout;
const { Text } = Typography;

const HeaderApp: React.FC = () => {
  return (
    <Header className={s.header}>
      <Row>
        <Col span={12} className={s.logo}>
          <Row align="middle" wrap={false}>
            <img width={40} src={logo} alt="Логотип." />
            <Text className={s.logoImage}>React Dress</Text>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="end">
            <Button className={s.button} type="primary" size="large">
              <Text className={s.text}>0 ₽</Text>
              <Divider type="vertical" className={s.divider} />
              <ShoppingCartOutlined />
              <Text className={s.text}>0</Text>
            </Button>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <SearchApp />
      </Row>
    </Header>
  );
};

export default HeaderApp;
