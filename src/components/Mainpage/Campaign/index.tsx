import React from "react";
import Section from "../../include/Section";
import CampaignCard from "../../CampaignCard";
import { heads } from "./heads";
import img from "./salon.jpg";
export default () => {
  return (
    <Section row heads={heads}>
      <CampaignCard
        endirim={30}
        img={img}
        link="gelinlikler"
        title="Test"
        desc="hello from azeri shadliq sarayi"
      />
    </Section>
  );
};
