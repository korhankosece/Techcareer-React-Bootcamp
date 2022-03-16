import { useState, useEffect } from "react";

const AddCategory = () => {
    const [categoryList, setCategoryList] = useState([])
    const [category, setCategory] = useState({ name: '', description: '' })
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getCategories();
    }, [refresh])

    const getCategories = () => {
        fetch("https://northwind.vercel.app/api/categories")
            .then(response => response.json())
            .then(data => setCategoryList(data));
    }

    const addCategory = () => {
        // const { name, description } = category;
        // const data = { name, description }

        // const data = { name: category.name, description: category.description }
        const data = category;
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        fetch('https://northwind.vercel.app/api/categories', config)
            .then(response => response.json())
            .then(data => {
                setRefresh(prev => !prev)
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const deleteCategory = (id) => {
        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        fetch(`https://northwind.vercel.app/api/categories/${id}`, config)
            .then(response => response.json())
            .then(data => {
                setRefresh(prev => !prev)
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
                {
                    categoryList && categoryList.map((category, key) => (
                        <tr key={key}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td><button onClick={() => deleteCategory(category.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default AddCategory