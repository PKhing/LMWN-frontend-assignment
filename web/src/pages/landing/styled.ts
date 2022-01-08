import {styled} from "config/stitches.config";

export const Layout = styled("div", {
  display: "flex",
  justifyContent: "center",
  width: "100vw",
});

export const Container = styled("div", {
  marginTop: "50px",
  width: "700px",

  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const TripsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});
