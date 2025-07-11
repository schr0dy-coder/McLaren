import React from 'react';

const Heritage = () => {
  const milestones = [
    {
      year: "1966",
      title: "McLaren Racing Founded",
      description: "Bruce McLaren establishes McLaren Racing, beginning a legacy of innovation and performance."
    },
    {
      year: "1995",
      title: "Le Mans Victory",
      description: "McLaren F1 GTR dominates Le Mans, showcasing our engineering excellence on the world stage."
    },
    {
      year: "2023",
      title: "F1 Innovation Continues",
      description: "Pushing boundaries with cutting-edge technology and sustainable performance solutions."
    }
  ];

  return (
    <section className="heritage">
      <div className="section-container">
        <div className="heritage-content">
          <div className="heritage-text">
            <h2 className="section-title">Racing Heritage</h2>
            <p className="heritage-description">
              Born from Formula 1, our racing DNA runs through every McLaren. 
              From the Monaco Grand Prix to the Le Mans victory, our legacy is written in speed.
            </p>
            <div className="heritage-timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="heritage-cta">
              Explore Racing Heritage
            </button>
          </div>
          <div className="heritage-image">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="McLaren Racing Heritage"
              className="heritage-img"
            />
          </div>
        </div>
        <div className="heritage-banner">
          <div className="banner-content">
            <h3 className="banner-title">Experience McLaren</h3>
            <p className="banner-subtitle">
              Schedule your test drive today and feel the power of Formula 1 technology
            </p>
            <div className="banner-actions">
              <button className="banner-btn primary">Book Test Drive</button>
              <button className="banner-btn secondary">Find Dealer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Heritage