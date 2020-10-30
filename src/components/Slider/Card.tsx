import React from "react";
import {
  CardWrapper,
  CardBg,
  CardCategory,
  CardImg,
  CardLink,
  CardCount,
} from "./Atom";

export type CardProps = {
  img: string;
  path: string;
  count: string;
  category: string;
};
const Card: React.FC<CardProps> = ({ img, path, count, category }) => {
  return (
    <CardWrapper>
      <CardBg>
        <CardImg alt="category" src={img} />
      </CardBg>
      <CardLink to={`/${path}`} />
      <CardCount to={`/${path}`}>{count}</CardCount>
      <CardCategory>
        <span>{category}</span>
      </CardCategory>
    </CardWrapper>
  );
};
export default Card;
