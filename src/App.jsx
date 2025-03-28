import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import Navbar from './Components/NavBar/NavBar'
import { Drivers } from './Components/Drivers/Drivers'
import { DriverDetail } from './Components/Drivers/DriverDetail'

function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/driver-profile/:driverNumber" element={<DriverDetail/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
