import React from 'react'
import './WeatherComponent.css'

export const WeatherComponet = ({airTemperature, date, humidity, rainFall, trackTemperature, windSpeed, pressure, windDirection}) => {

  return (
    <div className='weather-container'>
        <h4 >Condiciones climaticas</h4>
        <span className='w-full  bg-gray-500 h-0.5 '></span>
        <div className='data-weather'>
          Temperatura 
          <div>
          {airTemperature}
          <p className='soft'> °C</p>
          </div>
        </div>

        <div className='data-weather'>
          Fecha 
          <div>
          {date}
          </div>
        </div>
        <div className='data-weather'>
          Humedad 
          <div>
          {humidity}
          <p className='soft'> %</p>
          </div>
        </div>
        <div className='data-weather'>
          Presion del aire
          <div>
          {pressure}
          <p className='soft'> mbar</p>
          </div>
        </div>
        <div className='data-weather'>
          Presipitaciones 
          <div>
          {rainFall}
          </div>
        </div>
        <div className='data-weather'>
          Temperatura de pista 
          <div>
          {trackTemperature}
          <p className='soft'> °C</p>
          </div>
        </div>
        <div className='data-weather'>
          Velocidad del viento 
          <div>
          {windSpeed}
          <p className='soft'> m/s</p>
          </div>
        </div>
        <div className='data-weather'>
          Dirección del viento 
          <div>
          {windDirection}° 

          </div>
        </div> 
    </div>
  )
}

