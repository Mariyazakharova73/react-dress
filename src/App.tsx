import React, { useState, useEffect } from "react";
import { ConfigProvider, Row, theme } from "antd";
import { Layout } from "antd";
import HeaderApp from "./components/Header/Header";
import s from "./App.module.css";
import { themeConfig } from "./theme/theme";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Dresses from "./components/Dresses/Dresses";
import { BASE_URL } from "./utils/variables";

const { Content, Footer } = Layout;

const App = () => {
  const [dresses, setDresses] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setDresses(res);
        setIsLoading(false);
      });
  }, []);

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className={s.layout}>
        <HeaderApp />
        <Content className={s.content}>
          <Row className={s.wrapper} wrap>
            <Categories />
            <Sort />
          </Row>
          <Row>
            <Dresses dresses={dresses} isLoading={isLoading}/>
          </Row>
        </Content>
        <Footer>React Dress ©2023 Created by Maryia Zakharova</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
