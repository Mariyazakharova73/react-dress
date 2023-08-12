import React from "react";
import { ConfigProvider } from "antd";
import { Layout } from "antd";
import HeaderApp from "./components/Header/Header";
import s from "./App.module.css";
import { themeConfig } from "./theme/theme";
import { CART_PATH, NOT_FOUND_PATH, HOME_PATH } from "./utils/variables";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound";

const { Content, Footer } = Layout;

const App = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className={s.layout}>
        <HeaderApp />
        <Content className={s.content}>
          <Routes>
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={CART_PATH} element={<Cart />} />
            <Route path={NOT_FOUND_PATH} element={<NotFound />} />
          </Routes>
        </Content>
        <Footer>React Dress ©2023 Created by Maryia Zakharova</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
