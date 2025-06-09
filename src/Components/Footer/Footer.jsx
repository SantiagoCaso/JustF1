// import React from 'react'
import './Footer.css'

// export const Footer = () => {
//   return (
//     <footer className='flex w-full '>
//         <div className='soft text-end w-full '>
//           JustF1 es un proyecto desarrollado por <a href="https://casosantiago.vercel.app" className='link-footer'>Santiago Caso</a> gracias al consumo de la 
//           API gratuita y de código abierto aportada por <a href="https://openf1.org" className='link-footer'>OpenF1</a>
//         </div>
//     </footer>
//   )
// }

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <p className="text-sm soft">
            &copy; JustF1{new Date().getFullYear()}
            <a href="https://casosantiago.vercel.app" className='link-footer'> Santiago Caso</a>
            . Todos los derechos reservados.
            </p>
        </div>
        <div className='soft '>
          JustF1 es un proyecto desarrollado por <a href="https://casosantiago.vercel.app" className='link-footer'>Santiago Caso</a> gracias al consumo de la 
          API gratuita y de código abierto aportada por <a href="https://openf1.org" className='link-footer'>OpenF1</a>
         </div>
      </div>
    </footer>
  );
}

export default Footer;
