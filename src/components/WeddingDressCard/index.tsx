import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import {
  CardWrapper,
  CardImg,
  CardContent,
  CardTitle,
  Size,
  Price,
  MoreInfo,
  MoreButton,
} from "./Atom";

type CardType = {
  img: string;
  title: string;
  link: string;
  size?: string;
  price: number;
};

const WeddingDressCard: React.FC<CardType> = ({
  img,
  title,
  link,
  size,
  price,
}) => {
  return (
    <CardWrapper>
      <CardImg src={img} />
      <CardContent>
        <Link to={link}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <Size>{size}</Size>
        <Price>{price} AZN</Price>
        <Row>
          <Col xs={6}>
            <MoreInfo to={link}>Ətraflı</MoreInfo>
          </Col>

          <Col xs={6}>
            <MoreButton>İncələ</MoreButton>
          </Col>
        </Row>
      </CardContent>
    </CardWrapper>
  );
};

export default WeddingDressCard;
