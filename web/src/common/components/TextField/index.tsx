import React from "react";
import {StyledInput, TextFieldContainer} from "./styled";
import {TextFieldProps} from "./types";

const TextField = ({children, ...props}: TextFieldProps) => {
  return (
    <TextFieldContainer>
      <StyledInput {...props} />
      {children}
    </TextFieldContainer>
  );
};

export default TextField;
