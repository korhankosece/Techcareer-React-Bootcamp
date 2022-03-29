import { Button, Spin, Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../customHookSample/useFetch";
import { baseService } from "../network/services/baseService";

const SupplierPage = () => {
    // const [suppliers, setSuppliers] = useState([])
    // const [isVisible, setIsVisible] = useState(true)
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // useEffect(() => {
    //     getData();
    //     console.log(searchParams.get('sort'));
    //     console.log(searchParams.get('page'));
    // }, [])

    // const getData = async () => {
    //     const data = await baseService.get('/suppliers')
    //     setSuppliers(data.reverse())
    //     setIsVisible(false)
    // }
    const { data, error, isLoading ,setData} = useFetch("/suppliers")

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
        // const data = suppliers.filter(q => q.id === id)[0]
        const data = data.filter(q => q.id === id)[0]

        navigate(`/suppliers/${id}`, { state: { data: data } })
    }

    return (
        <Spin tip="Loading..." spinning={isLoading}>
            {error ? <p>{error}</p> :
                <>
                    <button onClick={() => navigate(1)}>Go forward</button>
                    <Button type="primary" onClick={() => navigate('/suppliers/add')}>Add Supplier</Button>
                    <Table dataSource={data} columns={columns} pagination={{ defaultPageSize: 10, defaultCurrent: 1 }} />
                </>
            }
        </Spin>
    )
}

export default SupplierPage