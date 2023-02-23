import type { CounterSchema } from "./model/types/counterSchema";
import { Counter } from "./ui/Counter";
import { counterReducer } from "./model/slice/counterSlice";

export {
    counterReducer,
    Counter,
    CounterSchema,
};
