import { Button, Form, Input } from "antd"
import { useNavigate } from "react-router-dom"
import { baseService } from "../network/services/baseService"

const SupplierAddPage = () => {
    const navigate = useNavigate()

    const onFinish = async (values) => {
        try {
            const data = { companyName: values.companyName, contactTitle: values.contactTitle }
            await baseService.post('/suppliers', data)
            navigate('/suppliers')
        } catch (error) {
            console.log("Supplier add error", error);
        }
    }

    const onFinishFailed = (err) => {
        console.log(err);
    }
    return (
        <>
            <Button type="primary" onClick={() => navigate('/suppliers')}>Back to List</Button>
            <Form
                name="supplierForm"
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
                    label="Contact Title"
                    name="contactTitle"
                    rules={[
                        {
                            required: true,
                        }
                    ]}
                >
                    <Input />
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
                    {/* <button type="submit"></button> */}
                </Form.Item>
            </Form>
        </>
    )
}

export default SupplierAddPage