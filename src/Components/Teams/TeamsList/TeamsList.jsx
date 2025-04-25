import React, { useEffect, useState } from 'react';

const TeamsList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://api.openf1.org/v1/drivers?meeting_key=latest')
      .then((res) => res.json())
      .then((data) => {
        // Extraer los equipos únicos
        const uniqueTeams = [...new Set(data.map(driver => driver.team_name))];
        setTeams(uniqueTeams);
      })
      .catch((err) => console.error('Error fetching drivers:', err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Equipos</h2>
      <ul className="list-disc list-inside">
        {teams.map((team, index) => (
          <li key={index}>{team}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsList;
