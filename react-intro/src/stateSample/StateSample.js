const StateSample = () => {
    let nameSurname = "Korhan Kösece"

    const changeName = (e) => {
        console.log(nameSurname);
        nameSurname = "James Hethfield"
        console.log(nameSurname);
    }
    return (
        <>
            <h1>{nameSurname}</h1>
            <button onClick={changeName}>Change my name</button>
            {/* <button onClick={(e) => changeName(e)}>Change my name</button> */}
        </>
    )
}

export default StateSample