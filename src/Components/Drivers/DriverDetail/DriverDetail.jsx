import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import DriverDetailConteiner from './DriverDetailConteiner';
import './DriverDetail.css'
import { CircularProgress } from '@mui/material';

export const DriverDetail = () => {
    const {driverNumber} = useParams();
    const [driver, setDriver] = useState([])
    const [finalPosition, setFinalPosition] = useState(null)
    const [meeting, setMeeting] = useState(null);


    useEffect(() => {
        fetch(`https://api.openf1.org/v1/position?meeting_key=latest&driver_number=${driverNumber}`)
        .then(response => response.json())
        .then((data) => {
            // setDriver(data)
            const lastRaceResult = data[data.length - 1];
            setFinalPosition(lastRaceResult)
        });
        fetch(`https://api.openf1.org/v1/drivers?session_key=latest&driver_number=${driverNumber}`)
        .then(response => response.json())
        .then((data2) => setDriver(data2));
        fetch('https://api.openf1.org/v1/meetings?meeting_key=latest')
        .then(response => response.json())
        .then((data3) => {setMeeting(data3[data3.length - 1])});
        
    }, [driverNumber])

  return (
    <div className='container'>
        {finalPosition ? (
        <div>
          {driver?.map((data2, data3, index) => (
            <div key={index}  className='driver-map-container'>
              <DriverDetailConteiner 
              img={data2.headshot_url}
              fullName={data2.full_name} 
              number={data2.driver_number} 
              country={data2.country_code} 
              team={data2.team_name} 
              shortName={data2.name_acronym}
              lastPosition={finalPosition.position}
              lastRace={meeting?.meeting_name}
              />              
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center  h-screen w-screen'>
          <CircularProgress />  
        </div>
      )}
    </div>
  )
}
