import React from 'react'
import { AllRaces } from '../../Components/Races/AllRaces'
import "./Meetings.css"
import LastDriversTable from '../../Components/Races/TopDrivers/LastDrivers/LastDriversTable'

export const Meetings = () => {
  return (
      <div className='container'>
          <section className='left'>
              <AllRaces/>
          </section>
          <section className='right'>
              <p>Pilotos top 3 || posiciones de todos los pilotos</p>
              <LastDriversTable/>
          </section>
      </div>
  )
}
