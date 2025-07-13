import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2 } from 'lucide-react';

// Car data with image arrays for each model
const carImageData = {
  'McLaren 750S': {
    images: ['./assets/ml750s/back.jpg', './assets/ml750s/frontside.jpg', './assets/ml750s/image.jpg', './assets/ml750s/image2.jpg', './assets/ml750s/side.jpg'],
    video: './assets/ml750s/vid.mp4'
  },
  'McLaren GT': {
    images: ['./assets/mlgt/back.webp', './assets/mlgt/froneback.png', './assets/mlgt/fromback.png', './assets/mlgt/front.webp', './assets/mlgt/fronttop.webp', './assets/mlgt/inside.webp', './assets/mlgt/top.webp'],
    video: './assets/mlgt/vid.mp4'
  },
  'McLaren 720S': {
    images: ['./assets/ml720s/front.jpg', './assets/ml720s/inside.webp', './assets/ml720s/reverseside.png', './assets/ml720s/side.jpg', './assets/ml720s/side.png'],
    video: './assets/ml720s/vid.mp4'
  },
  'McLaren Artura': {
    images: ['./assets/mlartura/artura-2-2.jpg', './assets/mlartura/artura-6.jpg', './assets/mlartura/back.webp', './assets/mlartura/engine.jpg', './assets/mlartura/front.webp', './assets/mlartura/sideview.webp'],
    video: './assets/mlartura/vid.mp4'
  },
  'McLaren 570S': {
    images: ['./assets/ml570s/back.jpg', './assets/ml570s/frontside.jpg', './assets/ml570s/image.jpg', './assets/ml570s/image2.jpg', './assets/ml570s/side.jpg'],
    video: './assets/ml570s/vid.mp4'
  },
  'McLaren 765LT': {
    images: ['./assets/ml765lt/back.jpg', './assets/ml765lt/back.webp', './assets/ml765lt/fronttop.webp', './assets/ml765lt/inside.webp', './assets/ml765lt/side.webp'],
    video: './assets/ml765lt/vid.mp4'
  },
  'McLaren W1': {
    images: ['./assets/mlw1/back.webp', './assets/mlw1/backtop.webp', './assets/mlw1/backy.webp', './assets/mlw1/front.webp', './assets/mlw1/fronttop.webp', './assets/mlw1/inside.webp', './assets/mlw1/top.webp'],
    video: './assets/mlw1/vid.mp4'
  }
};

