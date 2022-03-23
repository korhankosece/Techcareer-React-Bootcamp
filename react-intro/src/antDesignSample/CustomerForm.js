import { Form, Input, Select, Table, Button } from "antd"
import { useEffect, useState } from "react"
import { baseService } from "../network/services/baseService"

const cities = ['Tokyo', 'Adana', 'Sofia']

const CustomerForm = () => {
    const [customers, setCustomers] = useState([])
    const [refresh, setRefresh] = useState(false)

    const { Option } = Select;

    useEffect(() => {
        getCustomers();
    }, [refresh])

    const getCustomers = async () => {
        try {
            const data = await baseService.get('/customers')
            const filteredArr = []
            data.forEach(customer => {
                const { id, companyName, contactName, address } = customer
                // const { city } = address
                filteredArr.push({ id, companyName, contactName, city: address?.city })
            });
            // console.table(filteredArr);
            setCustomers(filteredArr.reverse())
        } catch (error) {
            console.log('Get Customer Error', error);
        }
    }

    const columns = [
        {
            title: 'ID',
            key: 'id',
            dataIndex: 'id'
        },
        {
            title: 'Company Name',
            key: 'companyName',
            dataIndex: 'companyName',
            sorter: (a, b) => a.companyName.localeCompare(b.companyName),
        },
        {
            title: 'Contact Name',
            key: 'contactName',
            dataIndex: 'contactName'
        },
        {
            title: 'City',
            key: 'city',
            dataIndex: 'city'
        }
    ]

    const onFinish = async (values) => {
        try {
            console.log('Success:', values);
            const { companyName, contactName, city } = values;
            const obj = {
                companyName,
                contactName,
                address: {
                    city
                }
            }

            const res = await baseService.post('/customers', obj)
            setRefresh(prev => !prev)
        } catch (error) {
            console.log('Post Customer Error', error);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Form
                    name="customerForm"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Company Name"
                        name="companyName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your company name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Contact Name"
                        name="contactName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your contact name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="City"
                        name="city"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your city!',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a city"
                            allowClear
                        >
                            {cities.map((city, key) => <Option value={city}>{city}</Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Table dataSource={customers} columns={columns} />
            </div>
        </div >
    )
}

export default CustomerForm