import {Typography} from "common/Typography";
import React from "react";
import useDescription from "./hooks/useDescription";
import {ReadMore} from "./styled";
import {DescriptionProps} from "./types";

const Description = ({description, url}: DescriptionProps) => {
  const descriptionLines = useDescription(description);
  return (
    <>
      {descriptionLines.map((line, index) => {
        const isLastLine = index === descriptionLines.length - 1;
        return (
          <Typography variant="body" css={{color: "$black600"}} key={index}>
            {line}
            {isLastLine && <ReadMore href={url}>อ่านต่อ</ReadMore>}
          </Typography>
        );
      })}
    </>
  );
};

export default Description;
