import { useEffect, useState } from "react"

const EffectSample = () => {
    const [count, setCount] = useState(0)
    console.log(1);

    useEffect(() => {
        console.log('Ben yazdırılacak mıyım?');
    }, [])


    return (
        <>
            <h1>Sayac: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Arttır</button>
        </>
    )
}

export default EffectSample