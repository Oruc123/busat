import React from "react";
import { BackgroundDiv, Filter, Body, Title, ShortDesc } from "./Atom";
import BgImage from "../../assets/img/wedding.jpg";
import Seacrh from "../Search";
const Prolog: React.FC = () => (
  <BackgroundDiv bg={BgImage}>
    <Filter />
    <Body>
      <Title>Toylarınızı bizimlə planlayın</Title>
      <ShortDesc>
        Her üç çiftten ikisi Düğün.com aracılığı ile hayalindeki düğünü
        gerçekleştiriyor.
      </ShortDesc>
      <Seacrh />
    </Body>
  </BackgroundDiv>
);

export default Prolog;
