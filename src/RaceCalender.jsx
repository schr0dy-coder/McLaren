import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Trophy, Flag, Star, CheckCircle, Circle } from 'lucide-react';

const RaceCalendar = () => {
  const [selectedRace, setSelectedRace] = useState(null);

  const raceCalendar = [
    {
      id: 1,
      round: 1,
      name: "Bahrain Grand Prix",
      circuit: "Bahrain International Circuit",
      location: "Sakhir, Bahrain",
      date: "March 2, 2025",
      status: "completed",
      result: {
        norris: { position: 2, points: 18 },
        piastri: { position: 3, points: 15 }
      },
      weather: "Clear",
      lapRecord: "1:31.447"
    },
    {
      id: 2,
      round: 2,
      name: "Saudi Arabian Grand Prix",
      circuit: "Jeddah Corniche Circuit",
      location: "Jeddah, Saudi Arabia",
      date: "March 9, 2025",
      status: "completed",
      result: {
        norris: { position: 1, points: 25 },
        piastri: { position: 4, points: 12 }
      },
      weather: "Clear",
      lapRecord: "1:30.734"
    },
    {
      id: 3,
      round: 3,
      name: "Australian Grand Prix",
      circuit: "Albert Park Circuit",
      location: "Melbourne, Australia",
      date: "March 16, 2025",
      status: "completed",
      result: {
        norris: { position: 3, points: 15 },
        piastri: { position: 1, points: 25 }
      },
      weather: "Partly Cloudy",
      lapRecord: "1:20.260"
    },
    {
      id: 4,
      round: 4,
      name: "Japanese Grand Prix",
      circuit: "Suzuka International Racing Course",
      location: "Suzuka, Japan",
      date: "April 6, 2025",
      status: "completed",
      result: {
        norris: { position: 1, points: 25 },
        piastri: { position: 2, points: 18 }
      },
      weather: "Clear",
      lapRecord: "1:30.983"
    },
    {
      id: 5,
      round: 5,
      name: "Chinese Grand Prix",
      circuit: "Shanghai International Circuit",
      location: "Shanghai, China",
      date: "April 20, 2025",
      status: "completed",
      result: {
        norris: { position: 1, points: 25 },
        piastri: { position: 3, points: 15 }
      },
      weather: "Overcast",
      lapRecord: "1:32.238"
    },
    {
      id: 6,
      round: 6,
      name: "Miami Grand Prix",
      circuit: "Miami International Autodrome",
      location: "Miami, USA",
      date: "May 4, 2025",
      status: "completed",
      result: {
        norris: { position: 1, points: 25 },
        piastri: { position: 5, points: 10 }
      },
      weather: "Hot",
      lapRecord: "1:29.708"
    },
    {
      id: 7,
      round: 7,
      name: "Emilia Romagna Grand Prix",
      circuit: "Autodromo Enzo e Dino Ferrari",
      location: "Imola, Italy",
      date: "May 18, 2025",
      status: "completed",
      result: {
        norris: { position: 2, points: 18 },
        piastri: { position: 1, points: 25 }
      },
      weather: "Clear",
      lapRecord: "1:15.484"
    },
    {
      id: 8,
      round: 8,
      name: "Monaco Grand Prix",
      circuit: "Circuit de Monaco",
      location: "Monte Carlo, Monaco",
      date: "May 25, 2025",
      status: "completed",
      result: {
        norris: { position: 1, points: 25 },
        piastri: { position: 2, points: 18 }
      },
      weather: "Clear",
      lapRecord: "1:12.909"
    },
    {
      id: 9,
      round: 9,
      name: "Canadian Grand Prix",
      circuit: "Circuit Gilles Villeneuve",
      location: "Montreal, Canada",
      date: "June 8, 2025",
      status: "completed",
      result: {
        norris: { position: 1, points: 25 },
        piastri: { position: 3, points: 15 }
      },
      weather: "Partly Cloudy",
      lapRecord: "1:13.078"
    },
    {
      id: 10,
      round: 10,
      name: "Spanish Grand Prix",
      circuit: "Circuit de Barcelona-Catalunya",
      location: "Barcelona, Spain",
      date: "June 22, 2025",
      status: "completed",
      result: {
        norris: { position: 2, points: 18 },
        piastri: { position: 4, points: 12 }
      },
      weather: "Hot",
      lapRecord: "1:16.330"
    },
    {
      id: 11,
      round: 11,
      name: "Austrian Grand Prix",
      circuit: "Red Bull Ring",
      location: "Spielberg, Austria",
      date: "June 29, 2025",
      status: "completed",
      result: {
        norris: { position: 1, points: 25 },
        piastri: { position: 2, points: 18 }
      },
      weather: "Clear",
      lapRecord: "1:05.619"
    },
    {
      id: 12,
      round: 12,
      name: "British Grand Prix",
      circuit: "Silverstone Circuit",
      location: "Silverstone, UK",
      date: "July 6, 2025",
      status: "upcoming",
      result: null,
      weather: "Variable",
      lapRecord: "1:27.097"
    },
    {
      id: 13,
      round: 13,
      name: "Hungarian Grand Prix",
      circuit: "Hungaroring",
      location: "Budapest, Hungary",
      date: "July 20, 2025",
      status: "upcoming",
      result: null,
      weather: "Hot",
      lapRecord: "1:16.627"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="status-icon completed" />;
      case 'upcoming':
        return <Circle className="status-icon upcoming" />;
      default:
        return <Circle className="status-icon default" />;
    }
  };

  const getPositionColor = (position) => {
    switch (position) {
      case 1:
        return 'position-gold';
      case 2:
        return 'position-silver';
      case 3:
        return 'position-bronze';
      default:
        return 'position-default';
    }
  };

  const RaceCard = ({ race, onClick }) => {
    const totalPoints = race.result
      ? race.result.norris.points + race.result.piastri.points
      : 0;

    return (
      <div className="race-card" onClick={() => onClick(race)}>
        <div className="race-card-header">
          <span className="race-round">Round {race.round}</span>
          <span className="race-status">{getStatusIcon(race.status)}</span>
        </div>
        <h3 className="race-name">{race.name}</h3>
        <div className="race-info">
          <div className="race-info-item">
            <MapPin className="info-icon" />
            <span>{race.circuit}, {race.location}</span>
          </div>
          <div className="race-info-item">
            <Calendar className="info-icon" />
            <span>{race.date}</span>
          </div>
          <div className="race-info-item">
            <Clock className="info-icon" />
            <span>Lap Record: {race.lapRecord}</span>
          </div>
          <div className="race-info-item">
            <Star className="info-icon" />
            <span>Weather: {race.weather}</span>
          </div>
        </div>
        {race.result && (
          <div className="race-results">
            <h4 className="results-title">Race Results</h4>
            <div className="driver-result">
              <span>Lando Norris:</span>
              <span className={`result-position ${getPositionColor(race.result.norris.position)}`}>
                P{race.result.norris.position} ({race.result.norris.points} pts)
              </span>
            </div>
            <div className="driver-result">
              <span>Oscar Piastri:</span>
              <span className={`result-position ${getPositionColor(race.result.piastri.position)}`}>
                P{race.result.piastri.position} ({race.result.piastri.points} pts)
              </span>
            </div>
            <div className="total-points">
              <Trophy className="info-icon" />
              <span>Total Points: {totalPoints}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="race-calendar">
      <h2 className="section-title">2025 Race Calendar</h2>
      <div className="race-list">
        {raceCalendar.map((race) => (
          <RaceCard key={race.id} race={race} onClick={setSelectedRace} />
        ))}
      </div>
      {selectedRace && (
        <div className="race-details">
          <h3 className="details-title">{selectedRace.name}</h3>
          <div className="details-content">
            <p><strong>Round:</strong> {selectedRace.round}</p>
            <p><strong>Circuit:</strong> {selectedRace.circuit}</p>
            <p><strong>Location:</strong> {selectedRace.location}</p>
            <p><strong>Date:</strong> {selectedRace.date}</p>
            <p><strong>Weather:</strong> {selectedRace.weather}</p>
            <p><strong>Lap Record:</strong> {selectedRace.lapRecord}</p>
            {selectedRace.result && (
              <>
                <h4>Race Results</h4>
                <p><strong>Lando Norris:</strong> P{selectedRace.result.norris.position} ({selectedRace.result.norris.points} points)</p>
                <p><strong>Oscar Piastri:</strong> P{selectedRace.result.piastri.position} ({selectedRace.result.piastri.points} points)</p>
                <p><strong>Total Points:</strong> {selectedRace.result.norris.points + selectedRace.result.piastri.points}</p>
              </>
            )}
            {selectedRace.status === 'upcoming' && (
              <p><strong>Status:</strong> Upcoming</p>
            )}
            <button className="close-button" onClick={() => setSelectedRace(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RaceCalendar;