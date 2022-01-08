import React from "react";
import {StyledInput} from "./styled";

export interface TextFieldProps
  extends React.ComponentProps<typeof StyledInput> {
  children?: React.ReactChild;
}
