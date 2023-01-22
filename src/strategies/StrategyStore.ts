import { Strategy } from "../classes";

export class StrategyStore {
    static strategies: Strategy[] = [];

    static add(...strats: Strategy[]) {
        strats.forEach(strat => this.strategies.push(strat));
    };
}