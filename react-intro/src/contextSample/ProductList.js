import { useState, useEffect } from "react";
import { baseService } from "../network/services/baseService";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            const data = await baseService.get('/products');
            setProducts(data);
        } catch (error) {
            console.log('Get products error', error);
        }
    }

    const addToCart = (product) => {
        let cartProduct = cart.find(q => q.id === product.id)

        if (cartProduct) {
            cartProduct.quantity += 1

            setCart([...cart])
        } else {
            const cartProduct = {
                id: product.id,
                name: product.name,
                price: product.unitPrice,
                quantity: 1
            }

            setCart(prev => [...prev, cartProduct])
        }
    }

    console.log(cart);

    return (
        <>
            {/* <h1>Cart Count: {cart.length}</h1> */}
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Add Cart</th>
                </tr>
                {
                    products && products.map((product, key) => (
                        <tr key={key}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td><button onClick={() => addToCart(product)}>Add Cart</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default ProductList