import React from 'react'

export const WeatherComponet = ({airTemperature, date, humidity, rainFall, trackTemperature, windSpeed, pressure, windDirection}) => {

  return (
    <div>
        <h4>Condiciones climaticas de la carrera</h4>
        <p>Temperatura {airTemperature}°C</p>
        <p>Fecha {date}</p>
        <p>Humedad {humidity}%</p>
        <p>Presion del aire{pressure}mbar</p>
        <p>Presipitaciones {rainFall}</p>
        <p>Temperatura de pista {trackTemperature}°C</p>
        <p>Velocidad del viento {windSpeed}m/s</p>
        <p>Dirección del viento {windDirection}° (from 0° to 359°)</p>

    </div>
  )
}

