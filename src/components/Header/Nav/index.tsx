import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "./Atom";
export default () => {
  return (
    <nav>
      <Grid>
        <Row around="xs">
          <Col xs>
            <Link to="/restoranlar">Restoranlar</Link>
          </Col>
          <Col xs>
            <Link to="/gelinlikler">Gəlinliklər</Link>
          </Col>
          <Col xs>
            <Link to="/salonlar">Gözəllik salonları</Link>
          </Col>
          <Col xs>
            <Link to="/endirimler">Kampaniyalar</Link>
          </Col>
          <Col xs>
            <Link to="/avtomobiller">Avtomobillər</Link>
          </Col>
        </Row>
      </Grid>
    </nav>
  );
};
