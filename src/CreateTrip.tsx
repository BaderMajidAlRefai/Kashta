import date from './assets/time.png'
import location from './assets/location.png'
import type { Trip } from "./types"
import { tripTemplate } from './data/trip_template'
import { locations } from './data/locations'
import { useNavigate } from 'react-router-dom'
type NewCardProps = {
    trips: Trip[],
    setTrips: React.Dispatch<React.SetStateAction<Trip[]>>
    }

function findLocation(form_location:string){
    for(let location of locations){
        if (form_location === location.name){
            return location
        }
    }
}

function CreateTrip({setTrips, trips}: NewCardProps){
    const navigate = useNavigate()
    function form(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault()
        let trip = {... tripTemplate}
        const formData = new FormData(event.currentTarget)
        const tripDate = formData.get("date") as string
        const tripName = formData.get('name') as string
        let tripLocation = formData.get("location") as string
        trip.id = String(trips.length + 1)
        trip.date = tripDate;
        trip.name = tripName
        const locationObject = findLocation(tripLocation);
        if(!locationObject){return alert("Something went wrong.")}
        trip.location = locationObject
        setTrips(prevTrips => [...prevTrips, trip])
        navigate(`/trip/${trip.id}`)        
    }

    return(
        <>
            <div className='flex items-center'>
                <div className='bg-[#182840]/70 backdrop-blur-xl w-160 rounded-2xl'>
                    <form onSubmit={form} className='p-15 flex flex-col gap-4'>
                        <div className='flex flex-1'>
                            <input type="text" name='name' placeholder="Name your trip!" className="outline-none bg-white rounded-2xl p-3 h-15 flex flex-1 text-2xl"/>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <img src={location} className='w-25'/>
                            <select name='location' className='h-10 flex-1 bg-white/80 rounded-xl text-center cursor-pointer hover:bg-white/60'> 
                                <option value="" disabled selected >
                                    Where will it be?
                                </option>
                                <option value="Subiya">Subiya</option>
                                <option value="Mutla">Mutla</option>
                                <option value="Salmi">Salmi</option>
                                <option value="Nuwaiseeb">Nuwaiseeb</option>
                                <option value="Abdaly">Abdaly</option>
                                <option value="Wafra">Wafra</option>

                            </select>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <img src={date} className='w-25 '/>
                            <input name='date' type='date' className='h-10 flex-1 cursor-pointer bg-white/80 rounded-xl text-center appearance-none outline-0 hover:bg-white/60 focus:ring-0 focus:outline-0' placeholder='When will it be?'/>
                        </div>

                        <button type='submit' className='bg-[#F4C95D] border-0 rounded-2xl p-1 text-center text-black text-2xl cursor-pointer hover:bg-[#cba134] duration-75'> 
                            Create Trip!
                        </button>
                    </form>
                </div>
            </div>
        </>
    )}
export default CreateTrip