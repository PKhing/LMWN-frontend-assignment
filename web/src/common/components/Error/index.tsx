import React from "react";
import {IoCloseSharp} from "react-icons/io5";
import {Typography} from "../Typography";
import {useError} from "./context/ErrorContext";
import {ErrorContainer} from "./styled";

const Error = () => {
  const {errorMessage, isOpen, setOpen} = useError();
  if (isOpen)
    return (
      <ErrorContainer>
        <Typography variant="h4">{errorMessage}</Typography>
        <IoCloseSharp
          style={{cursor: "pointer", fontSize: "1.5rem", flexShrink: 0}}
          onClick={() => setOpen(false)}
        />
      </ErrorContainer>
    );
  return <></>;
};

export default Error;
