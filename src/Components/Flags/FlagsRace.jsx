import React, { useEffect, useState } from 'react'
import { FlagComponent } from './FlagComponet/FlagComponent'

export const FlagsRace = ({ sessionKey }) => {
  const [flags, setFlags] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!sessionKey) return;

    fetch(`https://api.openf1.org/v1/race_control?session_key=${sessionKey}&category=Flag`)
      .then(response => response.json())
      .then(data => setFlags(data))
      .catch(err => console.error("Error al traer banderas:", err));
  }, [sessionKey])

  return (
    <div className="mt-2.5 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left  flex justify-between items-center"
      >
        <span>Banderas <span className='text-gray-500 text-xs'>({flags?.length || 0})</span></span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="max-h-64  overflow-y-auto space-y-2 ">
          {flags?.map((data, index) => (
            <FlagComponent
              key={index}
              date={data.date}
              lapNumber={data.lap_number}
              flag={data.flag}
              message={data.message}
              driverNumber={data.driver_number}
              sector={data.sector}
              scope={data.scope}
            />
          ))}
        </div>
      )}
    </div>
  )
}
