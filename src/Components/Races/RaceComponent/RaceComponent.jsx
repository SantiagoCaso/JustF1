import React from 'react'
import "./RaceComponent.css"
export const RaceComponent = ({meetingName, country, city, circuit, officialName, dateStart}) => {
  return (
    <div className='race-component'>
        <div className='data-race meeting-name text-3xl font-semibold'>
          <p></p>
          <p>{meetingName}</p>
        </div>
        <div className='data-race location'>
          <p></p>
          <p>{country}, {city}</p>
        </div>
        <div className='data-race'>
          <p></p>
        </div>
        <div className='hidden '>
          <p>{circuit}</p>
          <p className='soft  ml-1'>circuito</p>
        </div>
        <div className='data-race date '>
          <p></p>
          <p>{dateStart}</p>
        </div>
        <div className='data-race oficial-name soft'>
          <p></p>
          <p>{officialName}</p>
        </div>
    </div>
  )
}
