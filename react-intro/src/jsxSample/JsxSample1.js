import React from 'react'

const JsxSample1 = () => {

    const name = "Korhan";
    const age = 18;

    const user = {
        name: "Korhan",
        surname: "Kosece",
        age: "18",
        city: "İstanbul"
    }

    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
            <p>{user.city.toUpperCase()}</p>
        </>
    )
}

export default JsxSample1