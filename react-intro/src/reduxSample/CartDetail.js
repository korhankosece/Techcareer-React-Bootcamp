import { connect } from "react-redux"
import { emptyCart } from "../store/actions/cart.action"

const CartDetail = (props) => {
    return (
        <>
            <h1>{props.cart.length}</h1>
            <button onClick={() => props.empty()}>EMPTY</button>
        </>
    )
}
const mapStateToProps = (state) => {
    return { cart: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        empty: () => {
            dispatch({ type: 'EMPTY_CART' })
            // dispatch(emptyCart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail) 