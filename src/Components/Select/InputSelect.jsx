import React from 'react'

const InputSelect = ({onChange}) => {
  const currentYear = new Date().getFullYear();
  const lastThreeYears = Array.from({ length: 3 }, (_, i) => currentYear - i);
  return (
    <div>
        <select 
            name="select" id="" 
            className=' border-black border-1 rounded-md m-4 max-sm:m-1 mt-0  hover:border-white p-1 bg-black '
            onChange={(e) => onChange(e.target.value)}
        >
          {lastThreeYears.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
    </div>
  )
}

export default InputSelect