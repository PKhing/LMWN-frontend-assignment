import {TextField} from "common/TextField";
import {Typography} from "common/Typography";
import React from "react";
import useTrips from "./components/hooks/useTrips";
import Trip from "./components/Trip";
import {Container, TripsContainer} from "./styled";

const Landing = () => {
  const trips = useTrips();
  return (
    <Container>
      <Typography variant="h1" css={{color: "$primary"}}>
        เที่ยวไหนดี
      </Typography>
      <TextField placeholder="หาที่เที่ยวแล้วไปกัน..." />
      <TripsContainer>
        {trips.map((trip) => (
          <Trip {...trip} key={trip.eid} />
        ))}
      </TripsContainer>
    </Container>
  );
};

export default Landing;
