import {styled} from "config/stitches.config";

export const TripContainer = styled("div", {
  display: "flex",
  gap: "30px",
});

export const MainImage = styled("img", {
  width: "200px",
  height: "280px",
  borderRadius: "15px",
  objectFit: "cover",
});

export const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  gap: "15px",
});
