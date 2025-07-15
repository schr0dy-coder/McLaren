import React from 'react';
import { Users, MapPin, Calendar, Zap, Award, Building, Wrench, Globe } from 'lucide-react';

const TeamInfo = () => {
  const teamDetails = {
    fullName: "McLaren Formula 1 Team",
    base: "Woking, United Kingdom",
    teamChief: "Andrea Stella",
    technicalChief: "Peter Prodromou / Neil Houldey",
    chassis: "MCL39",
    powerUnit: "Mercedes",
    founded: 1966,
    headquarters: "McLaren Technology Centre, Woking",
    employees: "800+",
    website: "mclaren.com"
  };

  const leadership = [
    {
      name: "Andrea Stella",
      position: "Team Principal",
      background: "Former Ferrari strategist and engineer",
      icon: Users
    },
    {
      name: "Peter Prodromou",
      position: "Technical Director (Aerodynamics)",
      background: "Ex-Red Bull and Mercedes aerodynamicist",
      icon: Wrench
    },
    {
      name: "Neil Houldey",
      position: "Technical Director (Engineering)",
      background: "McLaren veteran with extensive F1 experience",
      icon: Wrench
    }
  ];

  const technicalSpecs = {
    chassis: "MCL39",
    powerUnit: "Mercedes AMG F1 M15 E Performance",
    transmission: "McLaren 8-speed seamless shift",
    suspension: "Carbon fibre and metallic composite",
    brakes: "Brembo carbon discs and pads",
    wheels: "BBS forged magnesium",
    tyres: "Pirelli P Zero",
    fuel: "Petronas Primax",
    lubricants: "Petronas Syntium"
  };

  const facilities = [
    {
      name: "McLaren Technology Centre",
      location: "Woking, UK",
      description: "State-of-the-art headquarters featuring advanced manufacturing facilities",
      features: ["Wind tunnel", "Simulator", "Manufacturing", "Design studios"]
    },
    {
      name: "McLaren Applied",
      location: "Woking, UK",
      description: "Technology division developing advanced solutions",
      features: ["Electronics", "Software", "Data analytics", "Simulation"]
    }
  ];

  const partnerships = [
    {
      name: "Mercedes-AMG",
      type: "Power Unit Partner",
      description: "Provides cutting-edge hybrid power units",
      since: "2021"
    },
    {
      name: "Petronas",
      type: "Fuel & Lubricants",
      description: "Technical partnership for optimal performance",
      since: "2020"
    },
    {
      name: "Google",
      type: "Technology Partner",
      description: "Cloud computing and data analytics",
      since: "2022"
    }
  ];

  const InfoCard = ({ icon: Icon, title, value, subtitle }) => (
    <div className="info-card">
      <div className="info-card-header">
        <Icon className="info-icon" />
        <div>
          <h3 className="info-title">{title}</h3>
          {subtitle && <p className="info-subtitle">{subtitle}</p>}
        </div>
      </div>
      <p className="info-value">{value}</p>
    </div>
  );

  const LeadershipCard = ({ leader }) => (
    <div className="leadership-card">
      <div className="leadership-content">
        <div className="leadership-icon-container">
          <leader.icon className="leadership-icon" />
        </div>
        <div className="leadership-info">
          <h3 className="leadership-name">{leader.name}</h3>
          <p className="leadership-position">{leader.position}</p>
          <p className="leadership-background">{leader.background}</p>
        </div>
      </div>
    </div>
  );

  const TechnicalRow = ({ label, value }) => (
    <div className="technical-row">
      <span className="technical-label">{label}</span>
      <span className="technical-value">{value}</span>
    </div>
  );

  return (
    <div className="team-info">
      <h2 className="section-title">
        <Building className="section-icon" />
        Team Information
      </h2>

      <div className="info-grid">
        <InfoCard
          icon={Users}
          title="Full Team Name"
          value={teamDetails.fullName}
        />
        <InfoCard
          icon={MapPin}
          title="Team Base"
          value={teamDetails.base}
        />
        <InfoCard
          icon={Calendar}
          title="Founded"
          value={teamDetails.founded}
          subtitle="58 years in Formula 1"
        />
        <InfoCard
          icon={Building}
          title="Headquarters"
          value={teamDetails.headquarters}
        />
      </div>

      <div className="leadership-section">
        <h3 className="section-title">Leadership Team</h3>
        <div className="leadership-grid">
          {leadership.map((leader, index) => (
            <LeadershipCard key={index} leader={leader} />
          ))}
        </div>
      </div>

      <div className="technical-specs">
        <h3 className="section-title">
          <Zap className="section-icon" />
          Technical Specifications
        </h3>
        <div className="technical-grid">
          <div>
            <h4 className="technical-title">Car Specifications</h4>
            <div className="technical-list">
              <TechnicalRow label="Chassis" value={technicalSpecs.chassis} />
              <TechnicalRow label="Power Unit" value={technicalSpecs.powerUnit} />
              <TechnicalRow label="Transmission" value={technicalSpecs.transmission} />
              <TechnicalRow label="Suspension" value={technicalSpecs.suspension} />
              <TechnicalRow label="Brakes" value={technicalSpecs.brakes} />
            </div>
          </div>
          <div>
            <h4 className="technical-title">Components & Partners</h4>
            <div className="technical-list">
              <TechnicalRow label="Wheels" value={technicalSpecs.wheels} />
              <TechnicalRow label="Tyres" value={technicalSpecs.tyres} />
              <TechnicalRow label="Fuel" value={technicalSpecs.fuel} />
              <TechnicalRow label="Lubricants" value={technicalSpecs.lubricants} />
            </div>
          </div>
        </div>
      </div>

      <div className="facilities-section">
        <h3 className="section-title">Facilities</h3>
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card">
              <div className="facility-content">
                <Building className="facility-icon" />
                <div className="facility-info">
                  <h4 className="facility-name">{facility.name}</h4>
                  <p className="facility-location">{facility.location}</p>
                  <p className="facility-description">{facility.description}</p>
                  <div className="facility-features">
                    {facility.features.map((feature, idx) => (
                      <span key={idx} className="facility-feature">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="partnerships-section">
        <h3 className="section-title">Key Partnerships</h3>
        <div className="partnerships-grid">
          {partnerships.map((partner, index) => (
            <div key={index} className="partnership-card">
              <div className="partnership-content">
                <div className="partnership-icon-container">
                  <Globe className="partnership-icon" />
                </div>
                <div className="partnership-info">
                  <h4 className="partnership-name">{partner.name}</h4>
                  <p className="partnership-type">{partner.type}</p>
                  <p className="partnership-description">{partner.description}</p>
                  <p className="partnership-since">Since {partner.since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="heritage-section">
        <h3 className="section-title">
          <Award className="section-icon" />
          Team Heritage
        </h3>
        <div className="heritage-content">
          <p className="heritage-text">
            Since entering the sport in 1966 under the guidance and restless endeavour of eponymous founder Bruce McLaren,
            McLaren's success has been nothing short of breathtaking. Five glittering decades have yielded countless victories,
            pole positions and podiums, not to mention nine constructors' championships.
          </p>
          <p className="heritage-text">
            Some of the sport's greatest drivers have made their names with the team, including Emerson Fittipaldi,
            Ayrton Senna, Mika Häkkinen, and Lewis Hamilton. The team's commitment to innovation and excellence continues
            to drive them forward in the modern era.
          </p>
          <p className="heritage-text">
            Based at the state-of-the-art McLaren Technology Centre in Woking, the team combines cutting-edge technology
            with decades of racing expertise to compete at the highest level of motorsport.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;