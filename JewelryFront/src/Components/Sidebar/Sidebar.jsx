import React from 'react';
import styles from './Sidebar.module.scss'

const Sidebar = ({children}) => {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    );
};

export default Sidebar;