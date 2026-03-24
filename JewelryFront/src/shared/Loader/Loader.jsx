import React from 'react';
import styles from './Loader.module.scss';
import image from '../../Data/loading.png'

const Loader = () => {
  return (<>
      <div className={styles.wrapper}>
        <div className={styles.image_container}><img src={image} alt={'missing img'} className={styles.image}></img></div>
        <div className={styles.text}>
          Загрузка данных
        </div>
      </div>
    </>
  );
};

export default Loader;