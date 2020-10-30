import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { FormContainer } from "./Atom";
import Form from "../Form";
export default () => {
  return (
    <Grid>
      <Row>
        <Col md={9}>
          <FormContainer>
            <Form />
          </FormContainer>
        </Col>
      </Row>
    </Grid>
  );
};
