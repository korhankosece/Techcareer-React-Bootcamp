import { useContext } from "react"
import CartContext from "../contexts/CartContext"

const CartList = ({ removeItem }) => {
    const { cart } = useContext(CartContext)
    return (
        <>
            <ul>
                {cart && cart.map((item, key) => (
                    <li key={key}>
                        {item.name} - {(item.quantity * item.price).toFixed(2)} TL
                        <button onClick={() => removeItem(item.id)}>Remove Item</button>
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default CartList