const JsxMapSample = () => {

    const cities = ["İzmir", "İstanbul", "Londra", "Havana"]

    return (
        <>
            <ul>
                {
                    // cities.map((city) => {
                    //     return <li>{city}</li>
                    // })
                    cities.map((city) => <li>{city}</li>)
                }
            </ul>
        </>
    )
}

export default JsxMapSample