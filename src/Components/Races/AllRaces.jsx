import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { RaceComponent } from './RaceComponent/RaceComponent';
import "./AllRaces.css"

export const AllRaces = () => {
    const [races, setRaces] = useState(null)
    const [search, setSearch] = useState("");
    const year = new Date().getFullYear();
    useEffect(() => {
        fetch(`https://api.openf1.org/v1/meetings?year=${year}`)
            .then(response => response.json())
            .then((data) => {
                setRaces(data)
                console.log(data)
            });
    
    }, [])

    const searcher = (e) => {
        setSearch(e.target.value);
    };

    // filtrar los pilotos 
    const filteredRaces = races ? races.filter((data) =>
        data.meeting_name.toLowerCase().includes(search.toLowerCase()) ||
        data.location.toLowerCase().includes(search.toLowerCase()) ||
        new Date(data.date_start).toDateString().toLowerCase().includes(search.toLowerCase())

    ) : [];
    
  return (
    <div className='all-races'>
        <input 
                type="text" 
                placeholder='Buscar fechas' 
                value={search} 
                onChange={searcher} 
                className="search-input border-black border-1 rounded-md m-4 mt-0 hover:border-white p-1"
        />
        {races ? (
            filteredRaces.length > 0 ? (
                filteredRaces.map((data, index) => (
                    <div key={index}>
                        <RaceComponent 
                            meetingName={data.meeting_name} 
                            country={data.country_name} 
                            city={data.location} 
                            circuit={data.circuit_short_name} 
                            officialName={data.meeting_official_name} 
                            dateStart={new Date(data.date_start).toDateString()} 
                        />
                    </div>
                ))
            ) 
            : 
            (
                <p>No se encuentra nada</p>
            )

        ) 
        : 
        (
            <div className='flex justify-center items-center m-10 p-10'>
                <CircularProgress />  
            </div>
        )}

    </div>
  )
}
