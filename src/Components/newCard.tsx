import { Link } from "react-router-dom"


function NewCard(){
    return(
        <div className="border-2 border-white/70  rounded-2xl w-75 h-65 flex items-center justify-center">
            <Link to={"/newtrip"}>
            <div className="border-2 border-white h-30 w-30 rounded-[100%] flex hover:bg-[#182840]/60 cursor-pointer duration-75">
                <div className="justify-center items-center flex flex-1">
                    <h1 className="text-8xl font-thin text-white">+</h1>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default NewCard