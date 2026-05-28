import hero from './assets/hero.jpg'
import TripCard from './Components/tripCard'

function Home(){
    return(
        <div className="flex-1 bg-cover bg-center relative" style={{backgroundImage: `url(${hero})`}}>

            <div className=' bg-blue-950/60 absolute inset-0 flex justify-center'>
                <div className='w-[80%] flex flex-col mt-45 gap-10'>
                    <div>
                        <h1 className='text-white text-6xl'>السَّلامُ عَلَيْكُمْ</h1>
                        <h2 className='text-white text-5xl'>Any new Adventures?</h2>
                    </div>
                    <div className=' flex-1 bg-[#182840]/80 rounded-tr-2xl rounded-tl-2xl'>
                        <div className='p-10 grid grid-cols-4 gap-3'>
                            <TripCard />
                            <TripCard />
                            <TripCard />
                            <TripCard />
                            <TripCard />
                            <TripCard />
                            <TripCard />
                            <TripCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home