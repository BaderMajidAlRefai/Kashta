import Header from './Components/Header.tsx'
import Hero from './Components/hero.tsx'
import Home from './Home.tsx'

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>      
        <Header/>
        <Hero>
          <Home/>
        </Hero>
      </div>

    </>
  );
}

export default App