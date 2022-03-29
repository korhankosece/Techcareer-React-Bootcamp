import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const Page = () => {
    const [count, setCount] = useState(0)
    console.log('parent render');
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <div>
                <ChildComponent />
            </div>
        </>
    )
}

export default Page