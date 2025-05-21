import React from "react";
import { data } from "../restApi.json";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section text-center mb-10">
          <h1 className="heading text-4xl font-bold mb-4 text-[#e25822]">
            Popular Dishes
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto">
            Experience the signature flavors of The Fork & Flame — from fiery grills to aromatic spices, each dish is crafted to ignite your senses.
          </p>
        </div>
        <div className="dishes_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data[0].dishes.map((element) => (
            <div
              className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              key={element.id}
            >
              <img
                src={element.image}
                alt={element.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{element.title}</h3>
                <button className="bg-[#e25822] text-white px-4 py-1 rounded-full text-sm cursor-default">
                  {element.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
