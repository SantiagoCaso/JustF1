import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='flex w-full '>
        <div className='soft text-end w-full '>
          JustF1 es un proyecto desarrollado por <a href="https://casosantiago.vercel.app" className='link-footer'>Santiago Caso</a> gracias al consumo de la 
          API gratuita y de código abierto aportada por <a href="https://openf1.org" className='link-footer'>OpenF1</a>
        </div>
    </footer>
  )
}
