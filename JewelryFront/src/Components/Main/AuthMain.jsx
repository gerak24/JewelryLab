import React from 'react';
import styles from './AuthMain.module.scss'
const AuthMain = ({children}) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    );
};

export default AuthMain;