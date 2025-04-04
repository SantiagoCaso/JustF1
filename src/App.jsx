import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import Navbar from './Components/NavBar/NavBar'
import { Drivers } from './Components/Drivers/Drivers'
import { DriverDetail } from './Components/Drivers/DriverDetail/DriverDetail'
import { AllRaces } from './Components/Races/AllRaces'
import { Meetings } from './Pages/Meeting/Meetings'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/driver-profile/:driverNumber" element={<DriverDetail/>} />
          <Route path="/meetings" element={<Meetings/>} />
        </Routes>
          <ToastContainer position="top-right" autoClose={4000} />
      </BrowserRouter>
  )
}

export default App
