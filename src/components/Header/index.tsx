import React from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import { Logo, Header, Delimetr, Link } from "./Atom";
import AuthLink from "./AuthLink";
import Search from "./Search";
import Nav from "./Nav";
export default () => (
  <Header>
    <Grid>
      <Row between="xs" middle="xs">
        <Col xs={3}>
          <Logo>
            <Link to="/">Büsat.az</Link>
          </Logo>
        </Col>
        <Col xs={5}>
          <Search />
        </Col>

        <Col xs={3} style={{ textAlign: "right" }}>
          <AuthLink />
        </Col>
      </Row>
    </Grid>
    <Delimetr />
    <Nav />
  </Header>
);
