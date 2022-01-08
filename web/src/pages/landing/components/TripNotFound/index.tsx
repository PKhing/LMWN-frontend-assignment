import {Typography} from "common/Typography";
import React from "react";
import {TripNotFountContainer} from "./styled";

const TripNotFound = () => {
  return (
    <TripNotFountContainer>
      <Typography variant="h3">ไม่พบทริปที่คุณกำลังค้นหา</Typography>
      <Typography variant="h3">o(╥﹏╥)o</Typography>
    </TripNotFountContainer>
  );
};

export default TripNotFound;
