import React from "react";
import Carousel from "../components/carousel/Carousel";
import { Content } from "../components/content/Content";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

// Hero Feature Content Carousel

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};

export default Home;
