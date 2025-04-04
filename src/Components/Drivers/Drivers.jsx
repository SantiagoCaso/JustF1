import React, { useEffect, useState } from 'react'
import DriverCard from './DriverCard';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';

export const Drivers = () => {
    const navigate = useNavigate();
    const [drivers, setDrivers] = useState(null);  
    const [search, setSearch] = useState(""); 
    const year = new Date().getFullYear();

    
    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const response = await fetch(`https://api.openf1.org/v1/drivers?session_key=latest`);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setDrivers(data)
            } catch (error) {
                console.error('Hubo un problema al obtener los pilotos:', error);
                toast.error('Ocurrió un error del servidor. Intenta más tarde.');
            }
        }
       fetchDrivers();
    }, []);

    
    const handleClick = (driverNumber) => {
        navigate(`/driver-profile/${driverNumber}`);
    };

    //  manejar cambios en el la búsqueda
    const searcher = (e) => {
        setSearch(e.target.value);
    };

    // filtrar los pilotos 
    const filteredDrivers = drivers ? drivers.filter((data) =>
        data.full_name.toLowerCase().includes(search.toLowerCase()) ||
        data.team_name.toLowerCase().includes(search.toLowerCase()) ||  
        data.driver_number.toString().includes(search)
    ) : [];

    return (
        <>
            <h3 className='title'>Pilotos Temporada {year}</h3>
            <div className='flex w-full justify-between'>
            <input 
                type="text" 
                placeholder='Buscar piloto' 
                value={search} 
                onChange={searcher} 
                className="search-input border-black border-1 rounded-md m-4 mt-0 hover:border-white p-1"
            />
            <p className='text-gray-600 text-xs self-center pr-1 text-end'>Selecione un piloto para más información</p>
            </div>
            <div className='flex flex-wrap gap-3.5 justify-center'>
                {drivers ? ( 
                    filteredDrivers.length > 0 ? (
                        filteredDrivers.map((data, index) => (
                            <div key={index} onClick={() => handleClick(data.driver_number)}>
                                <DriverCard 
                                    name={data.first_name} 
                                    lastName={data.last_name} 
                                    img={data.headshot_url} 
                                    driverNumber={data.driver_number} 
                                    team={data.team_name} 
                                />
                            </div>
                        ))
                    ) : (
                        <p>No se encontraron pilotos para esta búsqueda.</p>
                    )
                ) : (
                    <div className='flex justify-center items-center m-10 p-10'>
                        <CircularProgress />  
                    </div>
                )}
            </div>
        </>
    );
}
