import {Typography} from "common/Typography";
import React from "react";
import useTrips from "./hooks/useTrips";
import Trip from "./components/Trip";
import {Container, Layout, TripsContainer} from "./styled";
import SearchField from "./components/SearchField";

const Landing = () => {
  const trips = useTrips();
  return (
    <Layout>
      <Container>
        <Typography variant="h1" css={{color: "$primary"}}>
          เที่ยวไหนดี
        </Typography>
        <SearchField />
        <TripsContainer>
          {trips.map((trip) => (
            <Trip {...trip} key={trip.eid} />
          ))}
        </TripsContainer>
      </Container>
    </Layout>
  );
};

export default Landing;
