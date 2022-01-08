import {TextField} from "common/TextField";
import React from "react";
import useSearchField from "./hooks/useSearchField";

const SearchField = () => {
  const {keyword, handleChange} = useSearchField();
  return (
    <TextField
      placeholder="หาที่เที่ยวแล้วไปกัน..."
      value={keyword}
      onChange={handleChange}
    />
  );
};

export default SearchField;
