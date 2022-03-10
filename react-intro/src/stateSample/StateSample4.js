import { useState } from "react"

const StateSample4 = () => {
    const [user, setUser] = useState({ name: "Korhan", surname: "Kosece" })
    const handleClick = () => {
        setUser(prev => {
            return { ...prev, name: 'Dave' }
        })

        // const _user = { ...user, name: 'Dave' }
        // setUser(_user)
    }

    return (
        <>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <button onClick={handleClick}>Change</button>
        </>
    )
}

export default StateSample4