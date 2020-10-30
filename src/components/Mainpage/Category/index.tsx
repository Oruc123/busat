import React from "react";
import { Grid } from "react-flexbox-grid";
import Slider from "../../Slider/";
import Section from "../../include/Section";
import { heads } from "./heads";
const MainPage: React.FC = () => {
  return (
    <>
      <Section bg="#fff" heads={heads}>
        <Grid>
          <Slider />
        </Grid>
      </Section>
    </>
  );
};

export default MainPage;
