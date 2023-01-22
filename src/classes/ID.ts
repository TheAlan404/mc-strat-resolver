import { Item } from "./placeholder/Item";
import { Mob } from "./placeholder/Mob";

export type IDItem = {
    type: "item",
    item: Item,
};

export type IDCraftingTable = {
    type: "crafting_table",
};

export type IDMob = {
    type: "mob",
    mob: Mob,
};

export type ID = IDItem | IDCraftingTable | IDMob;