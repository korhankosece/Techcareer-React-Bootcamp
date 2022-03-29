import React, { useRef } from 'react'

const RefSample = () => {

    const h1Ref = useRef([])

    const changeColor = () => {
        console.log(h1Ref);
        // h1Ref.current.style.color = 'tomato';
        h1Ref.current.forEach((element) => {
            element.style.color = 'tomato';
        })
    }

    return (
        <>
            <h1 ref={(ref) => h1Ref.current[0] = ref}>Korhan</h1>
            <p ref={(ref) => h1Ref.current[1] = ref}>Kösece</p>
            <button onClick={changeColor}>Change Stlye</button>
        </>
    )
}

export default RefSample