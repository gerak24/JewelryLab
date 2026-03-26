import React from 'react';
import logo from '../../../Data/logo.svg';
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={styles.logo_container}>
            <img src={logo} alt="logo" className={styles.logo_svg} />
        </div>
    );
};

export default Logo;