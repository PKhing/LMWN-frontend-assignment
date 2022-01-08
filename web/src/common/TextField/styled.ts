import {styled} from "config/stitches.config";

export const TextField = styled("input", {
  fontFamily: "$NotoSans",
  fontSize: "1.4rem",
  border: "none",
  borderBottom: "1px solid $black400",
  textAlign: "center",

  "&::placeholder": {
    color: "$black400",
  },

  "&:focus": {
    outline: "transparent",
    borderColor: "$primary",
  },
});
