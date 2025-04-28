import React, { useEffect } from 'react';

export const TeamComponet = ({ data }) => {
  useEffect(() => {
    console.log(data); 
  }, [data]); 
  return (
    <div className="flex ">
      {data.map((driver, index) => (
        <div key={index} className="flex items-center ">
            <div className='flex flex-col-reverse'>
              <img src={driver.headshot_url} alt={driver.full_name} className="" />
              <h2 className="">{driver.full_name}</h2>
            </div>
        </div>
      ))}
    </div>
  );
};
