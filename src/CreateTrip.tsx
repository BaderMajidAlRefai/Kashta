import hero from './assets/hero.jpg'
function CreateTrip(){
    return(
        <div className="flex-1 bg-cover bg-center relative" style={{backgroundImage: `url(${hero})`}}>
            <div className=' bg-blue-950/60 absolute inset-0 flex justify-center'>

            </div>
        </div>
    )}
export default CreateTrip