import { Button, Spin, Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseService } from "../network/services/baseService";

const SupplierPage = () => {
    const [suppliers, setSuppliers] = useState([])
    const [isVisible, setIsVisible] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await baseService.get('/suppliers')
        setSuppliers(data)
        setIsVisible(false)
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'Contact Title',
            dataIndex: 'contactTitle',
            key: 'contactTitle',
        },
        {
            title: 'Detail',
            dataIndex: 'id',
            key: 'id',
            render: id => (<Button type="primary" danger onClick={() => goToDetail(id)}>Detail</Button>)
        }
    ];

    const goToDetail = (id) => {
        const data = suppliers.filter(q => q.id === id)[0]

        navigate(`/suppliers/${id}`, { state: { data: data } })
    }

    return (
        <Spin tip="Loading..." spinning={isVisible}>
            <Button type="primary" onClick={() => navigate('/suppliers/add')}>Add Supplier</Button>
            <Table dataSource={suppliers} columns={columns} pagination={{ defaultPageSize: 10, defaultCurrent: 1 }} />
        </Spin>
    )
}

export default SupplierPage