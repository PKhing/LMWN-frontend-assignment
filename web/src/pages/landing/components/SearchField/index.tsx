import TextField from "common/components/TextField";
import React from "react";
import useSearchField from "./hooks/useSearchField";
import {IoSearch, IoCloseSharp} from "react-icons/io5";
import {IconContainer} from "./styled";

const SearchField = () => {
  const {keyword, handleChange, handleClear} = useSearchField();
  return (
    <TextField
      placeholder="หาที่เที่ยวแล้วไปกัน..."
      value={keyword}
      onChange={handleChange}
    >
      <IconContainer>
        {keyword ? (
          <IoCloseSharp style={{cursor: "pointer"}} onClick={handleClear} />
        ) : (
          <IoSearch />
        )}
      </IconContainer>
    </TextField>
  );
};

export default SearchField;
