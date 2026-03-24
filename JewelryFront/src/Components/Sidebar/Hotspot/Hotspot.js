import React from 'react';
import styles from './Hotspot.module.scss'
import Product from "./HotspotProduct/HotspotProduct";
import SimpSlider from "./Slider/SimpSlider";
import {useFetchProduction} from "../../../features/api/products/useFetchProduction";
import Loader from "../../../shared/Loader/Loader";
import NotFoundError from "../../../shared/NotFound/NotFoundError";

const Hotspot = () => {
  const {data, isLoading} = useFetchProduction()
  const products = data?.filter(x => x.isHotOffer === true);
  return (<div className={styles.hotspot}>
    <div className={styles.hotspot_title}>Спецпредложения</div>
    {
      products ? <div className={styles.product_content_wrapper}>
        <SimpSlider>
          {products?.map(item => <Product key={item.id} item={item}/>)}
        </SimpSlider>
      </div> : isLoading ? <Loader></Loader> : <NotFoundError children={'Нет акций'}></NotFoundError>
        }
      </div>);
    };

    export default Hotspot;