import React from "react";
import {useSearchParams} from "react-router-dom";
import {Tag, TagsContainer} from "./styled";
import {TagsProps} from "./types";

const Tags = ({tags, css}: TagsProps) => {
  const [, setSearchParams] = useSearchParams();
  return (
    <TagsContainer variant="tag" css={css}>
      หมวด -
      {tags.map((tag, index) => {
        const shouldDisplayAnd = tags.length > 1 && index === tags.length - 1;
        return (
          <React.Fragment key={tag}>
            {shouldDisplayAnd && <span>และ</span>}
            <Tag
              onClick={() => {
                setSearchParams({keyword: tag});
              }}
            >
              {tag}
            </Tag>
          </React.Fragment>
        );
      })}
    </TagsContainer>
  );
};

export default Tags;
