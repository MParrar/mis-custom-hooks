import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [state, setstate] = useState(initialState)

    const incremenet = () => setstate(state + 1)

    const decrement = () => setstate(state - 1)

    const reset = () => setstate(initialState)
    return {
        state,
        incremenet,
        decrement,
        setstate,
        reset
    };

}
