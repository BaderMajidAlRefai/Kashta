export type Car = {
    name: string;
    tank: number;
    seats: number;
    fourWheel: boolean;
}

export type Location = {
    name: string;
    remoteness: number;
    sinkRisk: number;
    weather: number;
}

export type Person = {
    name: string;
}

export type Inventory = {
    food: string[]
    furniture: string[]
    fire: string[]
    accessories: string[]
    recoveryGear: string[]

}

export type InventoryItem = {
    name: string;
    quantity: number;
}

export type Trip = {
    location: Location;
    date: string;
    participants: Person[]
    cars: Car[];
    inventory: Inventory
}

