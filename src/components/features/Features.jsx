import React from "react";
import "./Features.css";

export default function Features() {
  const features = [
    {
      id: "sweet-recipes",
      img: "src/assets/pics/ChocolateChipCookies .jpeg",
      alt: "Sweet",
      title: "Sweet",
    },
    {
      id: "savory-recipes",
      img: "src/assets/pics/Features2.jpeg",
      alt: "Savory",
      title: "Savory",
    },
    {
      id: "baking-recipes",
      img: "src/assets/pics/Features1.jpg",
      alt: "Baking",
      title: "Baking",
    },
  ];

  return (
    <section className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature">
          <div className="img-box">
            <a href={`#${feature.id}`}>
              <img src={feature.img} alt={feature.alt} />
              <div className="overlay-text">
                <h1>{feature.title}</h1>
              </div>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
