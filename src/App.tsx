import Header from './Components/Header.tsx'
import Hero from './Components/hero.tsx'
// import CreateTrip from './CreateTrip.tsx'
import TripManage from './tripmanage.tsx'
// import Home from './Home.tsx'

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>      
        <Header/>
          <Hero>
            <TripManage/>
          </Hero>
      </div>

    </>
  );
}

export default App