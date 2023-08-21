import React, { FC, useEffect, useRef } from "react";
import { Layout, Button, Typography, Divider, Row, Col } from "antd";
import s from "./Header.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../images/dress.svg";
import { HOME_PATH, CART_PATH } from "./../../utils/variables";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalDressCount } from "../../utils/helpers";
import { selectCart } from "../../redux/slices/cartSlice";

const { Header } = Layout;
const { Text } = Typography;

const HeaderApp: FC = () => {
  const { cartItems, totalPrice } = useSelector(selectCart);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [cartItems]);

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
                <Text className={s.text}>{totalPrice} ₽</Text>
                <Divider type="vertical" className={s.divider} />
                <ShoppingCartOutlined />
                <Text className={s.text}>{getTotalDressCount(cartItems)}</Text>
              </Button>
            </Row>
          </NavLink>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderApp;
