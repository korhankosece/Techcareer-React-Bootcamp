import { useState } from 'react'
import { products } from '../data/products'

const StateSample8 = () => {
    const [productList, setProductList] = useState(products)
    const [searchName, setSearchName] = useState('')
    const [price, setPrice] = useState({
        minPrice: 0,
        maxPrice: 0
    })

    const searchProducts = () => {
        const _searchName = searchName.toLowerCase().trim()
        const filteredData = products.filter(q => q.name.toLowerCase().trim().startsWith(_searchName))
        setProductList([...filteredData])
        // setProductList(prev => {
        //     return prev.filter(q => q.name.toLowerCase().trim().startsWith(_searchName))
        // })
    }

    const getProducts = () => {
        const filteredProducts = products.filter(q => q.unitPrice > price.minPrice && q.unitPrice < price.maxPrice)
        setProductList([...filteredProducts])
    }

    const handlePrice = (min, max) => {
        if (min) {
            // setPrice({ minPrice: min, maxPrice: price.maxPrice })
            setPrice((prev) => handleSetterPrice(prev, min))
        } else {
            setPrice(prev => { return { ...prev, maxPrice: max } })
        }
    }

    const handleSetterPrice = (prev, min) => {
        prev.minPrice = min;
        return prev
    }

    return (
        <>
            <div>
                <label htmlFor="">Search: </label>
                <input type="text" onChange={(e) => setSearchName(e.target.value)} />
                <button onClick={searchProducts}>Search</button>
            </div>

            <div>
                <label htmlFor="">Min Price: </label>
                <input value={price.minPrice} type="text" onChange={(e) => handlePrice(e.target.value, null)} />
            </div>

            <div>
                <label htmlFor="">Max Price: </label>
                <input value={price.maxPrice} type="text" onChange={(e) => handlePrice(null, e.target.value)} />
            </div>

            <div>
                <button onClick={getProducts}>Get Products</button>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                </tr>
                {productList.map((product, key) => (
                    <tr key={key}>
                        <td>{product.name}</td>
                        <td>{product.unitsInStock}</td>
                        <td>{product.unitPrice}</td>
                    </tr>
                ))}
            </table></>
    )
}

export default StateSample8



//en başta datalar table da gösterilecek
//kolonlar => name, stock, price

//1.input search inputu product name i başlangıç olabilir ortasından olabilir (search buton)

//2.input min price inputu unitPrice
//3.input max price inputu unitPrice (filtre butonu)

//opsiyonel: filtrelenen data azalınca başka filtre uygulandığında data eski haline gelebilecek