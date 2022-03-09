import { categories } from "../data/categories"

const JsxMapSample3 = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td><td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>))
                    // categories.map((item, key) => {
                    //     return <tr key={key}>
                    //         <td>{item.id}</td><td>{item.name}</td>
                    //         <td>{item.description}</td>
                    //     </tr>
                    // })
                }
            </tbody>
        </table>
    )
}

export default JsxMapSample3