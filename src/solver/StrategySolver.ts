import { State, ID, Item } from "../classes";

export class StrategySolver {
    state: State;

    constructor(state?: State) {
        this.state = state || new State();
    };

    solveFor(targets: ID[]) {
        // first lets see what's missing
        let unmet = this.state.testState(targets);

        // uhh do black magic here idk
    }
};