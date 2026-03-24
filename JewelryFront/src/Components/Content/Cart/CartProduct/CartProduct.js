import React from 'react';
import styles from "./CartProduct.module.scss";
import {addToCart, removeFromCart} from "../../../../features/cart/cartSlice";
import {useDispatch} from "react-redux";

const CartProduct = ({item}) => {
    const {id, name, amount, price, image} = item;
    const dispatch = useDispatch();
    return (
        <div className={styles.content_wrapper}>
            <div className={styles.product_title}>{name}</div>
            <img src={image} alt='ooops' className={styles.product_image}></img>
            <div className={styles.price_count}>
                <div>Стоимость: {price}руб.</div>
                <div>В корзине: {amount}</div>
            </div>
            <div className={styles.product_buttons_wrapper}>
                <div id={id} className={styles.product_button} onClick={() => dispatch(addToCart(item))}>
                    <i className="fas fa-plus"></i>
                </div>
                <div id={id} className={styles.product_button} onClick={() => dispatch(removeFromCart(item))}>
                    <i className="fas fa-minus"></i>
                </div>
                <div className={styles.product_price}>{price * amount} руб.</div>
            </div>
        </div>
    );
};

export default CartProduct;