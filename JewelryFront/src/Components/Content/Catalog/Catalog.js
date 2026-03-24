import React from 'react';
import Product from "./CatalogProduct/CatalogProduct";
import styles from './Catalog.module.scss'
import {useFetchProduction} from "../../../features/api/products/useFetchProduction";
import Loader from "../../../shared/Loader/Loader";
import NotFoundError from "../../../shared/NotFound/NotFoundError";

const Catalog = () => {
  const {data: products, isLoading} = useFetchProduction()
  return (
    <>
    {products ? <div className={styles.catalog}>
        {products?.map(item => <Product key={item.id} item={item}/>)}
      </div>
      : isLoading ? <div className={styles.absolute}><Loader></Loader></div> :
        <div className={styles.absolute}><NotFoundError>Не удалось подключиться к серверу</NotFoundError></div>}
    </>
  );
};

export default Catalog;