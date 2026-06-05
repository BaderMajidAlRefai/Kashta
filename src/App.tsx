import Header from './Components/Header.tsx'
import Hero from './Components/hero.tsx'
import TripManage from './tripmanage.tsx'

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