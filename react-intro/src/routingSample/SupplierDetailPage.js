import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseService } from "../network/services/baseService"

const SupplierDetailPage = () => {
    const [supplier, setSupplier] = useState({})
    // const params = useParams()
    const { id } = useParams()

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await baseService.get('/suppliers/' + id)
        setSupplier(data);
    }

    return (
        <div>
            <h1>Detail Page:</h1>
            <h3>Compnay Name: {supplier.companyName}</h3>
            <h3>Contact Title: {supplier.contactTitle}</h3>
            <h3>Country: {supplier.address?.country}</h3>
        </div>
    )
}

export default SupplierDetailPage