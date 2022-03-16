import { useState, useEffect } from "react"

const OrderList = () => {
    const [orderList, setOrderList] = useState()
    const [staticData, setStaticData] = useState()
    const [count, setCount] = useState(0)

    let _static = []

    useEffect(() => {
        getData();
    }, [])

    console.log(_static);

    const getData = () => {
        fetch("https://northwind.vercel.app/api/orders")
            .then(res => res.json())
            .then(data => { setOrderList(data); setStaticData(data) })
    }

    const getOrders = () => {
        // fetch("https://northwind.vercel.app/api/orders")
        //     .then(res => res.json())
        //     .then(data => setOrderList(data.slice(0, count)))

        setOrderList(staticData.slice(0, count))
    }

    return (
        <>
            <div>
                <label>Count:</label>
                <input type="text" onChange={(e) => setCount(e.target.value)} />
            </div>
            <div>
                <button onClick={getOrders}>Get Orders</button>
            </div>
            <table>
                <tr>
                    <th>customer ID</th>
                    <th>ship name</th>
                    <th>city</th>
                </tr>
                {
                    orderList && orderList.map((order, key) => (
                        <tr key={key}>
                            <td>{order.customerId}</td>
                            <td>{order.shipName}</td>
                            <td>{order.shipAddress?.city}</td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default OrderList


//https://northwind.vercel.app/api/orders
//table
//(customerID , shipname  ve city yazdırılacak)(
//bir input bir buton olacak, inputa girilen sayı kadar data getirilecek (sayı tekrar girdikçe data
//azalmayacak )
