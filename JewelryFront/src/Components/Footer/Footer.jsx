import React from 'react';
import styles from './Footer.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Footer = () => {
    const cart = useSelector((state) => state.cart.value)
    let count = cart.reduce((acc, item) => acc + item.amount, 0);
    return (
        <div className={styles.footer}>
                <NavLink to={'/cart'} className={styles.cart}>
                    <div>{count}</div>
                    <i className="fas fa-shopping-cart"></i>
                </NavLink>
        </div>
    );
};

export default Footer;