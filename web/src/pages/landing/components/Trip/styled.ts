import {styled} from "config/stitches.config";

export const TripContainer = styled("div", {
  display: "flex",
  gap: "30px",
  "@sm": {
    flexDirection: "column",
  },
});

export const MainImage = styled("img", {
  width: "200px",
  borderRadius: "15px",
  objectFit: "cover",
  "@sm": {
    width: "100%",
    maxHeight: "200px",
  },
});

export const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  gap: "15px",
});

export const Link = styled("a", {
  textDecoration: "none",
  color: "$black",
  "&:visited": {
    color: "$black",
  },
  "&:focus": {
    color: "$black",
  },
  "&:active": {
    color: "$black",
  },
});

export const ImageContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  "@sm": {
    gap: "5px",
    justifyContent: "space-evenly",
  },
});

export const Image = styled("img", {
  width: "100px",
  height: "100px",
  borderRadius: "15px",
  objectFit: "cover",

  "@md": {
    width: "95px",
    height: "95px",
    borderRadius: "10px",
  },
  "@xs": {
    width: "85px",
    height: "85px",
  },
  "@fold": {
    width: "80px",
    height: "80px",
  },
});
