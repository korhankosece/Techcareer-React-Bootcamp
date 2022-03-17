import { baseService } from "../network/services/baseService"

const CategoryList = (props) => {
    const { categoryList, setRefresh } = props

    const deleteCategory = async (id) => {
        try {
            await baseService.delete(`/categories/${id}`)
            setRefresh(prev => !prev)
        } catch (error) {
            console.log('Categories delete error', error);
        }
    }

    return (
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
    )
}

export default CategoryList