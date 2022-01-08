import {createStitches} from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#2C9BDB",
      black400: "#BDBDBD",
      black500: "#929292",
      black600: "#828282",
    },
    fonts: {
      NotoSans: "'Noto Sans Thai', sans-serif",
    },
  },
  media: {
    xs: "(max-width: 320px)",
    sm: "(max-width: 496px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 960px)",
    xl: "(max-width: 1280px)",
  },
});

globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700;800&display=swap')",
  ],
})();