const CarDetailsPage = ({ selectedCar, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  if (!selectedCar) {
    return null;
  }

  const carImages = carImageData[selectedCar.model]?.images || [];
  const carVideo = carImageData[selectedCar.model]?.video;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backButton}>
          <ChevronLeft size={24} />
          Back to Models
        </button>
        <h1 style={styles.title}>{selectedCar.model}</h1>
        <p style={styles.tagline}>{selectedCar.tagline}</p>
        <div style={styles.seriesBadge}>
          <span>{selectedCar.series}</span>
        </div>
      </div>

      <div style={styles.content}>
        {/* Gallery Section */}
        <div style={styles.gallerySection}>
          <div style={styles.mainImageContainer}>
            <img 
              src={carImages[currentImageIndex]} 
              alt={`${selectedCar.model} - Image ${currentImageIndex + 1}`}
              style={styles.mainImage}
            />
            <div style={styles.imageOverlay}>
              <button 
                onClick={prevImage} 
                style={{...styles.navButton, ...styles.prevButton}}
                disabled={carImages.length <= 1}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage} 
                style={{...styles.navButton, ...styles.nextButton}}
                disabled={carImages.length <= 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div style={styles.imageCounter}>
              {currentImageIndex + 1} / {carImages.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div style={styles.thumbnailContainer}>
            {carImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedCar.model} thumbnail ${index + 1}`}
                style={{
                  ...styles.thumbnail,
                  ...(index === currentImageIndex ? styles.activeThumbnail : {})
                }}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Video Section */}
        {carVideo && (
          <div style={styles.videoSection}>
            <div style={styles.videoContainer}>
              <video
                src={carVideo}
                style={styles.video}
                controls={false}
                loop
                muted
                autoPlay={isVideoPlaying}
              />
              <div style={styles.videoControls}>
                <button onClick={toggleVideo} style={styles.playButton}>
                  {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <div style={styles.videoInfo}>
                  <span>{selectedCar.model} in Action</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Specifications Section */}
        <div style={styles.specsSection}>
          <h2 style={styles.sectionTitle}>Performance Specifications</h2>
          <div style={styles.specsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{selectedCar.stats.horsepower}</div>
              <div style={styles.statLabel}>Horsepower</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{selectedCar.stats.zeroToSixty}</div>
              <div style={styles.statLabel}>0-60 mph</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{selectedCar.stats.topSpeed}</div>
              <div style={styles.statLabel}>Top Speed</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{selectedCar.stats.startingPrice}</div>
              <div style={styles.statLabel}>Starting Price</div>
            </div>
          </div>

          <div style={styles.featuresSection}>
            <h3 style={styles.featuresTitle}>Key Features</h3>
            <div style={styles.featuresList}>
              {selectedCar.keyFeatures.map((feature, index) => (
                <div key={index} style={styles.featureItem}>
                  <div style={styles.featureBullet}></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.productionInfo}>
            <h3 style={styles.productionTitle}>Production Details</h3>
            <div style={styles.productionGrid}>
              <div style={styles.productionItem}>
                <span style={styles.productionLabel}>Year:</span>
                <span style={styles.productionValue}>{selectedCar.production.year}</span>
              </div>
              <div style={styles.productionItem}>
                <span style={styles.productionLabel}>Units Made:</span>
                <span style={styles.productionValue}>{selectedCar.production.unitsMade}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    position: 'relative'
  },
  backButton: {
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    backgroundColor: 'rgba(255, 69, 0, 0.1)',
    border: '1px solid #ff4500',
    borderRadius: '8px',
    color: '#ff4500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '16px'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    background: 'linear-gradient(135deg, #ff4500 0%, #ff6b33 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#aeaeb2',
    marginBottom: '20px',
    maxWidth: '600px',
    margin: '0 auto 20px'
  },
  seriesBadge: {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: 'rgba(255, 69, 0, 0.2)',
    border: '1px solid #ff4500',
    borderRadius: '25px',
    fontSize: '0.9rem',
    color: '#ff4500',
    fontWeight: 'bold'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gap: '40px'
  },
  gallerySection: {
    display: 'grid',
    gap: '20px'
  },
  mainImageContainer: {
    position: 'relative',
    height: '500px',
    borderRadius: '15px',
    overflow: 'hidden',
    backgroundColor: '#1a1a1a'
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  navButton: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'rgba(15, 15, 15, 0.8)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backdropFilter: 'blur(10px)'
  },
  prevButton: {
    left: '20px'
  },
  nextButton: {
    right: '20px'
  },
  imageCounter: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    padding: '8px 16px',
    backgroundColor: 'rgba(15, 15, 15, 0.8)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    backdropFilter: 'blur(10px)'
  },
  thumbnailContainer: {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    padding: '10px 0'
  },
  thumbnail: {
    width: '80px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'all 0.2s ease',
    border: '2px solid transparent',
    flexShrink: 0
  },
  activeThumbnail: {
    opacity: 1,
    border: '2px solid #ff4500',
    transform: 'scale(1.05)'
  },
  videoSection: {
    marginTop: '40px'
  },
  videoContainer: {
    position: 'relative',
    height: '400px',
    borderRadius: '15px',
    overflow: 'hidden',
    backgroundColor: '#1a1a1a'
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  videoControls: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '20px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  playButton: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#ff4500',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  videoInfo: {
    fontSize: '1.1rem',
    fontWeight: '600'
  },
  specsSection: {
    padding: '40px',
    backgroundColor: '#1a1a1a',
    borderRadius: '15px',
    border: '1px solid #404040'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#ff4500',
    textAlign: 'center'
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  },
  statCard: {
    backgroundColor: '#2d2d2d',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid #404040',
    transition: 'all 0.3s ease'
  },
  statValue: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ff4500',
    marginBottom: '10px'
  },
  statLabel: {
    fontSize: '1rem',
    color: '#aeaeb2',
    fontWeight: '500'
  },
  featuresSection: {
    marginBottom: '40px'
  },
  featuresTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ffffff'
  },
  featuresList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '15px',
    backgroundColor: '#2d2d2d',
    borderRadius: '8px',
    border: '1px solid #404040'
  },
  featureBullet: {
    width: '8px',
    height: '8px',
    backgroundColor: '#ff4500',
    borderRadius: '50%',
    flexShrink: 0
  },
  productionInfo: {
    marginTop: '40px',
    paddingTop: '40px',
    borderTop: '1px solid #404040'
  },
  productionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ffffff'
  },
  productionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px'
  },
  productionItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#2d2d2d',
    borderRadius: '8px',
    border: '1px solid #404040'
  },
  productionLabel: {
    color: '#aeaeb2',
    fontWeight: '500'
  },
  productionValue: {
    color: '#ffffff',
    fontWeight: 'bold'
  }
};

export default CarDetailsPage;