import Return from './assets/return.png'
import { useState } from 'react'
import TripManageBox from './Components/tripmanagebox.tsx'
import type { Trip } from './types'
import { useParams } from 'react-router-dom'


type TripManageProps = {
    trips: Trip[],
    setTrips: React.Dispatch<React.SetStateAction<Trip[]>>
    }

function TripManage({trips, setTrips}: TripManageProps){

    const [page, setPage] = useState(1)
    const {id} = useParams<{id: string}>()
    const trip = trips.find(trip => trip.id === id)
    if (!trip){
        alert("Trip not found")
        return null
    }
    return(
        <div className="flex flex-1 items-center justify-center">
            <div className="bg-[#182840]/90 blur-x w-3/4 h-3/4 rounded-2xl flex flex-col p-5 gap-4">
                <div>
                    <img src={Return} className='w-5'></img>
                </div>
                <div className='p-5 flex flex-col gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1 className="text-white text-5xl">{trip.location.name ?? "No Location"}</h1>
                        <h2 className="text-white text-3xl">{trip.date ?? "No date"}</h2>
                    </div>
                    <div className="flex justify-center gap-20 h-15">
                       <a onClick={() => setPage(1)}><ul className="text-white text-3xl cursor-pointer hover:text-gray-300">People</ul></a>
                       <a onClick={() => setPage(2)}><ul className="text-white text-3xl cursor-pointer hover:text-gray-300">Cars</ul></a>
                       <a onClick={() => setPage(3)}><ul className="text-white text-3xl cursor-pointer hover:text-gray-300">Inventory</ul></a>
                    </div>
                    <div className="flex flex-1">
                        <TripManageBox pageSelect = {page} trip = {trip}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripManage