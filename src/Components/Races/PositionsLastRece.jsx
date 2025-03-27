import React, { useEffect, useState } from "react";

const PositionsLastRece = () => {
  const [race, setRace] = useState([]); 

  useEffect(() => {
    fetch("https://api.openf1.org/v1/position?meeting_key=latest&session_key=latest")
      .then(response => response.json())
      .then(data => {
        console.log("Respuesta de la API:", data);
        setRace(data.filter(driver => driver.position <= 3)); 
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div>
      <h2>Top 3 Pilotos</h2>
      <ul>
        {race.length > 0 ? (
          race.map((data, index) => (
            <li key={index}>
              Posición: {data.position} - Piloto: {data.driver_number}
            </li>
          ))
        ) : (
          <li>Cargando datos...</li> 
        )}
      </ul>
    </div>
  );
};

export default PositionsLastRece;
