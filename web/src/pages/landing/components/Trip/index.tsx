import {Typography} from "common/Typography";
import React from "react";
import {ITrip} from "../../../../common/types";
import {ContentContainer, MainImage, TripContainer} from "./styled";

const Trip = (props: ITrip) => {
  const {title, photos, description} = props;
  return (
    <TripContainer>
      <MainImage src={photos[0]} />
      <ContentContainer>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body" css={{color: "$black600"}}>
          {description}
        </Typography>
      </ContentContainer>
    </TripContainer>
  );
};

export default Trip;
