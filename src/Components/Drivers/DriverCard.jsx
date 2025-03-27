import React from 'react'
import './DriverCard.css'
const DriverCard = ({name, lastName, img, driverNumber, team,}) => {
  return (
    <div className='card bg-neutral-700 inline-block p-2 rounded-md font-[Titillium_Web] h-auto w-[200px] hover:-translate-y-3 transition duration-300 shadow-md hover:scale-110'>
        <div className=''>
            <h4 className='text-2xl pl-3'>{name}</h4>
            <h3 className='text-3xl text-right pr-3'>{lastName}</h3>
            <img src={img} alt="" className='size-full justify-center'/>            
        </div>
        <div>
            <p className='text-2xl text-center number'>{driverNumber} </p>
        </div>
        <div>
            <p className=''>{team}</p>
        </div>
    </div>
  )
}

export default DriverCard