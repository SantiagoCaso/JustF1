import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { WeatherComponet } from './WeatherComponet';

const Weather = ({sessionKey}) => {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        fetch(`https://api.openf1.org/v1/weather?session_key=${sessionKey}`)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
              })
    }, [sessionKey])

    const lastWeather = weather?.[weather.length - 1];

    return (
    <div>
      {lastWeather ? (
          <div>
            <WeatherComponet 
              airTemperature={lastWeather.air_temperature} 
              date={new Date(lastWeather.date).toDateString()} 
              humidity={lastWeather.humidity} 
              rainFall={lastWeather.rain_fall} 
              trackTemperature={lastWeather.track_temperature} 
              windSpeed={lastWeather.wind_speed}
              pressure={lastWeather.pressure}
              windDirection={lastWeather.wind_direction}
              />
              
          </div>
        )
       : (
        <p>Datos del clima de la carrera</p>
      )}
    </div>
  )
}

export default Weather