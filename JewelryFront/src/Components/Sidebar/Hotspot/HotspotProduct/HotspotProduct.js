import React from 'react';
import styles from './HotspotProduct.module.scss'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../../../features/cart/cartSlice'
import {useWindowSize} from "../../../../App";
import {setProduct} from "../../../../features/cart/productSlice";

const HotspotProduct = ({item}) => {
  const {id, name, description, price, image} = item
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  if (width > 640) {
    return (
      <div className={styles.content_wrapper}>
        <img src={image} alt='ooops' className={styles.product_image}></img>
        <div className={styles.product_title}>{name}</div>
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
  } else
    return (
      <div className={styles.content_wrapper}>
        <div className={styles.title_block}>
          <div className={styles.product_title}>{name}</div>
          <img src={image} alt='ooops' className={styles.product_image}></img>
        </div>
        <div className={styles.title_block}>
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
      </div>
    );
};
export default HotspotProduct;