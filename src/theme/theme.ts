import { MAIN_COLOR, WHITE_COLOR, GREY_COLOR, BLACK_COLOR, LIGHT_GREY_COLOR } from "../utils/variables";

export const themeConfig  = {
  components: {
    // Button: {
    //   colorPrimary: '#00b96b',
    //   algorithm: true, // Enable algorithm
    // },
    // Input: {
    //   colorPrimary: '#eb2f96',
    //   algorithm: true, // Enable algorithm
    // }
    Segmented: {
      itemSelectedBg: BLACK_COLOR,
      itemColor: BLACK_COLOR,
      colorText: WHITE_COLOR,
      colorBgLayout: LIGHT_GREY_COLOR,
      borderRadius: 10,
    }
  },
  //algorithm: theme.darkAlgorithm,
  token: {
    colorBgLayout: GREY_COLOR,
    colorPrimary: MAIN_COLOR,
    borderRadius: 15,
    colorBgContainer: WHITE_COLOR,
    fontFamily: "Nunito",
    fontSize: 16,
  },
}