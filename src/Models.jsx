import React, { useState } from 'react';
import { ChevronRight, Zap, Gauge, DollarSign, Calendar } from 'lucide-react';
import CarCard from './CarCard';
import "tailwindcss";

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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    series: "Sports Series",
    model: "McLaren 570S",
    tagline: "Everyday usability, pure McLaren performance.",
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
    ]
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
    ]
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
    ]
  }
];

const Models = () => {
  const [selectedSeries, setSelectedSeries] = useState("All");
  
  const series = ["All", "Ultimate Series", "Super Series", "GT Series", "Sports Series"];
  
  const filteredCars = selectedSeries === "All" 
    ? mclarenCars 
    : mclarenCars.filter(car => car.series === selectedSeries);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            McLaren <span className="text-orange-500">Models</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the complete range of McLaren supercars, from everyday sports cars to track-focused hypercars.
          </p>
        </div>
        
        {/* Series Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {series.map((seriesName) => (
            <button
              key={seriesName}
              onClick={() => setSelectedSeries(seriesName)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedSeries === seriesName
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {seriesName}
            </button>
          ))}
        </div>
        
        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <CarCard key={`${car.model}-${index}`} car={car} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>Configure your McLaren today</span>
          </div>
          <div className="mt-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Build & Configure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;