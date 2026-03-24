import React from 'react';
import styles from './CatalogProduct.module.scss'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../../../features/cart/cartSlice'
import {setProduct} from "../../../../features/cart/productSlice";

const CatalogProduct = ({item}) => {
  const {id, name, description, price, image} = item
  const dispatch = useDispatch();
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.product_title}>{name}</div>
      <img src={image} alt='ooops' className={styles.product_image}></img>
      <div className={styles.product_description}>{description}</div>
      <div className={styles.product_buttons_wrapper}>
        <div id={id} className={styles.product_button}
             onClick={() => dispatch(addToCart({productId: id, name, description, price, image}))}>
          <i className="fas fa-cart-plus"></i>
        </div>
        <div id={id} className={styles.product_button} onClick={() => dispatch(setProduct(item))}>
          <i className="fas fa-file-alt"></i>
        </div>
        <div className={styles.product_price}>{price} руб.</div>
      </div>
    </div>
  );
};
export default CatalogProduct;