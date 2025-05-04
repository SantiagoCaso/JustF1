import React from 'react'
import "./LastDriversComponent.css"
import { useNavigate } from 'react-router-dom';

export const LastDriversComponent = ({name, driverNumber, team, position}) => {
  const navigate = useNavigate();

  const handleClick = (driverNumber) => {
    navigate(`/driver-profile/${driverNumber}`);
  }
  return (
        <tr onClick={() => handleClick(driverNumber)}>
            <td>{position}</td>
            <td >{name}</td>
            <td>{team}</td>
            <td>{driverNumber}</td>
        </tr>
  )
}
