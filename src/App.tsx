import React, { FC, Suspense } from "react";
import { Layout, ConfigProvider } from "antd";
import s from "./App.module.css";
import { themeConfig } from "./theme/theme";
import { CART_PATH, NOT_FOUND_PATH, HOME_PATH, DRESS_PATH } from "./utils/variables";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SpinApp, HeaderApp } from "./components";

const CartPage = React.lazy(() => import(/* webpackChunkName: "CartPage" */ "./pages/Cart/Cart"));
const FullDressPage = React.lazy(
  () => import(/* webpackChunkName: "FullDressPage" */ "./pages/FullDress/FullDress")
);
const NotFoundPage = React.lazy(
  () => import(/* webpackChunkName: "NotFoundPage" */ "./pages/NotFound")
);

const { Content, Footer } = Layout;

const App: FC = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className={s.layout}>
        <HeaderApp />
        <Content className={s.content}>
          <Suspense fallback={<SpinApp />}>
            <Routes>
              <Route path={HOME_PATH} element={<Home />} />
              <Route path={CART_PATH} element={<CartPage />} />
              <Route path={DRESS_PATH} element={<FullDressPage />} />
              <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Content>
        <Footer>React Dress ©2023 Created by Maryia Zakharova</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
