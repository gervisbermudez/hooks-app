import { useState } from "react";

export const useCounter = (initialState = 10) => {

    const [state, setState] = useState(initialState);

    const increment = (factor) => {
        setState(state + factor);
    }

    const reset = () => {
        setState(0);
    }

    const decrement = (factor) => {
        setState(state - factor);
    }

    return { state, increment, decrement, reset };
}
