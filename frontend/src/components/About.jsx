import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container flex flex-col md:flex-row items-center gap-10 py-12">
        {/* Text Content */}
        <div className="banner flex-1">
          <div className="top mb-4">
            <h1 className="heading text-4xl font-bold mb-2">About Us</h1>
            <p className="text-lg text-gray-600">
              Passionate about food, committed to quality.
            </p>
          </div>
          <p className="mid text-base text-gray-700 leading-relaxed mb-6">
            At The Fork & Flame, we believe great food brings people together. Located in the heart of Coimbatore, we serve a variety of hand-crafted Indian and fusion dishes, made with the freshest ingredients and traditional techniques.
            <br />
            Whether you're here for a family dinner, a quick bite, or a late-night craving, our goal is to deliver an unforgettable culinary experience every time.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium transition duration-300"
          >
            Explore Menu{" "}
            <span className="ml-2 text-xl">
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>

        {/* Image Section */}
        <div className="banner flex-1">
          <img
            src="about.png"
            alt="Delicious Food at Hari’s"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
