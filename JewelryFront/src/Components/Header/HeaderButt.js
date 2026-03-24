import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Header.module.scss";

const HeaderButt = ({title,route,children}) => {
    return (
        <NavLink to={route}
                 className={({isActive}) => HighlightActive(isActive)}>
            {children}
            {title}
        </NavLink>
    );
};

function HighlightActive(isActive) {
    return isActive ? `${styles.header_button_active} ${styles.header_button} ${styles.header_text}` : `${styles.header_button_wait} ${styles.header_button} ${styles.header_text}`;
}
export default HeaderButt;