import { useState } from "react";

const StateSample6 = () => {
    const defaultCities = ['İstanbul', 'Tokyo', 'LA', 'Ağrı', 'Ankara', 'Sofya'];
    const [cities, setCities] = useState(defaultCities);

    const clear = () => setCities([]);

    const add = () => {
        // cities.push('İzmit')
        // console.log(cities);

        setCities([...cities, 'İzmit'])
        // const user = { name: "Korhan" }
        // let user2 = user;

        // user2.name = "dave"
        // console.log(user);
        // console.log(user2);
    }

    return (
        <>
            <ul>
                {cities.map((city, key) => <li key={key}>{city}</li>)}
                <button onClick={add}>Add</button>
                <button onClick={clear}>Clear</button>
            </ul>
        </>
    )
}

export default StateSample6