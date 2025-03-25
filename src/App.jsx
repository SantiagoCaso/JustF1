import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import Navbar from './Components/NavBar/NavBar'

function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
