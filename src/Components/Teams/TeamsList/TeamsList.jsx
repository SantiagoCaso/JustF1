import React, { useEffect, useState } from 'react';
import { TeamComponet } from '../TeamComponet/TeamComponet';

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [hoveredTeam, setHoveredTeam] = useState(null); // equipo en hover

  useEffect(() => {
    fetch('https://api.openf1.org/v1/drivers?meeting_key=latest&session_key=latest')
      .then((res) => res.json())
      .then((data) => {
        const uniqueTeams = [...new Set(data.map(driver => driver.team_name))];
        setTeams(uniqueTeams);
        setDrivers(data);
      })
      .catch((err) => console.error('Error fetching drivers:', err));
  }, []);


  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Equipos</h2>
      <ul className="list-disc list-inside">
        {teams.map((team, index) => {
          const driversForTeam = drivers.filter(driver => driver.team_name === team);
          const isExpanded = hoveredTeam === team; 

          return (
            <div
              key={index}
              className="mb-4"
              onMouseEnter={() => setHoveredTeam(team)}
              onMouseLeave={() => setHoveredTeam(null)}
            >
              <div
                className="font-semibold cursor-pointer hover:underline"
              >
                {team}
              </div>

              <div
                className={`transition-all duration-700 overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}
              >
                {isExpanded && (
                  <TeamComponet data={driversForTeam} />
                )}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamsList;
