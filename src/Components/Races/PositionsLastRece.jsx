import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const PositionsLastRece = () => {
  const [race, setRace] = useState([]); 

  useEffect(() => {
    fetch("https://api.openf1.org/v1/position?meeting_key=latest&session_key=latest")
      .then(response => response.json())
      .then(data => {
        console.log("Respuesta de la API:", data); // devuelve 80mil resultados, solo necesitamos el podio de la ultima carrera 
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
          <div className='flex justify-center items-center m-10 p-10'>
            <CircularProgress />  
          </div>
        )}
      </ul>
    </div>
  );
};

export default PositionsLastRece;
