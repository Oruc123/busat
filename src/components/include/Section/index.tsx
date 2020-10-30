import React, { ReactNode } from "react";
import { SectionWrapper } from "./Atom";
import SectionHead, { HeadProps } from "../Head";
import { Grid, Row } from "react-flexbox-grid";

interface Props {
  children: ReactNode;
  bg?: string;
  heads?: HeadProps;
  row?: boolean;
}

const Section: React.FC<Props> = (props) => (
  <SectionWrapper bgColor={props.bg}>
    {props.heads && <SectionHead {...props.heads} />}
    {props.row ? (
      <Grid>
        <Row>{props.children}</Row>
      </Grid>
    ) : (
      props.children
    )}
  </SectionWrapper>
);

export default Section;
