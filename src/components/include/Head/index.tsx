import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { HeadWrapper, H2, Description, MyLink } from "./Atom";
export type HeadProps = {
  head: string;
  decription?: string;
  link?: string;
  linkText?: string;
};

export const SectionHead: React.FC<HeadProps> = ({
  head,
  decription,
  link,
  linkText,
}) => (
  <HeadWrapper>
    <Row middle="xs" between="xs">
      <Col xs={9}>
        <H2>{head}</H2>
        {decription && (
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            vitae nulla ad debitis veritatis.
          </Description>
        )}
      </Col>
      <Col style={{ textAlign: "right" }} xs={3}>
        {link && <MyLink to={`/${link}`}>{linkText} → </MyLink>}
      </Col>
    </Row>
  </HeadWrapper>
);
export default SectionHead;
