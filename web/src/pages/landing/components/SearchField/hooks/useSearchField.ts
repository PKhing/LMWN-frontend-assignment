import React, {useCallback, useEffect, useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";

const useSearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  // Set Keyword
  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
  }, [searchParams]);

  // Change keyword
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    },
    []
  );

  // Clear keyword
  const handleClear = useCallback(() => {
    setKeyword("");
  }, []);

  // Change query params (Make new request to API)
  const handleSubmit = useCallback(
    (keyword: string) => {
      if (keyword) setSearchParams({keyword});
      else setSearchParams({});
    },
    [setSearchParams]
  );

  // Submit after no input change for 500ms
  const timeoutRef = useRef(0);
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      handleSubmit(keyword);
    }, 500);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [handleSubmit, keyword]);

  return {keyword, handleChange, handleClear};
};

export default useSearchField;
