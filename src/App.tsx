import React, { FC, Suspense, useEffect, useState } from "react";
import { Layout, ConfigProvider, theme } from "antd";
import s from "./App.module.css";
import { createThemeConfig } from "./theme/theme";
import {
  CART_PATH,
  NOT_FOUND_PATH,
  HOME_PATH,
  DRESS_PATH,
  WHITE_COLOR,
  DARK_BG,
} from "./utils/variables";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SpinApp, HeaderApp } from "./components";
import { ThemeTypes } from "./types/types";

const CartPage = React.lazy(() => import(/* webpackChunkName: "CartPage" */ "./pages/Cart/Cart"));
const FullDressPage = React.lazy(
  () => import(/* webpackChunkName: "FullDressPage" */ "./pages/FullDress/FullDress")
);
const NotFoundPage = React.lazy(
  () => import(/* webpackChunkName: "NotFoundPage" */ "./pages/NotFound")
);

const { Content, Footer } = Layout;

const App: FC = () => {
  const [themeApp, setThemeApp] = useState<ThemeTypes>("dark");

  const changeTheme = () => {
    setThemeApp((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("theme", themeApp === "light" ? "dark" : "light");
  };

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme) {
      setThemeApp(theme as ThemeTypes);
    }
  }, [themeApp]);

  return (
    <ConfigProvider theme={createThemeConfig(themeApp)}>
      <Layout className={s.layout}>
        <HeaderApp themeApp={themeApp} changeTheme={changeTheme} />
        <Content
          className={s.content}
          style={{ backgroundColor: themeApp === "light" ? WHITE_COLOR : DARK_BG }}
        >
          <Suspense fallback={<SpinApp />}>
            <Routes>
              <Route path={HOME_PATH} element={<Home />} />
              <Route path={CART_PATH} element={<CartPage />} />
              <Route path={DRESS_PATH} element={<FullDressPage />} />
              <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Content>
        <Footer className={s.footer}>React Dress ©2023 Created by Maryia Zakharova</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
