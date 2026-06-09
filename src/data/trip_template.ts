import type { Trip } from "../types"

export const tripTemplate: Trip = {
    id: 0,

    name: "",

    location: {
        name: "",
        remoteness: 0,
        sinkRisk: 0,
        weather: 0
    },

    date: "",

    participants: [],

    cars: [],

    inventory: {
        food: {
            burgers: {
                name: "",
                quantity: 0
            },
            kebab: {
                name: "",
                quantity: 0
            },
            chips: {
                name: "",
                quantity: 0
            }
        },

        drink: {
            soda: {
                name: "",
                quantity: 0
            },
            tea: {
                name: "",
                quantity: 0
            },
            coffee: {
                name: "",
                quantity: 0
            }
        },

        furniture: {
            armPillow: {
                name: "",
                quantity: 0
            },
            carpet: {
                name: "",
                quantity: 0
            },
            chairs: {
                name: "",
                quantity: 0
            }
        },

        fire: {
            charcoal: {
                name: "",
                quantity: 0
            },
            fireStarter: {
                name: "",
                quantity: 0
            },
            lighterFluid: {
                name: "",
                quantity: 0
            },
            lighter: {
                name: "",
                quantity: 0
            }
        },

        accessories: {
            grill: {
                name: "",
                quantity: 0
            },
            ledLight: {
                name: "",
                quantity: 0
            },
            windbreaker: {
                name: "",
                quantity: 0
            },
            kettle: {
                name: "",
                quantity: 0
            }
        },

        recoveryGear: {
            shovel: {
                name: "",
                quantity: 0
            },
            halfTracks: {
                name: "",
                quantity: 0
            },
            towCable: {
                name: "",
                quantity: 0
            },
            tirePump: {
                name: "",
                quantity: 0
            },
            tireInflater: {
                name: "",
                quantity: 0
            }
        }
    }
}