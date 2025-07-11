import React, { useState } from 'react';
import { ChevronRight, Zap, Gauge, DollarSign, Calendar } from 'lucide-react';


const CarCard = ({ car, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getSeriesColor = (series) => {
    switch (series) {
      case "Ultimate Series":
        return "#FF4500"; // McLaren Orange
      case "Super Series":
        return "#FF6B33"; // Heat Orange
      case "GT Series":
        return "#FF8C00"; // Flame Orange
      case "Sports Series":
        return "#FFB366"; // Sunset Orange
      default:
        return "#FF4500";
    }
  };

  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      {/* Series Badge */}
      <div 
        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white z-10"
        style={{ backgroundColor: getSeriesColor(car.series) }}
      >
        {car.series}
      </div>
      
      {/* Car Image Placeholder */}
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        
        {/* Car silhouette */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-20 bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-full opacity-30"></div>
        
        {/* Model name overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl md:text-2xl font-bold">{car.model}</h3>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Tagline */}
        <p className="text-gray-300 text-sm leading-relaxed">{car.tagline}</p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <div>
              <p className="text-white font-semibold text-lg">{car.stats.horsepower}</p>
              <p className="text-gray-400 text-xs">HP</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Gauge className="w-4 h-4 text-blue-400" />
            <div>
              <p className="text-white font-semibold text-lg">{car.stats.zeroToSixty}</p>
              <p className="text-gray-400 text-xs">0-60 mph</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-red-400" />
            <div>
              <p className="text-white font-semibold text-lg">{car.stats.topSpeed}</p>
              <p className="text-gray-400 text-xs">Top Speed</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-green-400" />
            <div>
              <p className="text-white font-semibold text-lg">{car.stats.startingPrice}</p>
              <p className="text-gray-400 text-xs">Starting</p>
            </div>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-sm">Key Features</h4>
          <div className="flex flex-wrap gap-2">
            {car.keyFeatures.slice(0, 3).map((feature, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        {/* Learn More Button */}
        <button 
          className="w-full mt-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:shadow-lg transform hover:scale-105"
          style={{
            background: isHovered ? `linear-gradient(to right, ${getSeriesColor(car.series)}, #FF4500)` : undefined
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CarCard;