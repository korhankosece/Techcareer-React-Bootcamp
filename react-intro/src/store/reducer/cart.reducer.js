export const CartReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_CART':
            let cartProduct = state.find(q => q.id === payload.id)
            if (cartProduct) {
                cartProduct.quantity += 1

                state = [...state]
            } else {
                const cartProduct = {
                    id: payload.id,
                    name: payload.name,
                    price: payload.price,
                    quantity: 1
                }
                state = [...state, cartProduct]
            }
            return state
        case 'GET_CART':
            return state
        case 'EMPTY_CART':
            state = []
            return state
        default:
            return state;
    }
}