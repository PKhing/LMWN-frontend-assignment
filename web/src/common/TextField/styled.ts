import {styled} from "config/stitches.config";

export const TextFieldContainer = styled("div", {
  borderBottom: "1px solid $black400",
  display: "flex",
  alignItems: "center",

  "&:focus-within": {
    borderColor: "$primary",
  },
});

export const StyledInput = styled("input", {
  fontFamily: "$NotoSans",
  fontSize: "1.4rem",
  border: "none",
  textAlign: "center",
  flexGrow: 1,
  "@xs": {
    fontSize: "1rem",
  },

  "&::placeholder": {
    color: "$black400",
  },

  "&:focus": {
    outline: "transparent",
  },
});
