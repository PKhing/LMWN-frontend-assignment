import {Typography} from "common/components/Typography";
import React from "react";
import useTrips from "./hooks/useTrips";
import Trip from "./components/Trip";
import {Container, LineSm, TripsContainer} from "./styled";
import SearchField from "./components/SearchField";
import TripNotFound from "./components/TripNotFound";

const Landing = () => {
  const trips = useTrips();
  return (
    <Container>
      <Typography variant="h1" css={{color: "$primary"}}>
        เที่ยวไหนดี
      </Typography>
      <SearchField />
      <TripsContainer>
        {trips.map((trip, index) => {
          const isLastTrip = index === trips.length - 1;
          return (
            <React.Fragment key={trip.eid}>
              <Trip {...trip} />
              {/* Line for mobile only */}
              {!isLastTrip && <LineSm />}
            </React.Fragment>
          );
        })}
        {!trips.length && <TripNotFound />}
      </TripsContainer>
    </Container>
  );
};

export default Landing;
