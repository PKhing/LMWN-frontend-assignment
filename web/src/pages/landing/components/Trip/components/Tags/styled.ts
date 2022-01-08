import {Typography} from "common/Typography";
import {styled} from "config/stitches.config";

export const Tag = styled("span", {
  color: "$black500",
  textDecoration: "underline",
  cursor: "pointer",
});

export const TagsContainer = styled(Typography, {
  color: "$black500",
  "& *": {
    marginLeft: "5px",
  },
});
