import TripCard from './Components/tripCard'
import NewCard from './Components/newCard'

function Home(){
    return(
        <div className='w-[80%] flex flex-col mt-80 gap-10'>
            <div>
                <h1 className='text-white text-6xl'>السَّلامُ عَلَيْكُمْ</h1>
                <h2 className='text-white text-5xl'>Any new Adventures?</h2>
            </div>
            <div className=' flex-1 bg-[#182840]/80 rounded-tr-2xl rounded-tl-2xl'>
                <div className='p-10 grid grid-cols-4 gap-3'>
                    <NewCard />
                    <TripCard />
                </div>
            </div>
        </div>
    )
}

export default Home