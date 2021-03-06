import {Typography} from "common/components/Typography";
import React from "react";
import {ITrip} from "common/types";
import Tags from "./components/Tags";
import {
  ContentContainer,
  Image,
  ImageContainer,
  Link,
  MainImage,
  TripContainer,
} from "./styled";
import Description from "./components/Description";

const Trip = (props: ITrip) => {
  const {title, photos, description, tags, url} = props;
  return (
    <TripContainer>
      <MainImage src={photos[0]} />
      <ContentContainer>
        <Link href={url}>
          <Typography variant="h3">{title}</Typography>
        </Link>
        <Description description={description} url={url} />
        <Tags tags={tags} css={{margin: "-10px 0 10px 0"}} />

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
