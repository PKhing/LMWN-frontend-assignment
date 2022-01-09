import {styled} from "config/stitches.config";

export const ErrorContainer = styled("div", {
  boxSizing: "border-box",
  backgroundColor: "$error",
  position: "fixed",
  color: "white",
  padding: "5px 20px",
  borderRadius: "5px",
  margin: "10px",
  boxShadow: "0px 2px 5px grey",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  maxWidth: "calc(100% - 20px)",
  width: "max-content",
  left: "calc(50% - 10px)",
  transform: "translate(-50%, 0)",
  "@sm": {gap: "5px", padding: "5px 10px"},
});
