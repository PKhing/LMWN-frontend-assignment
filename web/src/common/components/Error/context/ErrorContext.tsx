import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Error from "..";
import {IErrorContext} from "../types";

const ErrorContext = createContext({} as IErrorContext);

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setOpen] = useState(false);

  const timeoutRef = useRef(0);
  const openError = useCallback((message: string) => {
    setErrorMessage(message);
    if (message !== "") {
      clearTimeout(timeoutRef.current);
      setOpen(true);
      timeoutRef.current = window.setTimeout(() => {
        setOpen(false);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [errorMessage]);

  return (
    <ErrorContext.Provider value={{errorMessage, openError, isOpen, setOpen}}>
      <Error />
      {children}
    </ErrorContext.Provider>
  );
};
