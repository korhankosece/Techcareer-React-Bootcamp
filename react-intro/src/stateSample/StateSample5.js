import { useState } from "react"

const StateSample5 = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount(prev => prev === 0 ? prev : prev - 1)}>-</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </>
    )
}

export default StateSample5