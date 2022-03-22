import { useContext } from "react"
import CartContext from "../contexts/CartContext"

const CartHeader = () => {
    const { cart } = useContext(CartContext)
    return (
        <h1>Cart Count: {cart.length}</h1>
    )
}

export default CartHeader