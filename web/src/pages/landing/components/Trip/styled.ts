import {styled} from "config/stitches.config";

export const TripContainer = styled("div", {
  display: "flex",
  gap: "30px",
});

export const MainImage = styled("img", {
  width: "200px",
  borderRadius: "15px",
  objectFit: "cover",
});

export const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  gap: "15px",
});

export const ImageContainer = styled("div", {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
});

export const Image = styled("img", {
  width: "100px",
  height: "100px",
  borderRadius: "15px",
  objectFit: "cover",
});
