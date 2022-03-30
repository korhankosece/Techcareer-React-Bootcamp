const addCart = (data = {}) => {
    return { type: 'ADD_CART', payload: data }
}

const getCart = (data = []) => {
    return {
        type: 'GET_CART',
        payload: data
    }
}

const emptyCart = () => {
    const action = {
        type: 'EMPTY_CART',
    }
    return action
}