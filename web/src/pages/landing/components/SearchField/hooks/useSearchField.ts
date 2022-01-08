import React, {useCallback, useEffect, useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";

const useSearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    },
    []
  );
  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
  }, [searchParams]);

  const handleSubmit = useCallback(
    (keyword: string) => {
      if (keyword) setSearchParams({keyword});
      else setSearchParams({});
    },
    [setSearchParams]
  );

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

  return {keyword, handleChange};
};

export default useSearchField;
