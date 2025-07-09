import React from "react";
import Navigation from "../../partial/Navigation";
import Hero from "./hero/Hero";
import Footer from "../../partial/Footer";
import Fishing from "./fishing/Fishing";
import Contact from "../../partial/Contact";
import Gear from "./gear/Gear";
import Tips from "./tips/Tips";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Fishing />
      <Gear />
      <Tips />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
