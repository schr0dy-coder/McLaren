import React from "react";

const FeaturedModelCard = ({ 
  image, 
  modelName, 
  horsepower, 
  description, 
  acceleration, 
  link
}) => {
  return (
    <div className="featured-card">
      <div className="card-image-container">
        <img src={image} alt={modelName} className="card-image" />
        <div className="card-overlay">
          <div className="card-stats">
            <div className="stat-item">
              <span className="stat-value">{horsepower}</span>
              <span className="stat-label">HP</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{acceleration}</span>
              <span className="stat-label">0-60 MPH</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{modelName}</h3>
        <p className="card-description">{description}</p>
        <button className="card-cta" onClick={() => {
          window.open(link, '_blank')
        }}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default FeaturedModelCard;