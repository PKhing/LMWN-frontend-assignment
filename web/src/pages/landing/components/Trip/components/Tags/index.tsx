import React from "react";
import {Tag, TagsContainer} from "./styled";
import {TagsProps} from "./types";

const Tags = ({tags, css}: TagsProps) => {
  return (
    <TagsContainer variant="tag" css={css}>
      หมวด -
      {tags.map((tag, index) => {
        const shouldDisplayAnd = tags.length > 1 && index === tags.length - 1;
        return (
          <React.Fragment key={tag}>
            {shouldDisplayAnd && <span>และ</span>}
            <Tag href="">{tag}</Tag>
          </React.Fragment>
        );
      })}
    </TagsContainer>
  );
};

export default Tags;
