import React, { useState } from 'react'
import { AllRaces } from '../../Components/Races/AllRaces'
import "./Meetings.css"
import LastDriversTable from '../../Components/Races/TopDrivers/LastDrivers/LastDriversTable'
import Weather from '../../Components/Races/WeatherRace/Weather'
import { FlagsRace } from '../../Components/Flags/FlagsRace'

export const Meetings = () => {
    const [meetingKey, setKey] = useState(null)
    const [sessionKey, setSessionKey] = useState(null)
    const [sessionName, setSessionName] = useState(null)
  return (
      <div className='container'>
          <section className={`${!sessionKey ? 'left' : 'hidden md:block' }`}>
              <AllRaces setKey={setKey} setSessionKey={setSessionKey} setSessionName={setSessionName}/>
          </section>
          <section className={`w-full  ${!sessionKey ? 'hidden md:block' : 'right m-1'}`}>
            {sessionKey? (<p>Tabla de posiciones en {sessionName} </p>) : 
            (<p className='soft '>seleccione una fecha para poder ver los resultados</p>)  
            }
              <LastDriversTable meetingKey={meetingKey} sessionKey={sessionKey}/>
              <div className='flex w-full gap-1'>
                <Weather sessionKey={sessionKey}/>
                <FlagsRace sessionKey={sessionKey}/>
              </div>
          </section>
      </div>
  )
}
