import Header from './Components/Header.tsx'
import Hero from './Components/hero.tsx'
import TripManage from './tripmanage.tsx'
import { useState, useEffect } from 'react'
import type { Trip } from './types'
import {dummyTrip} from './dummytrip.ts'

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
            <TripManage trip = {dummyTrip}/>
          </Hero>
      </div>

    </>
  );
}

export default App