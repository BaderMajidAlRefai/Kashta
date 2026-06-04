import date from './assets/time.png'
import location from './assets/location.png'

function CreateTrip(){
    return(
        <>
            <div className='flex items-center'>
                <div className='bg-[#182840]/70 backdrop-blur-xl w-160 rounded-2xl'>
                    <form className='p-15 flex flex-col gap-4'>
                        <div className='flex gap-8 items-center'>
                            <img src={location} className='w-25'/>
                            <select className='h-10 flex-1 bg-white/80 rounded-xl text-center'> 
                                <option value="" disabled selected >
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

                        <button className='bg-[#F4C95D] border-0 rounded-2xl p-1 text-center text-black text-2xl cursor-pointer'> 
                            Create Trip!
                        </button>
                    </form>
                </div>
            </div>
        </>
    )}
export default CreateTrip