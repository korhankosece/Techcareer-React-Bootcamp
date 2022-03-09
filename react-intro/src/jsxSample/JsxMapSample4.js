import { suppliers } from "../data/suppliers"

const JsxMapSample4 = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Company Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(supplier => (
                        <tr key={supplier.id} style={{ backgroundColor: supplier.address?.country?.toLowerCase() === 'japan' ? 'red' : '', color: 'blue' }}>
                            <td>{supplier.id}</td>
                            <td>{supplier.companyName}</td>
                            <td>{supplier.address?.country}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table >
    )
}

export default JsxMapSample4