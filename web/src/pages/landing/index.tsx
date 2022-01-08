import {TextField} from "common/TextField";
import {Typography} from "common/Typography";
import React from "react";
import {Container} from "./styled";

const Landing = () => {
  return (
    <Container>
      <Typography variant="h1" css={{color: "$primary"}}>
        เที่ยวไหนดี
      </Typography>
      <TextField placeholder="หาที่เที่ยวแล้วไปกัน..." />
    </Container>
  );
};

export default Landing;
