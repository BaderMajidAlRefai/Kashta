import carPng from '../assets/car.png'
import locationPng from '../assets/location.png'
import personPng from '../assets/person.png'
import timePng from '../assets/time.png'


function TripCard(){
    return(
        <div className="bg-[#111C2D] border border-white  rounded-2xl w-75 h-65">
            <div className="m-3 flex flex-col gap-3">
                <div className="mb-1">
                    <h1 className="text-white text-2xl">Boys Trip</h1>
                </div>
                <div className='flex gap-3'>
                    <img src={timePng} className='w-7'></img>
                    <h2 className="text-white">June the 16th 2026</h2>
                </div>
                <div className='flex gap-3'>
                    <img src={locationPng} className='w-7'></img>
                    <h2 className="text-white">Subiya</h2>
                </div>
                <div className='flex gap-3'>
                    <img src={personPng} className='w-7'></img>
                    <h2 className="text-white">6 Attendents</h2>
                </div>
                <div className='flex gap-3'>
                    <img src={carPng} className='w-7'></img>
                    <h2 className="text-white">2 Cars</h2>
                </div>
                <button className="text-black text-center bg-[#F4C95D] rounded-2xl text-xl">Continue Planning!</button>
            </div>
        </div>
    )
}

export default TripCard