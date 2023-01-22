import { ID } from ".";
import { Item } from "./placeholder/Item"

export class State {
    items: Item[] = [];

    constructor(items?: Item[]) {
        this.items = items || [];
    };

    /**
     * Tests the state with the ID's.
     * @param requirements List of ID's to test for
     * @returns A List of ID's where the state doesn't satisfy, aka todo do these
     */
    testState(requirements: ID[]): ID[] {
        let unmet: ID[] = [];
        for(let req of requirements) {
            switch (req.type) {
                case "item":
                    if(!this.stateHasItem(req.item)) {
                        unmet.push(req);
                    };
                    break;
                case "mob":
                    break;
                default:
                    break;
            }
        };
        return unmet;
    };

    stateHasItem(item: Item) {
        return this.items.some(i => i.id == item.id && (i.count || 1) >= (item.count || 1));
    };
}