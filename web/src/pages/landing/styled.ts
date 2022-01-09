import {styled} from "config/stitches.config";

export const Container = styled("div", {
  width: "700px",
  maxWidth: "100vw",
  boxSizing: "border-box",
  display: "flex",
  margin: "auto",
  flexDirection: "column",
  gap: "20px",
  padding: "50px 30px",
  textAlign: "center",
  "@sm": {
    padding: "50px 20px",
  },
  "@xs": {
    padding: "50px 10px",
  },
});

export const TripsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  marginTop: "30px",
  "@sm": {
    gap: "35px",
  },
});

export const LineSm = styled("div", {
  "@sm": {
    height: "1px",
    backgroundColor: "$black400",
  },
});
