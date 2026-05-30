import Hero from './Components/hero'
import people from './assets/person.png'
import date from './assets/time.png'
import location from './assets/location.png'
import cars from './assets/car.png'

function CreateTrip(){
    return(
        <>
        <Hero>
            <div className='flex items-center'>
                <div className='bg-[#182840]/70 backdrop-blur-xl h-160 w-160 rounded-2xl'>
                    <form className='p-15 flex flex-col gap-4'>
                        <div className='flex gap-8 items-center'>
                            <img src={location} className='w-25'/>
                            <select className='h-10 flex-1 bg-white/80 rounded-xl text-center'> 
                                <option value="" selected disabled>
                                    Where will it be?
                                </option>
                                <option>Subiya</option>
                                <option>Mutla</option>
                                <option>Salmi</option>
                                <option>Nuwaiseeb</option>
                                <option>Abdaly</option>
                                <option>Wafra</option>

                            </select>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <img src={date} className='w-25 '/>
                            <input type='date' className='h-10 flex-1 bg-white/80 rounded-xl text-center appearance-none outline-0 hover: focus:ring-0 focus:outline-0' placeholder='When will it be?'/>
                        </div>
                        <div className='flex gap-8 items-center'> 
                            <img src={people} className='w-25'/>
                            <input className='h-10 flex-1 bg-white/80 rounded-xl text-center appearance-none outline-0 hover: focus:ring-0 focus:outline-0' placeholder='How many people are coming?'/>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <img src={cars} className='w-25'/>
                            <input className='h-10 flex-1 bg-white/80 rounded-xl text-center appearance-none outline-0 hover: focus:ring-0 focus:outline-0' placeholder='How many cars will there be?'/>
                        </div>
                        <button className='bg-[#F4C95D] border-0 rounded-2xl pt-3 pb-3 text-center text-black text-3xl cursor-pointer'> 
                            Create Trip!
                        </button>
                    </form>
                </div>
            </div>
        </Hero>
        </>
    )}
export default CreateTrip