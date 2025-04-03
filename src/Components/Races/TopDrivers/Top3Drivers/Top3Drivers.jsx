
import React, { useEffect, useState } from 'react'

export const Top3Drivers = ({idMeeting}) => {
  const [drivers, setDrivers] = useState([])
  const [finalPosition, setFinalPosition] = useState(null)

  useEffect(() => {
    fetch(`https://api.openf1.org/v1/position?meeting_key=${idMeeting}`)
    .then(response => response.json())
    .then((data) => {
      setDrivers(data)
      const lastRaceResult = data[data.length - 1];
      setFinalPosition(lastRaceResult)
      console.log(data)
    });
  }, [idMeeting])
  
  return (
    <div>
      <div>
          {drivers?.map((data, index)=> (
            <div key={index}>{data}</div>
          ))}
      </div>
      <p>{finalPosition}</p>
    </div>
  )
}
