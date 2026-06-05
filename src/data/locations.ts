///For this project I'm kinda just going with my own experience camping in Kuwait. 
// Remoteness:
// 1 = Near civilization
// 5 = Extremely isolated

// Sink Risk:
// 1 = Hard sand.
// 5 = Very large patches of deep soft sand. 

// Weather:
// 1 = Relatively warm
// 5 = Extremely cold/windy at night

import type { Location } from "../types";

const Mutla: Location = {
    name: "Mutla",
    remoteness: 2,
    sinkRisk: 3,
    weather: 3,
}

const Subiya: Location = {
    name: "Subiya",
    remoteness: 3,
    sinkRisk: 3, 
    weather: 4
}

// I've never been here before so I'm just going off what I've heard.
const Salmi: Location = {
    name: "Salmi",
    remoteness: 5,
    sinkRisk: 5,
    weather: 5
}

const Nuwaiseeb: Location = {
    name: "Nuwaiseeb",
    remoteness: 3,
    sinkRisk: 2, 
    weather: 3
}

const Abdally: Location = {
    name: "Abdally",
    remoteness: 5,
    sinkRisk: 2, 
    weather: 4
}

const Wafra: Location = {
    name: "Wafra",
    remoteness: 5, 
    sinkRisk: 3, 
    weather: 3
}

const Locations = [Mutla, Subiya, Salmi, Nuwaiseeb, Abdally, Wafra]