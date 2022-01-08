import {Typography} from "common/Typography";
import React from "react";
import {ITrip} from "../../../../common/types";
import Tags from "./components/Tags";
import {ContentContainer, MainImage, TripContainer} from "./styled";

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
      </ContentContainer>
    </TripContainer>
  );
};

export default Trip;
