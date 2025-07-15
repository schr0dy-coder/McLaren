import React, { useState } from "react";
import {
  Trophy,
  Users,
  MapPin,
  Calendar,
  Star,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

import TeamInfo from "./TeamInfo";
import RaceCalendar from "./RaceCalender";

import "./Racing.css";

import Racing from "./assets/racing.jpg";

const RacingPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const teamStats = {
    season: {
      position: 1,
      points: 417,
      races: 11,
      wins: 8,
      podiums: 18,
      poles: 7,
      top10s: 21,
      fastestLaps: 8,
      dnfs: 1,
    },
    allTime: {
      racesEntered: 982,
      totalPoints: 7367.5,
      victories: 197,
      podiums: 434,
      poles: 171,
      championships: 9,
      firstEntry: 1966,
    },
  };

  const drivers = [
    {
      name: "Lando Norris",
      number: 4,
      nationality: "British",
      image: "/api/placeholder/300/300",
      points: "Runner-up in 2024 with 4 wins",
      achievement: "Championship contender",
    },
    {
      name: "Oscar Piastri",
      number: 81,
      nationality: "Australian",
      image: "/api/placeholder/300/300",
      points: "2 victories in 2024",
      achievement: "Rising star",
    },
  ];

  const teamInfo = {
    fullName: "McLaren Formula 1 Team",
    base: "Woking, United Kingdom",
    teamChief: "Andrea Stella",
    technicalChief: "Peter Prodromou / Neil Houldey",
    chassis: "MCL39",
    powerUnit: "Mercedes",
    founded: 1966,
  };

  const recentAchievements = [
    {
      year: 2024,
      title: "Constructors' Championship Winners",
      description:
        "First championship since 1998, despite Red Bull's early dominance",
    },
    {
      year: 2023,
      title: "Fourth in Constructors'",
      description: "Regular podium contenders with 9 rostrums between drivers",
    },
  ];

  const StatCard = ({ icon: Icon, title, value, subtitle }) => (
    <div className="stat-card">
      <div className="stat-card-header">
        <Icon className="icon-orange" />
        <span className="stat-value">{value}</span>
      </div>
      <h3 className="stat-title">{title}</h3>
      {subtitle && <p className="stat-subtitle">{subtitle}</p>}
    </div>
  );

  const DriverCard = ({ driver }) => (
    <div className="driver-card">
      <div className="driver-card-content">
        <div className="driver-number-container">
          <span className="driver-number">#{driver.number}</span>
        </div>
        <div className="driver-info">
          <h3 className="driver-name">{driver.name}</h3>
          <p className="driver-nationality">{driver.nationality}</p>
          <p className="driver-achievement">{driver.achievement}</p>
        </div>
      </div>
      <div className="driver-points-container">
        <p className="driver-points">{driver.points}</p>
      </div>
    </div>
  );

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`tab-button ${isActive ? "tab-button-active" : ""}`}
    >
      {label}
    </button>
  );

  return (
    <div className="racing-page">
      {/* Hero Section */}
      <div className="hero-section-r">
        <div className="hero-background-r">
          <img src={Racing} alt="" />
          <div className="hero-overlay-r"></div>
        </div>
        <div className="hero-content-r">
          <div className="hero-logo-r">
            <span className="logo-placeholder-r">McLaren</span>{" "}
            {/* Placeholder for team logo */}
          </div>
          <h1 className="hero-title-r">McLaren Racing</h1>
          <p className="hero-subtitle-r">Championship Winners • Since 1966</p>
          <div className="hero-stats-container-r">
            <div className="hero-stats-grid-r">
              <div className="stat-card-r">
                <div className="stat-icon-r">
                  <span className="icon-trophy-r"></span>{" "}
                  {/* Placeholder for trophy icon */}
                </div>
                <div className="stat-value-r">
                  {teamStats.allTime.championships}
                </div>
                <div className="stat-label-r">Championships</div>
              </div>
              <div className="stat-card-r">
                <div className="stat-icon-r">
                  <span className="icon-flag-r"></span>{" "}
                  {/* Placeholder for flag icon */}
                </div>
                <div className="stat-value-r">{teamStats.allTime.victories}</div>
                <div className="stat-label-r">Victories</div>
              </div>
              <div className="stat-card-r">
                <div className="stat-icon-r">
                  <span className="icon-position-r"></span>{" "}
                  {/* Placeholder for position icon */}
                </div>
                <div className="stat-value-r">{teamStats.season.position}</div>
                <div className="stat-label-r">2025 Position</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="navigation-tabs">
        <div className="tabs-container">
          <TabButton
            id="overview"
            label="Overview"
            isActive={activeTab === "overview"}
            onClick={setActiveTab}
          />
          <TabButton
            id="team-info"
            label="Team Details"
            isActive={activeTab === "team-info"}
            onClick={setActiveTab}
          />
          <TabButton
            id="race-calendar"
            label="Race Calendar"
            isActive={activeTab === "race-calendar"}
            onClick={setActiveTab}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {activeTab === "overview" && (
          <div className="overview-section">
            {/* Team Legacy */}
            <div className="team-legacy">
              <h2 className="section-title">Racing Legacy</h2>
              <p className="legacy-description">
                Since entering the sport in 1966 under the guidance of eponymous
                founder Bruce McLaren, our success has been nothing short of
                breathtaking. Five glittering decades have yielded countless
                victories, pole positions and podiums, not to mention nine
                constructors' championships.
              </p>
            </div>

            {/* Current Season Highlights */}
            <div className="season-highlights">
              <StatCard
                icon={Trophy}
                title="Season Position"
                value={teamStats.season.position}
                subtitle="2025 Championship"
              />
              <StatCard
                icon={Target}
                title="Season Points"
                value={teamStats.season.points}
              />
              <StatCard
                icon={Star}
                title="Race Wins"
                value={teamStats.season.wins}
                subtitle="This season"
              />
              <StatCard
                icon={TrendingUp}
                title="Podiums"
                value={teamStats.season.podiums}
              />
            </div>

            {/* Recent Achievements */}
            <div className="recent-achievements">
              <h3 className="section-title">Recent Achievements</h3>
              <div className="achievements-list">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-content">
                      <div className="achievement-year">{achievement.year}</div>
                      <div className="achievement-details">
                        <h4 className="achievement-title">
                          {achievement.title}
                        </h4>
                        <p className="achievement-description">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="drivers-section">
            <h2 className="section-title">Our Drivers</h2>
            <div className="drivers-list">
              {drivers.map((driver, index) => (
                <DriverCard key={index} driver={driver} />
              ))}
            </div>
          </div>

          <div className="team-section">
            <h2 className="section-title">Team Information</h2>
            <div className="team-info-card">
              <div className="team-info-grid">
                <div className="team-details">
                  <h3 className="info-title">Team Details</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <Users className="info-icon" />
                      <div>
                        <span className="info-label">Full Name:</span>
                        <span className="info-value">{teamInfo.fullName}</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <MapPin className="info-icon" />
                      <div>
                        <span className="info-label">Base:</span>
                        <span className="info-value">{teamInfo.base}</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <Calendar className="info-icon" />
                      <div>
                        <span className="info-label">Founded:</span>
                        <span className="info-value">{teamInfo.founded}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="technical-details">
                  <h3 className="info-title">Technical</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <Zap className="info-icon" />
                      <div>
                        <span className="info-label">Chassis:</span>
                        <span className="info-value">{teamInfo.chassis}</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <Zap className="info-icon" />
                      <div>
                        <span className="info-label">Power Unit:</span>
                        <span className="info-value">{teamInfo.powerUnit}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="info-title">Leadership</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <span className="info-label">Team Chief:</span>
                      <span className="info-value">{teamInfo.teamChief}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Technical Chief:</span>
                      <span className="info-value">
                        {teamInfo.technicalChief}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )}

        {activeTab === "team-info" && (
          <div className="team-info-section">
            <TeamInfo />
          </div>
        )}

        {activeTab === "race-calendar" && (
          <div className="race-calendar-section">
            <RaceCalendar />
          </div>
        )}
      </div>
    </div>
  );
};

export default RacingPage;
