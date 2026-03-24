import React from 'react';
import styles from './Header.module.scss'
import HeaderButt from "./HeaderButt";

const ManagerHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_content_wrapper}>
                <div onClick={() => exit()}>
                    <HeaderButt title={'Выход'} route={'/auth'}>
                        <i className="fas fa-sign-out-alt"></i>
                    </HeaderButt>
                </div>
                <HeaderButt title={'Номенклатура'} route={'/nomenc'}/>
                <HeaderButt title={'Заказы'} route={'/orders'}/>
            </div>
        </div>
    );
};

function exit() {
    localStorage.removeItem('User');
}

export default ManagerHeader;