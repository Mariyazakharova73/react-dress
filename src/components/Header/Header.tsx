import React, { FC, useEffect, useRef } from "react";
import { Layout, Button, Typography, Row, Col } from "antd";
import s from "./Header.module.css";
import Icon, { ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../images/dress.svg";
import logoDark from "../../images/dressDark.svg";
import { HOME_PATH, CART_PATH } from "./../../utils/variables";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalDressCount } from "../../utils/helpers";
import { selectCart } from "../../redux/slices/cartSlice";
import { ThemeTypes } from "../../types/types";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import useWindowDimensions from "../../HOC/useWindowDimensions ";

const { Header } = Layout;
const { Text } = Typography;

interface IHeaderAppProps {
  themeApp: ThemeTypes;
  changeTheme: () => void;
}

export const HeaderApp: FC<IHeaderAppProps> = ({ themeApp, changeTheme }) => {
  const { cartItems, totalPrice } = useSelector(selectCart);
  const { width } = useWindowDimensions();
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
      <Row align="middle" className={s.logoWrapper}>
        <Col className={s.logo} span={12}>
          <Row>
            <NavLink to={HOME_PATH} className={s.link}>
              <img
                className={s.logoImage}
                src={themeApp === "light" ? logo : logoDark}
                alt="Логотип."
              />
              {width > 500 && <Text className={s.logoText}>Dress</Text>}
            </NavLink>
          </Row>
        </Col>
        <Col span={12}>
          <Row align="middle" justify="end" className={s.buttonWrapper}>
            <Button
              type="primary"
              shape="circle"
              onClick={changeTheme}
              icon={
                themeApp !== "light" ? (
                  <Icon component={() => <img src={sun} className={s.icon} />} />
                ) : (
                  <Icon component={() => <img className={s.icon} src={moon} />} />
                )
              }
            />
            <NavLink to={CART_PATH}>
              <Button className={s.button} type="primary" size={width > 500 ? "large" : "middle"}>
                {totalPrice} ₽ &#124;
                <ShoppingCartOutlined />
                {getTotalDressCount(cartItems)}
              </Button>
            </NavLink>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
