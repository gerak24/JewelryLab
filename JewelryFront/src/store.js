import { configureStore } from '@reduxjs/toolkit'
import {cartSlice} from "./features/cart/cartSlice";
import {productSlice} from "./features/cart/productSlice";


export default configureStore({
    reducer: {
        cart: cartSlice.reducer,
        product: productSlice.reducer
    },
})