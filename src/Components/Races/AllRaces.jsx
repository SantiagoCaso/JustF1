import { CircularProgress, Select } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { RaceComponent } from './RaceComponent/RaceComponent';
import "./AllRaces.css"
import InputSelect from '../Select/InputSelect';
import { toast } from 'react-toastify';


export const AllRaces = ({setKey, setSessionKey, setSessionName}) => {
    const [races, setRaces] = useState(null)
    const [search, setSearch] = useState("");
    const year = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(year);

    useEffect(() => {
        const fetchRaces = async () => {
            try {
                const response = await fetch(`https://api.openf1.org/v1/meetings?year=${selectedYear}`);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setRaces(data);
                console.log(data);
            } catch (error) {
                console.error('Hubo un problema al obtener las carreras:', error);
                toast.error('Ocurrió un error del servidor. Intenta más tarde.');
            }
        };
        fetchRaces();
    }, [selectedYear]);

    const searcher = (e) => {
        setSearch(e.target.value);
    };
 
    const filteredRaces = races ? races.filter((data) =>
        data.meeting_name.toLowerCase().includes(search.toLowerCase()) ||
        data.location.toLowerCase().includes(search.toLowerCase()) ||
        new Date(data.date_start).toDateString().toLowerCase().includes(search.toLowerCase())

    ) : [];

    

    
  return (
    <div className='all-races'>
        <div className='filters'>
            <InputSelect onChange={setSelectedYear}/>
            <input 
                    type="text" 
                    placeholder='Buscar fechas' 
                    value={search} 
                    onChange={searcher} 
                    className="search-input border-black border-1 rounded-md m-4 mt-0 hover:border-white p-1 bg-black"
                    />
            </div> 
        {races ? (
            filteredRaces.length > 0 ? (
                filteredRaces.map((data, index) => (
                    <div key={index} onClick={() =>{
                        setKey(data.meeting_key); 
                        }}>
                        <RaceComponent 
                            meetingName={data.meeting_name} 
                            country={data.country_name} 
                            city={data.location} 
                            circuit={data.circuit_short_name} 
                            officialName={data.meeting_official_name} 
                            dateStart={new Date(data.date_start).toDateString()} 
                            meetingKey={data.meeting_key}
                            setSessionKey={setSessionKey}
                            setSessionName={setSessionName}
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
