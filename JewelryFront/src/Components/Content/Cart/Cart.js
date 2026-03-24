import React from 'react';
import styles from './Cart.module.scss'
import {useSelector} from "react-redux";
import CartProduct from "./CartProduct/CartProduct";

const Cart = () => {
    const cart = useSelector((state) => state.cart.value)
    return (
        <div className={styles.cart}>
            {cart.map(item => <CartProduct key={item.id} item={item}/>)}
        </div>
    );
};

export default Cart;