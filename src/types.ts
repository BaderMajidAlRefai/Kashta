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

export type InventoryItem = {
    name: string;
    quantity: number;
}

export type Trip = {
    id: string;
    name: string;
    location: Location;
    date: string;
    participants: Person[]
    cars: Car[];
    inventory: Inventory
}

export type Inventory = {
    food: Food
    drink: Drink
    furniture: Furniture
    fire: Fire
    accessories: Accessories
    recoveryGear: RecoveryGear

}

export type Food = {
    burgers: InventoryItem
    kebab: InventoryItem
    chips: InventoryItem
}

export type Drink = {
    soda: InventoryItem
    tea: InventoryItem
    coffee: InventoryItem
}

export type Furniture = {
    armPillow: InventoryItem
    carpet: InventoryItem
    chairs: InventoryItem
}

export type Fire = {
    charcoal: InventoryItem
    fireStarter: InventoryItem
    lighterFluid: InventoryItem
    lighter: InventoryItem
}

export type Accessories = {
    grill: InventoryItem
    ledLight: InventoryItem
    windbreaker: InventoryItem
    kettle: InventoryItem
}

export type RecoveryGear = {
    shovel: InventoryItem
    halfTracks: InventoryItem
    towCable: InventoryItem
    tirePump: InventoryItem
    tireInflater: InventoryItem
}