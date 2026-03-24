import React from 'react';
import styles from './Layout.module.scss'

const Layout = ({children}) => {
    return (
        <div onLoad={() => checkCart()} className={styles.layout}>
            {children}
        </div>
    );
};

function checkCart() {
    let cart = localStorage.getItem('Cart');
    if (cart === null)
        localStorage.setItem('Cart', JSON.stringify([]))
}

export default Layout;