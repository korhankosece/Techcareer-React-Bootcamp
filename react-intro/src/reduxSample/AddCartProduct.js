import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { baseService } from '../network/services/baseService';

const AddCartProduct = (props) => {
    const [products, setProducts] = useState([])

    console.log(props.cart);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            const data = await baseService.get('/products')
            setProducts(data)
        } catch (error) {
            console.log('Product get error', error);
        }
    }

    const addProduct = (product) => {
        props.onCreate(product)
    }

    return (
        <>
            {/* <h1>{props.cart.length}</h1> */}
            <ul>
                {
                    products.map((product, key) => <li>{product.name} <button onClick={() => addProduct(product)}>Add</button></li>)
                }
            </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: (data) => {
            const action = { type: 'ADD_CART', payload: data }
            dispatch(action)
            // dispatch(addCart(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCartProduct)