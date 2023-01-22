import { ID } from "./ID";
import { Item } from "./placeholder/Item";
import { Mob } from "./placeholder/Mob";

export type Strategy = {
    input: ID[],
    output: ID[],
};

let CraftWood: Strategy = {
    input: [
        { type: "item", item: { id: "minecraft:oak_wood" } }
    ],
    output: [
        { type: "item", item: { id: "minecraft:oak_planks", count: 4 } }
    ],
};