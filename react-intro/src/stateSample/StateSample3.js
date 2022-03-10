import { useState } from 'react'

const StateSample3 = () => {
    const [isOnline, setIsOnline] = useState(false);

    const handeClick = () => {
        // setIsOnline(!isOnline);
        setIsOnline(prev => !prev)
    }

    return (
        <>
            {isOnline ? <p>Kullanıcı Online!</p> : <p>Kullanıcı Offline!</p>}
            <button onClick={handeClick}>Change Status</button>
            {/* <button onClick={() => setIsOnline(!isOnline)}>Change Status</button> */}
        </>
    )
}

export default StateSample3