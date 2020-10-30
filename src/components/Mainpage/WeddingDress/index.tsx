import React from "react";
import { useQuery, gql } from "@apollo/client";
import Section from "../../include/Section";
import WeddingDressCard from "../../WeddingDressCard";
import head from "./head";
import img from "./gelin.jpg";
import { Col } from "react-flexbox-grid";

const DRESSES = gql`
  {
    weddingDresses {
      name
      size
    }
  }
`;

const WeddingDresses: React.FC = () => {
  const { loading, error, data } = useQuery(DRESSES);
  console.log("data");
  return (
    <Section row bg="#fff" heads={head}>
      <Col md={3}>
        <WeddingDressCard
          img={img}
          link="gelinlik"
          title="Test"
          size="md vdd 110"
          price={300}
        />
      </Col>
    </Section>
  );
};

export default WeddingDresses;
