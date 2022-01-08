import {styled} from "config/stitches.config";

export const Layout = styled("div", {
  display: "flex",
  justifyContent: "center",
  margin: "50px 0",
  width: "100vw",
  maxWidth: "100%",
  overflowX: "hidden",
});

export const Container = styled("div", {
  width: "700px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const TripsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  marginTop: "30px",
});
