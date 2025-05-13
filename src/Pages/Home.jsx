import React from 'react'
import { AllRaces } from '../Components/Races/AllRaces'
import { Top3Drivers } from '../Components/Races/TopDrivers/Top3Drivers/Top3Drivers'
import LastDriversTable from '../Components/Races/TopDrivers/LastDrivers/LastDriversTable'
import './Home.css'
import TeamsList from '../Components/Teams/TeamsList/TeamsList'

export const Home = () => {
  
  return (
    <>
      <div className='home '>
        <div className='w-full m-1 '>
          <h3>Posiciones finales en la ultima carrera</h3>
          <LastDriversTable meetingKey={'latest'} sessionKey={'latest'}/>
        </div>
        <div className='w-1/2 max-sm:w-full align-middle flex '>
         <TeamsList/>
        </div>
      </div>
    </>
  )
}
