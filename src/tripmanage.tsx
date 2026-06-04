import Return from './assets/return.png'

function TripManage(){
    return(
        <div className="flex flex-1 items-center justify-center">
            <div className="bg-[#182840]/90 blur-x w-3/4 h-3/4 rounded-2xl flex flex-col p-5 gap-4">
                <div>
                    <img src={Return} className='w-5'></img>
                </div>
                <div className='p-5 flex flex-col gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1 className="text-white text-5xl">Location of the trip</h1>
                        <h2 className="text-white text-3xl">Date of the trip</h2>
                    </div>
                    <div className="flex justify-center gap-20 h-15">
                        <ul className="text-white text-3xl">People</ul>
                        <ul className="text-white text-3xl">Cars</ul>
                        <ul className="text-white text-3xl">Inventory</ul>
                    </div>
                    <div className="flex flex-1">
                        <table>
                            <tr>
                                <th></th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripManage