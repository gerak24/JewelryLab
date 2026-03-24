import React from 'react';
import styles from './NotFoundError.module.scss'
import image from '../../Data/notFound.png'

const NotFoundError = ({children}) => {
  return (<>
    <div className={styles.wrapper}>
      <div className={styles.image_container}><img src={image} alt={'missing img'} className={styles.image}></img></div>
      <div className={styles.text}>
        {children}
      </div>
    </div>
  </>);
};

export default NotFoundError;

