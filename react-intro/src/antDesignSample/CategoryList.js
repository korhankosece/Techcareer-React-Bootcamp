import { useEffect, useState } from "react"
import { baseService } from "../network/services/baseService"
import { Table, Button, Modal } from 'antd';

const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [deleteID, setDeleteID] = useState(0)

    useEffect(() => {
        getData()
    }, [refresh])

    const getData = () => {
        baseService.get("/categories")
            .then(data => {
                setCategories(data)
            })
            .catch(err => console.log('Get Category error', err))
    }

    const deleteData = (id) => {
        if (id && id > 0) {
            baseService.delete(`/categories/${id}`)
                .then(res => setRefresh(prev => !prev))
                .catch(err => console.log('Delete Category error', err))
        }
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            key: 'id',
            render: id => (<Button type="primary" danger onClick={() => { setIsModalVisible(true); setDeleteID(id) }}>Primary</Button>)
        }
    ];

    const handleOk = () => {
        deleteData(deleteID)
        setIsModalVisible(false);
    }

    const handleCancel = () => setIsModalVisible(false)

    return (
        <div style={{ width: "50%"}}>
            <Table dataSource={categories} columns={columns} pagination={{ defaultPageSize: 10, defaultCurrent: 3 }} />
            <Modal title="Delete Category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                Are you sure ?
            </Modal >
        </div>
    )
}

export default CategoryList

//suppliers endpointi ile data çekilecek table ile listenecek
//her satırda butonlarla silme işlemi yapılabilecek
//delete işlemi için confirm modalı konulacak