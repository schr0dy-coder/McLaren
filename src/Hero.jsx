import React, { useState, useEffect } from "react";
import trial4 from "./assets/trial-4.jpg";
import trial3 from "./assets/trial-3.jpg";
import trial2 from "./assets/trial-2.jpg";
import trial1 from "./assets/trial.webp";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [trial3, trial2, trial1, trial4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const p1link = "https://cars.mclaren.com/en/legacy/mclaren-p1"
  const handleSpecificationbtn = () => {
    window.open(p1link, '_blank')
  }
  return (
    <>
      <div className="hero-background">
        <div className="background-box slide-effect">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`McLaren ${index + 1}`}
              className={index === currentImageIndex ? "active" : "previous"}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">McLaren P1</h1>
            <p className="hero-subtitle">
              The pinnacle of automotive engineering. Where Formula 1 technology
              meets uncompromising luxury, creating the ultimate hybrid hypercar
              experience.
            </p>
            <div className="hero-cta">
              <button className="cta-primary" onClick={handleSpecificationbtn}>Explore P1</button>
              <button className="cta-secondary"
                onClick={() => {
                  window.open("https://cars.mclaren.com/en/experiences", '_blank')
                }}
              >Book Test Drive</button>
            </div>
          </div>

          <div className="hero-specs">
            <div className="specs-container">
              <h2 className="specs-title">Technical Excellence</h2>

              <div className="specs-grid">
                <div className="spec-item">
                  <div className="spec-value">903</div>
                  <div className="spec-label">Horsepower</div>
                </div>
                <div className="spec-item">
                  <div className="spec-value">2.8</div>
                  <div className="spec-label">0-60 MPH</div>
                </div>
                <div className="spec-item">
                  <div className="spec-value">217</div>
                  <div className="spec-label">Top Speed</div>
                </div>
                <div className="spec-item">
                  <div className="spec-value">375</div>
                  <div className="spec-label">Units Made</div>
                </div>
              </div>

              <button className="specs-cta" onClick={handleSpecificationbtn}>View Full Specifications</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
