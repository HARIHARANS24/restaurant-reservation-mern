import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Ignite Your Appetite</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="Signature Dish" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Bold</h1>
                <h1 className="title dishes_title">Flavors</h1>
                <img src="./threelines.svg" alt="Design Accent" />
              </div>
              <img className="logo" src="logo.svg" alt="The Fork & Flame Logo" />
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="Flame-Grilled Dishes" />
          </div>
          <h1 className="title dishes_title">Crafted With Fire</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
