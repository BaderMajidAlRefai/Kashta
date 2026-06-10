import { Link } from 'react-router-dom'
import carPng from '../assets/car.png'
import locationPng from '../assets/location.png'
import personPng from '../assets/person.png'
import timePng from '../assets/time.png'
import type { Trip } from '../types'


type tripCardProps = {
    trip: Trip
}

function TripCard({trip}: tripCardProps){
    return(
        <div className="bg-[#1B2431]/80 border-2 border-white/70  rounded-2xl w-75 h-65 select-none">
            <div className="m-3 flex flex-col gap-3">
                <div className="mb-1">
                    <h1 className="text-white text-2xl">{trip.name}</h1>
                </div>
                <div className='flex gap-3'>
                    <img src={timePng} className='w-7'></img>
                    <h2 className="text-white">{trip.date}</h2>
                </div>
                <div className='flex gap-3'>
                    <img src={locationPng} className='w-7'></img>
                    <h2 className="text-white">{trip.location.name}</h2>
                </div>
                <div className='flex gap-3'>
                    <img src={personPng} className='w-7'></img>
                    <h2 className="text-white">{trip.participants.length} Attendents</h2>
                </div>
                <div className='flex gap-3'>
                    <img src={carPng} className='w-7'></img>
                    <h2 className="text-white">{trip.cars.length} cars</h2>
                </div>
                <Link to={`/trip/${trip.id}`}><button className="text-black text-center bg-[#F4C95D] rounded-2xl text-xl">Continue Planning!</button></Link>
            </div>
        </div>
    )
}

export default TripCard