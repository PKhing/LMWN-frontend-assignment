import {styled} from "config/stitches.config";

export const Typography = styled("div", {
  fontFamily: "$NotoSans",
  variants: {
    variant: {
      h1: {
        fontWeight: 400,
        fontSize: "4rem",
        "@xs": {
          fontSize: "3rem",
        },
      },
      h3: {
        fontWeight: 800,
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
      },
      body: {
        fontWeight: 400,
        fontSize: "1rem",
      },
      tag: {
        fontWeight: 400,
        fontSize: "0.85rem",
      },
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
