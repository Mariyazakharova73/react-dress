import React from "react";
import { Layout, Button, Typography, Divider, Row, Col } from "antd";
import s from "./Header.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../images/dress.svg";
import { HOME_PATH, CART_PATH } from "./../../utils/variables";
import { NavLink } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

const HeaderApp: React.FC = () => {
  return (
    <Header className={s.header}>
      <Row>
        <Col span={12} className={s.logo}>
          <NavLink to={HOME_PATH}>
            <Row align="middle" wrap={false}>
              <img width={40} src={logo} alt="Логотип." />
              <Text className={s.logoImage}>React Dress</Text>
            </Row>
          </NavLink>
        </Col>
        <Col span={12}>
          <NavLink to={CART_PATH}>
            <Row justify="end">
              <Button className={s.button} type="primary" size="large">
                <Text className={s.text}>0 ₽</Text>
                <Divider type="vertical" className={s.divider} />
                <ShoppingCartOutlined />
                <Text className={s.text}>0</Text>
              </Button>
            </Row>
          </NavLink>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderApp;
