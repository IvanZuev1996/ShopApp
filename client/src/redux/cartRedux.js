import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        id: ''
    },
    reducers: {
        addProduct: (state, action) => {
            let isHaveProduct = false;
            state.products = state.products.map(p => {
                if (p._id === action.payload._id && p.size === action.payload.size) {
                    isHaveProduct = true;
                    return {...p, quantity: p.quantity + action.payload.quantity}
                } else {
                    return p;
                }
            });
            if (!isHaveProduct) {
                console.log(action.payload)
                state.products.push(action.payload);
                state.quantity += 1;
            }
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.products = state.products.filter(p => p._id !== action.payload._id);
            state.total -= action.payload.price * action.payload.quantity;
        },
        updateProduct: (state, action) => {
            let prevQuantity = 0;
            state.products = state.products.map(product => {
                if (product._id === action.payload._id) {
                    prevQuantity = product.quantity;
                    return {...product, quantity: action.payload.quantity};
                } else {
                    return product;
                }
            })
            state.total += action.payload.price * action.payload.quantity - action.payload.price * prevQuantity;
        }
    }
})

export const { addProduct, removeProduct, updateProduct } = cartSlice.actions;
export default cartSlice.reducer;