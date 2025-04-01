import React from 'react'
import "./RaceComponent.css"
export const RaceComponent = ({meetingName, country, city, circuit, officialName, dateStart}) => {
  return (
    <div className='race-component'>
        <p>{meetingName}</p>
        <p>{country}</p>
        <p>{city}</p>
        <p>{circuit}</p>
        <p>{officialName}</p>
        <p>{dateStart}</p>
    </div>
  )
}
