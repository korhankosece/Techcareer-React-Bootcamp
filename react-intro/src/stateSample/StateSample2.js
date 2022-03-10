import { useState } from 'react'

const StateSample = () => {
    const [nameSurname, setNameSurname] = useState('Korhan Kösece');

    const changeName = () => {
        // nameSurname = 'James Hethfield'
        setNameSurname('James Hethfield')
    }

    console.log(nameSurname);

    return (
        <>
            <h1>{nameSurname}</h1>
            <button onClick={changeName}>Change my name</button>
            {/* <button onClick={(e) => changeName(e)}>Change my name</button> */}
        </>
    )
}

export default StateSample