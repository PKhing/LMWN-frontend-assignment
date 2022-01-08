import {Typography} from "common/Typography";
import React from "react";
import {ITrip} from "../../../../common/types";
import Tags from "./components/Tags";
import {
  ContentContainer,
  Image,
  ImageContainer,
  MainImage,
  TripContainer,
} from "./styled";

const Trip = (props: ITrip) => {
  const {title, photos, description, tags} = props;
  return (
    <TripContainer>
      <MainImage src={photos[0]} />
      <ContentContainer>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body" css={{color: "$black600"}}>
          {description}
        </Typography>
        <Tags tags={tags} />
        <ImageContainer>
          {photos.slice(1).map((src, index) => (
            <Image src={src} key={index} />
          ))}
        </ImageContainer>
      </ContentContainer>
    </TripContainer>
  );
};

export default Trip;
