import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-flexbox-grid";
import AddWishButton from "../AddWishButton";
import {
  CardWrapper,
  CardImg,
  CardContent,
  CardDesc,
  CardTitle,
  CampaignTop,
} from "./Atom";

type CardType = {
  endirim: number;
  img: string;
  link: string;
  title: string;
  desc: string;
};

const CampaignCard: React.FC<CardType> = ({
  endirim,
  img,
  link,
  title,
  desc,
}) => {
  return (
    <Col xs={3}>
      <CardWrapper>
        <CampaignTop top="1rem" left="1rem">
          {endirim}% endirim
        </CampaignTop>
        <AddWishButton id="10" />
        <Link to="/gelin">
          <CardImg src={img} />
        </Link>
        <CardContent>
          <CardTitle to={`/${link}`}>{title}</CardTitle>
          <CardDesc>{desc}</CardDesc>
        </CardContent>
      </CardWrapper>
    </Col>
  );
};

export default CampaignCard;
