import React, { useEffect, useState } from 'react';
import { LastDriversComponent } from './LastDriversComponent/LastDriversComponent';
import './LastDriversTable.css';
import { CircularProgress } from '@mui/material';

const LastDriversTable = ({ meetingKey, sessionKey }) => {
  const [finalPositions, setFinalPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
      // Fetch posiciones
      const resPos = await fetch(`https://api.openf1.org/v1/position?meeting_key=${meetingKey}&session_key=${sessionKey}`);
      const posiciones = await resPos.json();

      // Agrupar por piloto
      const posicionesPorDriver = new Map();
      posiciones.forEach(p => {
        const id = p.driver_number;
        if (!posicionesPorDriver.has(id)) {
          posicionesPorDriver.set(id, []);
        }
        posicionesPorDriver.get(id).push(p);
      });

      // Obtener última posición por piloto
      const posicionesFinales = [];
      posicionesPorDriver.forEach((posList, driverId) => {
        posList.sort((a, b) => new Date(a.date) - new Date(b.date));
        const ultima = posList[posList.length - 1];
        posicionesFinales.push({
          driver_number: driverId,
          position: ultima.position,
          date: ultima.date
        });
      });

      // Fetch drivers
      const resDrivers = await fetch(`https://api.openf1.org/v1/drivers?session_key=${sessionKey}`);
      const drivers = await resDrivers.json();

      // Combinar datos
      const dataFinal = posicionesFinales.map(pos => {
        const driverInfo = drivers.find(d => d.driver_number === parseInt(pos.driver_number));
        return {
          name: driverInfo?.full_name || 'Desconocido',
          driverNumber: pos.driver_number,
          team: driverInfo?.team_name ||  ' - ',
          position: pos.position
        };
      });

      // Ordenar por posición
      dataFinal.sort((a, b) => a.position - b.position);

      setFinalPositions(dataFinal);
    }catch (error){
      console.error("Error fetching data:", error);
    }finally{
      setLoading(false);
    }
    };

    fetchData();
  }, [meetingKey, sessionKey]);

  return (
    <>
      {loading? (
        <div className='flex justify-center items-center m-10 p-10'>
          <CircularProgress />  
        </div>
      ) : (
        <table className="table-drivers-positions">
        <thead>
          <tr className="fila">
            <th className="celda">Pt</th>
            <th className="celda">Nombre</th>
            <th className="celda">Escuderia</th>
            <th className="celda">N°</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {finalPositions.map((driver, index) => (
            <LastDriversComponent
              key={index}
              name={driver.name}
              driverNumber={driver.driverNumber}
              team={driver.team}
              position={driver.position}
            />
          ))}
        </tbody>
      </table>
      ) }
    </>
  );
};

export default LastDriversTable;
