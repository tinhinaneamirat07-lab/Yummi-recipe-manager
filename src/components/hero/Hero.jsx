import "./Hero.css";

export default function HeroFeatures() {
  const features = [
    {
      id: "sweet-recipes",
      img: "src/assets/pics/ChocolateChipCookies .jpeg",
      title: "Sweet",
    },
    {
      id: "savory-recipes",
      img: "src/assets/pics/Features2.jpeg",
      title: "Savory",
    },
    {
      id: "baking-recipes",
      img: "src/assets/pics/Features1.jpg",
      title: "Baking",
    },
  ];

  return (
    <section className="hero-features">
      {/* HERO */}
      <div className="hero">
        <h1>Cook Smarter</h1>
        <h1 className="accent">Eat Better</h1>
        <h2>
          Make cooking easier. Save your favorite recipes, plan your meals, and
          organize your shopping.
        </h2>
        <input type="text" placeholder="Search recipes..." />
      </div>

      {/* FEATURES */}
      <div className="features">
        {features.map((f) => (
          <div key={f.id} className="feature">
            <a href={`#${f.id}`} className="img-box">
              <img src={f.img} alt={f.title} />
              <div className="overlay">
                <h3>{f.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
