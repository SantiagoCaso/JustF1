import React, { useEffect, useState } from 'react'
import DriverCard from './DriverCard';

export const Drivers = () => {
    const [drivers, setDrivers] = useState([])
    const year = new Date().getFullYear();
    useEffect(() => {
        fetch('https://api.openf1.org/v1/drivers?session_key=latest')
        .then(response => response.json())
        .then((data) => setDrivers(data));
    }, [])
    
    
  return (
    <>
    <h3>Pilotos Temporada {year}</h3>
    <ul className='flex flex-wrap gap-3.5 justify-center'>
        {drivers.map((data, index) => (
            <div key={index} className=''>
                <DriverCard name={data.first_name} lastName={data.last_name} img={data.headshot_url} driverNumber={data.driver_number} team={data.team_name}/>
            </div>
        ))}
    </ul>
    </>
  )
}
