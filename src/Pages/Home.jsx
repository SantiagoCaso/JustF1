import React from 'react'
import { AllRaces } from '../Components/Races/AllRaces'
import { Top3Drivers } from '../Components/Races/TopDrivers/Top3Drivers/Top3Drivers'
import LastDriversTable from '../Components/Races/TopDrivers/LastDrivers/LastDriversTable'

export const Home = () => {
  
  return (
    <>
      <div>Home</div>
      <div className='justify-center flex col-auto'>
        <div className=' w-1/2'>
          <h3>Posiciones finales en la ultima carrera</h3>
          <LastDriversTable meetingKey={'latest'} sessionKey={'latest'}/>
        </div>
        <div className='w-1/2 justify-center align-middle flex '>
         <p>poner algo acá </p>
         {/* <Top3Drivers idMeeting={'latest'}/> */}
        </div>
      </div>
    </>
  )
}
