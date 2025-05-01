import React, { useEffect, useState } from 'react';

export const TeamRadio = ({ driverNumber, driverName}) => {
  const [lastAudio, setLastAudio] = useState(null);

  useEffect(() => {
    console.log(driverNumber.driver_number)
    fetch(`https://api.openf1.org/v1/team_radio?session_key=latest&driver_number=${driverNumber}`)
      .then(response => response.json())
      .then((data) => {
        if (data.length > 0) {
          const last = data[data.length - 1];
          setLastAudio(last);
        }
      })
      .catch((error) => console.error('Error fetching audio:', error));
  }, [driverNumber]); 

  return (
    <div>
      {lastAudio ? (
        <>
            <p>audio {driverName}</p>
            <audio src={lastAudio.recording_url} controls />
        </>
      ) : (
        <p>No audio available</p>
      )}
    </div>
  );
};
