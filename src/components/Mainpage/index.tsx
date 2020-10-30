import React from "react";
import Hero from "../Hero";
import Category from "./Category";
import Campaign from "./Campaign";
import WeddingDresses from "./WeddingDress";
import Restorans from "./Restorans";

const MainPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Category />
      <Campaign />
      <WeddingDresses />
      <Restorans />
    </>
  );
};

export default MainPage;
