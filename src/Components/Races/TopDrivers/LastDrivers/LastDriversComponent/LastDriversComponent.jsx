import React from 'react'
import "./LastDriversComponent.css"

export const LastDriversComponent = ({name, driverNumber, team, position}) => {
  return (
        <tr>
            <td>{position}</td>
            <td>{name}</td>
            <td>{team}</td>
            <td>{driverNumber}</td>
        </tr>
  )
}
