import React from 'react'
import './FlagComponent.css'

export const FlagComponent = ({date, lapNumber, flag, message, driverNumber, scope, sector}) => {
    const timeString = new Date(date).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC' 
      });
    
     const getFlagColorClass = (flag) => {
        switch (flag) {
          case 'GREEN':
            return 'bg-green-800';
          case 'YELLOW':
            return 'bg-yellow-500';
          case 'DOUBLE YELLOW':
            return 'bg-yellow-600';
          case 'RED':
            return 'bg-red-700';
          case 'WHITE':
            return 'bg-white text-black';
          case 'BLUE':
            return 'bg-blue-600';
          case 'BLACK AND WHITE':
            return 'bg-black';
          default:
            return 'bg-gray-500';
        }
      };

  return (
    <div className='flag-component-container '>
        <p>Momento {timeString}</p>
        {lapNumber? (<p>Numero de vuelta {lapNumber}</p>) : (<></>)}
        <p className={`${getFlagColorClass(flag)}`}>
            Bandera {flag}
        </p>
        <p className=' pr-0.5'>Mensaje {message}</p>
        {driverNumber? (<p>Numero de piloto {driverNumber}</p>) : (<p></p>)}
        {sector? (<p >Sector {sector}</p>) : (<p></p>)}
        <p className='soft-flag'>{scope}</p> 
    </div>
  )
}

