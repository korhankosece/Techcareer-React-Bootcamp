import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { baseService } from "../network/services/baseService"

const SupplierDetailPage = () => {
    const [supplier, setSupplier] = useState({})
    // const params = useParams()
    const { id } = useParams()

    // const location = useLocation();
    const { state } = useLocation();

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
            <h3>Compnay Name: {state?.data?.companyName}</h3>
            <h3>Contact Title: {state?.data?.contactTitle}</h3>
            <h3>Country: {state?.data?.address?.country}</h3>
        </div>
    )
}

export default SupplierDetailPage