import React, { useState } from 'react';
import { ChevronRight, Zap, Gauge, DollarSign, Calendar } from 'lucide-react';
import CarCard from './CarCard';
import Footer from './Footer';

import ml750s from './assets/ml750s/front.webp';
import mlgt from './assets/mlgt/og.webp';
import ml720s from './assets/ml720s/front.jpg';
import mlartura from './assets/mlartura/front.webp';
import ml570s from './assets/ml570s/frontside.jpeg';
import ml765lt from './assets/ml765lt/fronttop.webp';
import mlw1 from './assets/mlw1/fronttop.webp'


const links  = [
  "https://cars.mclaren.com/en/750s", 
  "https://cars.mclaren.com/en/new-mclaren-gt",
  "https://cars.mclaren.com/en/super-series/720s",
  "https://cars.mclaren.com/en/artura",
  "https://cars.mclaren.com/en/sports-series/570s",
  "https://cars.mclaren.com/en/super-series/765lt",
  "https://cars.mclaren.com/en/W1"
]

const mclarenCars = [
  {
    series: "Super Series",
    model: "McLaren 750S",
    tagline: "The evolution of the supercar. Lighter, faster, and sharper than ever before.",
    stats: {
      horsepower: 750,
      zeroToSixty: "2.8s",
      topSpeed: "206 mph",
      startingPrice: "$720,000"
    },
    technicalSpecs: {
      horsepower: "750 HP",
      zeroToSixty: "2.8s",
      topSpeed: "206 mph"
    },
    production: {
      year: 2023,
      unitsMade: "N/A",
      startingPrice: "$720,000"
    },
    keyFeatures: [
      "Lighter carbon fiber chassis",
      "4.0L twin-turbo V8",
      "Active rear wing",
      "Proactive Chassis Control III"
    ],
    image: ml750s,
    link : links[0]
  },
  {
    series: "GT Series",
    model: "McLaren GT",
    tagline: "Grand touring redefined. Supercar performance meets everyday luxury.",
    stats: {
      horsepower: 611,
      zeroToSixty: "3.2s",
      topSpeed: "203 mph",
      startingPrice: "$210,000"
    },
    technicalSpecs: {
      horsepower: "611 HP",
      zeroToSixty: "3.2s",
      topSpeed: "203 mph"
    },
    production: {
      year: 2019,
      unitsMade: "N/A",
      startingPrice: "$210,000"
    },
    keyFeatures: [
      "Spacious luxury interior",
      "Large luggage space",
      "Comfort mode suspension",
      "Dihedral doors"
    ],
    image: mlgt,
    link : links[1]
  },
  {
    series: "Super Series",
    model: "McLaren 720S",
    tagline: "The benchmark of the supercar world. Pure speed and agility.",
    stats: {
      horsepower: 711,
      zeroToSixty: "2.9s",
      topSpeed: "212 mph",
      startingPrice: "$300,000"
    },
    technicalSpecs: {
      horsepower: "711 HP",
      zeroToSixty: "2.9s",
      topSpeed: "212 mph"
    },
    production: {
      year: 2017,
      unitsMade: "N/A",
      startingPrice: "$300,000"
    },
    keyFeatures: [
      "MonoCage II carbon chassis",
      "Dihedral doors",
      "Variable Drift Control",
      "Active aerodynamics"
    ],
    image: ml720s,
    link : links[2]
  },
  {
    series: "Sports Series",
    model: "McLaren Artura",
    tagline: "Hybrid performance, McLaren DNA. The future of driving thrills.",
    stats: {
      horsepower: 671,
      zeroToSixty: "3.0s",
      topSpeed: "205 mph",
      startingPrice: "$250,000"
    },
    technicalSpecs: {
      horsepower: "671 HP",
      zeroToSixty: "3.0s",
      topSpeed: "205 mph"
    },
    production: {
      year: 2020,
      unitsMade: "N/A",
      startingPrice: "$250,000"
    },
    keyFeatures: [
      "Hybrid V6 engine",
      "Electric-only drive mode",
      "Lightweight carbon chassis",
      "Advanced infotainment"
    ],
    image: mlartura,
    link : links[3]
  },
  {
    series: "Sports Series",
    model: "McLaren 570S",
    tagline: "Everyday usability combined with pure McLaren performance.",
    stats: {
      horsepower: 562,
      zeroToSixty: "3.2s",
      topSpeed: "204 mph",
      startingPrice: "$195,000"
    },
    technicalSpecs: {
      horsepower: "562 HP",
      zeroToSixty: "3.2s",
      topSpeed: "204 mph"
    },
    production: {
      year: 2015,
      unitsMade: "N/A",
      startingPrice: "$195,000"
    },
    keyFeatures: [
      "3.8L twin-turbo V8",
      "Carbon fiber monocoque",
      "Agile handling",
      "Daily drivability"
    ],
    image: ml570s,
    link : links[4]
  },
  {
    series: "Super Series",
    model: "McLaren 765LT",
    tagline: "Track-focused, road-legal. The ultimate expression of performance.",
    stats: {
      horsepower: 755,
      zeroToSixty: "2.8s",
      topSpeed: "205 mph",
      startingPrice: "$380,000"
    },
    technicalSpecs: {
      horsepower: "755 HP",
      zeroToSixty: "2.8s",
      topSpeed: "205 mph"
    },
    production: {
      year: 2020,
      unitsMade: 765,
      startingPrice: "$380,000"
    },
    keyFeatures: [
      "Extreme lightweight design",
      "Active aerodynamics",
      "Quad titanium exhaust",
      "Track-tuned suspension"
    ],
    image: ml765lt,
    link : links[5]
  },
  {
    series: "Ultimate Series",
    model: "McLaren W1",
    tagline: "The fastest-accelerating McLaren ever. Next-gen hybrid hypercar.",
    stats: {
      horsepower: 1258,
      zeroToSixty: "2.7s",
      topSpeed: "217 mph",
      startingPrice: "TBA"
    },
    technicalSpecs: {
      horsepower: "1258 HP",
      zeroToSixty: "2.7s",
      topSpeed: "217 mph"
    },
    production: {
      year: 2025,
      unitsMade: "TBA",
      startingPrice: "TBA"
    },
    keyFeatures: [
      "Hybrid V8 powertrain",
      "F1-inspired tech",
      "Carbon fiber construction",
      "Record acceleration"
    ],
    image: mlw1,
    link : links[6]
  }
];

const Models = () => {
  const [selectedSeries, setSelectedSeries] = useState("All");
  const series = ["All", "Ultimate Series", "Super Series", "GT Series", "Sports Series"];
  const filteredCars = selectedSeries === "All"
    ? mclarenCars
    : mclarenCars.filter(car => car.series === selectedSeries);

  return (
    <>
    <section className="models-section" id="models-section">
      <div className="models-container">
        {/* Header */}
        <div className="models-header">
          <h1>
            McLaren <span>Models</span>
          </h1>
          <p>Discover the complete range of McLaren supercars, from everyday sports cars to track-focused hypercars.</p>
        </div>

        {/* Series Filter */}
        <div className="series-filter">
          {series.map((seriesName) => (
            <button
              key={seriesName}
              onClick={() => setSelectedSeries(seriesName)}
              className={`series-button ${selectedSeries === seriesName ? 'active' : ''}`}
            >
              {seriesName}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="cars-grid">
          {filteredCars.map((car, index) => (
            <CarCard key={`${car.model}-${index}`} car={car} index={index} />
          ))}
        </div>

        
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Models;