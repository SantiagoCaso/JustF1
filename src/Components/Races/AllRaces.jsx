import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { RaceComponent } from './RaceComponent/RaceComponent';

export const AllRaces = () => {
    const [races, setRaces] = useState(null)
    const year = new Date().getFullYear();
    useEffect(() => {
        fetch(`https://api.openf1.org/v1/meetings?year=${year}`)
            .then(response => response.json())
            .then((data) => {
                setRaces(data)
                console.log(data)
            });
    
    }, [])
    
  return (
    <div>
        {races? (
            races?.map((data, index) => (
                <div key={index}>
                    <RaceComponent 
                        meetingName={data.meeting_name} 
                        country={data.country_name} 
                        city={data.location} 
                        circuit={data.circuit_short_name} 
                        officialName={data.meeting_official_name} 
                        dateStart={new Date(data.date_start).toDateString()} />
                </div>
            ))
        ) 
        : 
        (
        <div className='flex justify-center items-center m-10 p-10'>
            <CircularProgress />  
        </div>)

        }
        
    </div>
  )
}
