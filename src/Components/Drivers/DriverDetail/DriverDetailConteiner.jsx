import React from 'react'
import './DriverDetailContainer.css'

const DriverDetailConteiner = ({fullName, team, number, lastPosition, country, shortName, img, lastRace}) => {
  return (
    <div className='driver-container'>
        <div className='driver-img '>
            <img src={img} alt={fullName} />
            <p className='self-center number text-8xl'>{number}</p>
        </div>
        <div className='driver-data self-end m-3'>
            <p className='name'>{fullName}</p>
            <p className='country'>{country}</p>
            <p className='team'>{team}</p>
            <p className='acro'>{shortName}</p>
            <p className='last-position'>Posición final en {lastRace}: {lastPosition}°</p>
        </div>
    </div>
  )
}

export default DriverDetailConteiner