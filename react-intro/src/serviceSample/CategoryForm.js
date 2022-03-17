import { useState } from "react"
import { baseService } from "../network/services/baseService"

const CategoryForm = ({ setRefresh }) => {
    const [category, setCategory] = useState({ name: '', description: '' })

    const addCategory = async () => {
        try {
            const { name, description } = category;
            if (name && description) {
                const data = { name, description }
                await baseService.post('/categories', data)
                setRefresh(prev => !prev)
            } else {
                throw new Error('REQUIRED!!')
            }
        } catch (error) {
            console.log('Categories add error', error);
        }
    }

    return (
        <>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" onChange={(e) => setCategory(prev => { return { ...prev, name: e.target.value } })} />
            </div>

            <div>
                <label htmlFor="">Description:</label>
                <input type="text" onChange={(e) => setCategory(prev => { return { ...prev, description: e.target.value } })} />
            </div>

            <div>
                <button onClick={addCategory}>Add</button>
            </div>
        </>
    )
}

export default CategoryForm