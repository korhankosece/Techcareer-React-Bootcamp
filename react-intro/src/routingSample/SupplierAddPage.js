import { Button } from "antd"
import { useNavigate } from "react-router-dom"

const SupplierAddPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Button type="primary" onClick={() => navigate('/suppliers')}>Back to List</Button>
        </>
    )
}

export default SupplierAddPage