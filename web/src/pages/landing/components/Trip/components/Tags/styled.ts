import {Typography} from "common/Typography";
import {styled} from "config/stitches.config";

export const Tag = styled("a", {
  color: "$black500",
  "&:visited": {
    color: "$black500",
  },
  "&:focus": {
    color: "$black500",
  },
  "&:active": {
    color: "$black500",
  },
});

export const TagsContainer = styled(Typography, {
  color: "$black500",
  "& *": {
    marginLeft: "5px",
  },
});
