import React, { useEffect, useState } from 'react'
import "./RaceComponent.css"
export const RaceComponent = ({meetingName, country, city, circuit, officialName, dateStart, meetingKey, setSessionKey, setSessionName}) => {
  const [meeting, setMeeting] = useState([])
  useEffect(() => {
  const fetchSession = async () => {
    try {
      const response = await fetch(`https://api.openf1.org/v1/sessions?meeting_key=${meetingKey}`);

      if (!response.ok) {
        if (response.status === 429) {
          console.warn("Demasiadas solicitudes a la API (429).");
        } else {
          console.error(`Error HTTP: ${response.status}`);
        }
        return;
      }

      const data = await response.json();
      setMeeting(data);

    } catch (error) {
      console.error("Error al obtener sesiones:", error.message);
    }
  };

  fetchSession();
}, [meetingKey]);

  
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
        <div className='sessions flex justify-around w-full text-gray-600'>
          {meeting?.map((data, index) => (
            <p key={index} className='hover:underline cursor-pointer' 
              onClick={() => {
                setSessionKey(data.session_key)
                setSessionName(data.session_name  + " " + meetingName)
                console.log("Session key: " + data.session_key)
                console.log("Meeting key: " + meetingKey)
                console.log("Meeting Name: " + meetingName)
                }}>
                  {data.session_name}
            </p>
          ))}
        </div>
    </div>
  )
}
