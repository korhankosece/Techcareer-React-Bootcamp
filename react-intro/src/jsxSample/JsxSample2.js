const JsxSample2 = () => {

    const onlineStatus = true;

    return (
        <>
            {onlineStatus ? <p>Kullanıcı Online</p> : <p>Kullanıcı Offline</p>}
        </>
    )
}

export default JsxSample2