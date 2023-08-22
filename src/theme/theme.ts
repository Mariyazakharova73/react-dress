import { theme } from "antd";
import { ThemeTypes } from "../types/types";
import {
  MAIN_COLOR,
  WHITE_COLOR,
  GREY_COLOR,
  BLACK_COLOR,
  LIGHT_GREY_COLOR,
  DARK_BG,
  DARK_MAIN_COLOR,
} from "../utils/variables";

export const createThemeConfig = (themeStr: ThemeTypes) => {
  const isLight = themeStr === "light";
  return {
    token: {
      colorPrimary: isLight ? MAIN_COLOR : DARK_MAIN_COLOR,
      borderRadius: 15,
      fontFamily: "Nunito",
      fontSize: 16,
      ...(isLight && { colorBgLayout: GREY_COLOR }),
      ...(isLight && { colorBgContainer: WHITE_COLOR }),
      ...(isLight && { colorText: BLACK_COLOR }),
    },
    components: {
      Layout: {
        colorBgHeader: isLight ? WHITE_COLOR : DARK_BG,
        colorBgContent: WHITE_COLOR,
      },
      Main: {
        colorBgLayout: WHITE_COLOR,
      },
      Segmented: {
        borderRadius: 10,
        ...(isLight && { itemSelectedBg: BLACK_COLOR }),
        ...(isLight && { itemColor: BLACK_COLOR }),
        ...(isLight && { colorText: WHITE_COLOR }),
        ...(isLight && { colorBgLayout: LIGHT_GREY_COLOR }),
      },
      Radio: {
        borderRadius: 6,
      },
      Badge: {
        colorBgContainer: isLight ? MAIN_COLOR : DARK_MAIN_COLOR,
        colorBorderBg: WHITE_COLOR,
      },
      Carousel: {
        colorBgContainer: BLACK_COLOR,
        dotHeight: 5,
        dotWidth: 20,
      },
      Icon: {
        twoToneColor: MAIN_COLOR,
      },
    },
    algorithm: isLight ? theme.defaultAlgorithm : theme.darkAlgorithm,
  };
};
