import React, { useState } from 'react'
import { AllRaces } from '../../Components/Races/AllRaces'
import "./Meetings.css"
import LastDriversTable from '../../Components/Races/TopDrivers/LastDrivers/LastDriversTable'

export const Meetings = () => {
    const [meetingKey, setKey] = useState(null)
    const [sessionKey, setSessionKey] = useState(null)
  return (
      <div className='container'>
          <section className='left'>
              <AllRaces setKey={setKey} setSessionKey={setSessionKey}/>
          </section>
          <section className='right'>
              <p>Pilotos top 3 || posiciones de todos los pilotos</p>
              <LastDriversTable meetingKey={meetingKey} sessionKey={sessionKey}/>
          </section>
      </div>
  )
}
