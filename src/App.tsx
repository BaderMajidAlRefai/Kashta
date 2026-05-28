import Header from './Components/Header.tsx'
import Home from './Home.tsx'

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>      
        <Header/>
        <Home/>
      </div>

    </>
  );
}

export default App