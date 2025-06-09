import './DriverCard.css'

const DriverCard = ({name, lastName, img, driverNumber, team}) => {
  
  return (
    <div className={`card bg-neutral-700 inline-block p-2 rounded-md font-[Titillium_Web] h-auto w-[200px] hover:-translate-y-3 transition duration-300 shadow-md hover:scale-110 hover:border-red-600 border-2 border-black `}>
        <div className='font-semibold '>
            <h3 className='text-2xl pl-3 driver-name '>{name}</h3>
            <h3 className='text-3xl text-right pr-3'>{lastName}</h3>
            {img ? 
              (<img src={img} alt="" className='size-full justify-center'/>   ) 
              :
              (<img src='src/assets/piloto_silueta.png' alt="" className='size-full justify-center'/>)
            }              
        </div>
        <div>
            <p className='text-2xl text-center number'>{driverNumber} </p>
        </div>
        <div>
            <p className='text-gray-400 team-card'>{team}</p>
        </div>
    </div>
  )
}

export default DriverCard