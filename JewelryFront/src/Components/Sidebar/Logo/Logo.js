import React from 'react';
import logo from '../../../Data/logo.jpg'
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={styles.logo_container}>
            <img src={logo}  alt="Missing Logo" className={styles.logo_img}/>
        </div>
    );
};

export default Logo;