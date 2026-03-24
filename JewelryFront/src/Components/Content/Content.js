import React from 'react';
import styles from './Content.module.scss'

const Content = ({children}) => {
    return (
        <div className={styles.content_wrapper}>
            {children}
        </div>
    );
};

export default Content;