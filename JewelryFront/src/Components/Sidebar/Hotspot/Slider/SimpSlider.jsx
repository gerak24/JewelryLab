import React from 'react';
import Slider from "react-slick";
import styles from './SimpSlider.module.scss'

const SimpSlider = ({children}) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>)

}

export default SimpSlider;


