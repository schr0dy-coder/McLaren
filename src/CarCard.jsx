import React, { useState } from 'react';
import { ChevronRight, Zap, Gauge, DollarSign } from 'lucide-react';

const CarCard = ({ car, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSeriesColor = (series) => {
    switch (series) {
      case "Ultimate Series":
        return "var(--primary-orange)";
      case "Super Series":
        return "var(--secondary-orange)";
      case "GT Series":
        return "var(--background-orange)";
      case "Sports Series":
        return "var(--accent-orange)";
      default:
        return "var(--primary-orange)";
    }
  };

  // Handle opening the car's link in a new tab
  const handleLearnMore = () => {
    if (car.link) {
      window.open(car.link, '_blank', 'noopener,noreferrer');
    } else {
      console.error('No link provided for this car');
    }
  };

  return (
    <div
      className="car-card animate"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Series Badge */}
      <div className="series-badge" style={{ backgroundColor: getSeriesColor(car.series) }}>
        {car.series}
      </div>

      {/* Car Image Container */}
      <div className="car-image-container">
        <img src={car.image} alt={`${car.model}`} className="car-image" />
        <div className="car-image-effect"></div>
        <div className="car-model-name">
          <h3>{car.model}</h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="car-content">
        <p className="car-tagline">{car.tagline}</p>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-item">
            <Zap style={{ color: '#FFD700' }} />
            <div>
              <p>{car.stats.horsepower}</p>
              <p>HP</p>
            </div>
          </div>
          <div className="stat-item">
            <Gauge style={{ color: '#00B7EB' }} />
            <div>
              <p>{car.stats.zeroToSixty}</p>
              <p>0-60 mph</p>
            </div>
          </div>
          <div className="stat-item">
            <ChevronRight style={{ color: '#FF4040' }} />
            <div>
              <p>{car.stats.topSpeed}</p>
              <p>Top Speed</p>
            </div>
          </div>
          <div className="stat-item">
            <DollarSign style={{ color: '#00FF7F' }} />
            <div>
              <p>{car.stats.startingPrice}</p>
              <p>Starting</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="key-features">
          <h4>Key Features</h4>
          <div className="features-list">
            {car.keyFeatures.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="feature-tag">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <button
          className="learn-more-button"
          onClick={handleLearnMore}
          style={{
            background: isHovered
              ? `linear-gradient(to right, ${getSeriesColor(car.series)}, var(--primary-orange))`
              : undefined,
          }}
          aria-label={`Learn more about ${car.model}`}
        >
          Learn More
        </button>
      </ div>
    </div>
  );
};

export default CarCard;