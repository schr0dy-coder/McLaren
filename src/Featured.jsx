import React from 'react';
import FeaturedModelCard from './FeaturedModelCard';
import img720s from './assets/720s.jpg';
import imgp1 from './assets/imgp1.webp';
import imgspider from './assets/imgspider.jpeg'

const Featured = () => {
  const featuredModels = [
    {
      id: 1,
      image: imgp1,
      modelName: "McLaren P1",
      horsepower: "903",
      description: "The pinnacle of automotive engineering. Where Formula 1 technology meets uncompromising performance.",
      acceleration: "2.8s",
      link: 'https://cars.mclaren.com/en/legacy/mclaren-p1'
    },
    {
      id: 2,
      image: img720s,
      modelName: "McLaren 720S",
      horsepower: "710",
      description: "Revolutionary aerodynamics and hybrid technology. The future of McLaren's Ultimate Series.",
      acceleration: "2.9s",
      link: 'https://cars.mclaren.com/en/super-series/720s'
    },
    {
      id: 3,
      image: imgspider,
      modelName: "McLaren 750S Spider",
      horsepower: "740",
      description: "Open-top exhilaration meets track-focused performance. The 750S Spider delivers pure driving pleasure.",
      acceleration: "2.8s",
      link: 'https://cars.mclaren.com/en/super-series/720s-spider'
    }
  ];

  return (
    <section className="featured-models">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Models</h2>
          <p className="section-subtitle">
            Discover the pinnacle of automotive engineering with our most iconic supercars
          </p>
        </div>
        <div className="featured-grid">
          {featuredModels.map(model => (
            <FeaturedModelCard
              key={model.id}
              image={model.image}
              modelName={model.modelName}
              horsepower={model.horsepower}
              description={model.description}
              acceleration={model.acceleration}
              link={model.link}
            />
          ))}
        </div>
        <div className="featured-stats">
          <div className="stat-group">
            <div className="stat-number">58+</div>
            <div className="stat-text">Years of Innovation</div>
          </div>
          <div className="stat-group">
            <div className="stat-number">8</div>
            <div className="stat-text">F1 Championships</div>
          </div>
          <div className="stat-group">
            <div className="stat-number">6</div>
            <div className="stat-text">Current Models</div>
          </div>
          <div className="stat-group">
            <div className="stat-number">40+</div>
            <div className="stat-text">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;