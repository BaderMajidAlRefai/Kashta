import type { Person } from "../types"
import personImg from '../assets/person.png'
import { useState } from "react"


type PeopleBoxProps = {
    people: Person[]
}

function PeopleBox({people}: PeopleBoxProps ){
    return(
        <div className="flex flex-1 flex-col gap-3">
            <input type="text" placeholder="Who else is coming??" className="outline-none bg-white rounded-2xl p-3 h-15 text-2xl"/>
            {people.map((person) => (
                <div className="border-2 p-3 border-white rounded-2xl flex h-15 gap-4">
                <img src={personImg}></img>
                <h1 key={person.name} className="text-white text-3xl"> {person.name} </h1>
                </div>
            ))}
        </div>
    )
}

export default PeopleBox