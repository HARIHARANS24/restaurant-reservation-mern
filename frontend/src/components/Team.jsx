import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <header className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Meet the passionate culinary experts behind The Fork & Flame. Each
            member brings creativity, dedication, and a love for great food to
            create your unforgettable dining experience.
          </p>
        </header>

        <div className="team_container">
          {data[0].team.map(({ id, image, name, designation }) => (
            <article className="card" key={id}>
              <img src={image} alt={`Photo of ${name}`} />
              <h3>{name}</h3>
              <p className="designation">{designation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
