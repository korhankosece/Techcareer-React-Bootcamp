import { useEffect, useState } from "react"

const EffectSample2 = () => {

    const [sayac, setSayac] = useState(0)
    const [sayac2, setSayac2] = useState(0)

    useEffect(() => {
        console.log('useEffect 1')
    }, [])

    useEffect(() => {
        console.log('useEffect 2')
        setSayac2(prev => prev + 1)
    }, [sayac])


    // useEffect(() => {
    //     first
    //     //Clean Up Function
    //     return () => {
    //         // clearInterval()
    //     }
    // }, [third])

    return (
        <>
            <div>
                <h1>{sayac}</h1>
                <button onClick={() => setSayac(prev => prev + 1)}>arttır</button>
            </div>

            <div>
                <h1>{sayac2}</h1>
                <button onClick={() => setSayac2(prev => prev + 2)}>2 arttır</button>
            </div>
        </>
    )
}

export default EffectSample2