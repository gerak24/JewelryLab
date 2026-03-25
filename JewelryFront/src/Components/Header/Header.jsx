import React from 'react';
import styles from './Header.module.scss'
import HeaderButt from "./HeaderButt";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_content_wrapper}>
                <HeaderButt title={'Главная'} route={'/'}>
                    <i className="fas fa-home"></i>
                </HeaderButt>
                <HeaderButt title={'Контакты'} route={'/contact'}/>
                <HeaderButt title={'Каталог'} route={'/catalog'}/>
            </div>
        </div>
    );
};

export default Header;