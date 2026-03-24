import React from 'react';
import styles from './CatalogProduct.module.scss'
import {useDispatch} from 'react-redux'
import {setNomenc} from "../../../../features/cart/productSlice";

const NomenclatureProduct = ({item}) => {
  const {id, name, description, price, image, isHotOffer, isDeleted} = item
  const dispatch = useDispatch();
  return (
    <div className={styles.nomenc_wrapper} onClick={() => dispatch(setNomenc(item))}>
      <div className={styles.product_title}>{name}</div>
      <img src={image} alt='ooops' className={styles.product_image}></img>
      <div className={styles.product_description}>{description}</div>
      <div className={styles.product_buttons_wrapper}>
        <div id={id} className={styles.product_icon}>
          {isHotOffer ? <i className="fas fa-fire"></i> : "-"}
        </div>
        <div id={id} className={styles.product_icon}>
          {isDeleted ? <i className="fas fa-times"></i> : "-"}
        </div>
        <div className={styles.product_price}>{price} руб.</div>
      </div>
    </div>
  );
};
export default NomenclatureProduct;