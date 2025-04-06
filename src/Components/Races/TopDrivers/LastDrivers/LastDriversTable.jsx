import React, { useEffect, useState } from 'react'
import { LastDriversComponent } from './LastDriversComponent/LastDriversComponent';
import "./LastDriversTable.css"
const LastDriversTable = ({meetingKey}) => {
    const [drivers, setDrivers] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => {
            setDrivers(data)
            console.log(data)        
    });
    }, [])
    
    

  return (
    <table className="table-drivers-positions">
        <thead>
        <tr className="fila">
          <th className="celda">Pt</th>
          <th className="celda">Nombre</th>
          <th className="celda">Escuderia</th>
          <th className="celda">N°</th>
        </tr>
      </thead>
        <tbody className='table-body'>
        {drivers?.map((data, index) => (
            <LastDriversComponent key={index} name={data.name} driverNumber={data.id} team={data.website} position={data.id}/>
        ))}
        </tbody>
    </table>
  )
}

export default LastDriversTable