import type { Trip } from "./types"

export const dummyTrip: Trip = {
    location: {
        name: "Subiya",
        remoteness: 3,
        sinkRisk: 4,
        weather: 5
    },

    date: "2026-12-15",

    participants: [
        {
            name: "Bader"
        },
        {
            name: "Abdullah"
        },
        {
            name: "Yousef"
        }
    ],

    cars: [
        {
            name: "Ford Ranger",
            tank: 80,
            seats: 5,
            fourWheel: true
        },
        {
            name: "Toyota Camry",
            tank: 60,
            seats: 5,
            fourWheel: false
        }
    ],

    inventory: {
        food: {
            burgers: {
                name: "Burgers",
                quantity: 12
            },

            kebab: {
                name: "Kebab",
                quantity: 8
            },

            chips: {
                name: "Chips",
                quantity: 5
            }
        },

        drink: {
            soda: {
                name: "Soda",
                quantity: 24
            },

            tea: {
                name: "Tea",
                quantity: 1
            },

            coffee: {
                name: "Coffee",
                quantity: 1
            }
        },

        furniture: {
            armPillow: {
                name: "Arm Pillow",
                quantity: 6
            },

            carpet: {
                name: "Carpet",
                quantity: 2
            },

            chairs: {
                name: "Chairs",
                quantity: 8
            }
        },

        fire: {
            charcoal: {
                name: "Charcoal",
                quantity: 3
            },

            fireStarter: {
                name: "Fire Starter",
                quantity: 1
            },

            lighterFluid: {
                name: "Lighter Fluid",
                quantity: 2
            },

            lighter: {
                name: "Lighter",
                quantity: 2
            }
        },

        accessories: {
            grill: {
                name: "Grill",
                quantity: 1
            },

            ledLight: {
                name: "LED Light",
                quantity: 4
            },

            windbreaker: {
                name: "Windbreaker",
                quantity: 2
            },

            kettle: {
                name: "Kettle",
                quantity: 1
            }
        },

        recoveryGear: {
            shovel: {
                name: "Shovel",
                quantity: 2
            },

            halfTracks: {
                name: "Half Tracks",
                quantity: 4
            },

            towCable: {
                name: "Tow Cable",
                quantity: 1
            },

            tirePump: {
                name: "Tire Pump",
                quantity: 1
            },

            tireInflater: {
                name: "Tire Inflater",
                quantity: 1
            }
        }
    }
}
