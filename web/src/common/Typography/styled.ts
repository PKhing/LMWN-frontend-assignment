import {styled} from "config/stitches.config";

export const Typography = styled("div", {
  fontFamily: "$NotoSans",
  variants: {
    variant: {
      h1: {
        fontWeight: 400,
        fontSize: "4rem",
      },
      h3: {},
      body: {},
      tag: {},
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
