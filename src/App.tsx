import Header from './Components/Header.tsx'
import Hero from './Components/hero.tsx'
import { useState, useEffect } from 'react'
import type { Trip } from './types'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.tsx'
import CreateTrip from './CreateTrip.tsx'

function App() {
  const [trips, setTrips] = useState<Trip[]>([])
  useEffect(() => {
    const savedTrips = localStorage.getItem("trips")

    if(savedTrips){
      setTrips(JSON.parse(savedTrips))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips))
  })
  
  return (
    <>
      <div className='min-h-screen flex flex-col'>      
        <Header/>
          <Hero>
            <Routes>
              <Route path='/' element={<Home trips={trips}/>}/>
              <Route path='/newtrip' element={<CreateTrip setTrips={setTrips} trips={trips}/>}/>
            </Routes>
          </Hero>
      </div>
    </>
  );
}

export default App