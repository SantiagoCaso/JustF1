import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export const DriverDetail = () => {
    const {driverNumber} = useParams();
    // const [driver, setDriver] = useState([])
    const [finalPosition, setFinalPosition] = useState(null)

    useEffect(() => {
        fetch(`https://api.openf1.org/v1/position?meeting_key=latest&driver_number=${driverNumber}`)
        .then(response => response.json())
        .then((data) => {
            // setDriver(data)
            const lastRaceResult = data[data.length - 1];
            setFinalPosition(lastRaceResult)
        });
    }, [driverNumber])

  return (
    <div>
        {finalPosition ? (
        <div>
          <h3>Numero de piloto: {finalPosition.driver_number}</h3>
          <p>Posición final: {finalPosition.position}</p>
          
        </div>
      ) : (
        <p>Cargando información del piloto...</p>  // Mensaje mientras se cargan los datos
      )}
    </div>
  )
}
