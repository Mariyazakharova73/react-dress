import React from "react";
import { ConfigProvider, Row, theme } from "antd";
import { Layout } from "antd";
import HeaderApp from "./components/Header/Header";
import s from "./App.module.css";
import { themeConfig } from "./theme/theme";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Dresses from './components/Dresses/Dresses';

const { Content, Footer } = Layout;

const App = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout>
        <HeaderApp />
        <Content className={s.content}>
          <Row className={s.wrapper} wrap>
            <Categories />
            <Sort />
          </Row>
          <Row>
            <Dresses/>
          </Row>
        </Content>
        <Footer>React Dress ©2023 Created by Maryia Zakharova</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
