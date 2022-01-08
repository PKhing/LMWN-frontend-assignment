import React from "react";
import {Tag, TagsContainer} from "./styled";
import {TagsProps} from "./types";

const Tags = ({tags}: TagsProps) => {
  return (
    <TagsContainer variant="tag">
      หมวด -
      {tags.map((tag, index) => (
        <React.Fragment key={tag}>
          {tags.length > 1 && index === tags.length - 1 && <span>และ</span>}
          <Tag href="">{tag}</Tag>
        </React.Fragment>
      ))}
    </TagsContainer>
  );
};

export default Tags;
