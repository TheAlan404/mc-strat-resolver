import { Item } from "./Item"
import { Location } from "./Location"

export type Chest = {
    loc: Location,
    items: Item[],
};

export type Furnace = {
    loc: Location,
};

export type CraftingTable = {
    loc: Location,
};