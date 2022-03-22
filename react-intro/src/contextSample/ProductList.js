import { useState, useEffect, useContext } from "react";
import { baseService } from "../network/services/baseService";
import CartContext from "../contexts/CartContext"
import CartList from "./CartList";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext)

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

    const removeItem = (id) => {
        // console.log(id);
        setCart(prev => prev.filter(q => q.id !== id))
    }

    return (
        <>
            {/* <h1>Cart Count: {cart.length}</h1> */}
            <CartList removeItem={removeItem} />
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