import React from 'react'
import './DriverDetailContainer.css'

const DriverDetailConteiner = ({fullName, team, number, lastPosition, country, shortName, img, lastRace}) => {
  
  return (
    <div className='driver-container'>
        <div className='driver-img '>
            <img src={img} alt={fullName} className='img-detail' />
            <p className='self-center number pilot text-8xl '>{number}</p>
        </div>
        <div className='driver-data m-1'>
            <div className='div-data name'>
              {fullName}
            </div>
            <div className='div-data team'>
              <p>{team}</p>
              <p className='soft'>escudería</p>
            </div>
            <div className='div-data country'>
              <p>
              {country || "País"}
              </p>
              <p className='soft '>país origen</p>  
            </div>
            <div className='div-data acro'>
              <p>{shortName}</p>
              <p className='soft'>acrónimo</p>
            </div>
            <div className='div-data last-position '>
              <p className=''>Posición final en {lastRace} </p>
              <p className='number'> {lastPosition}°</p>
            </div>
        </div>
    </div>
  )
}

export default DriverDetailConteiner