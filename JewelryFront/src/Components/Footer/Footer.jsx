import React from 'react';
import vk from '../../Data/VK.svg'
import tg from '../../Data/TG.svg'
import styles from './Footer.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Footer = () => {
    const cart = useSelector((state) => state.cart.value)
    let count = cart.reduce((acc, item) => acc + item.amount, 0);
    return (
        <div className={styles.footer}>
            <div className={styles.content_wrapper}>
                <div className={styles.workTime}>
                    ВРЕМЯ РАБОТЫ<br/>
                    Понедельник-Воскресенье<br/>
                    10.00 - 22.00<br/>
                </div>
                <NavLink to={'/cart'} className={styles.cart}>
                    <div>{count}</div>
                    <i className="fas fa-shopping-cart"></i>
                </NavLink>
                <div className={styles.workTime}>
                    JewelryLab - Блеск звезд <br/>
                    +7 (000) 000-00-00<br/>
                    <div className={styles.socials_wrapper}>
                        <div title="Сообщество Вконтакте">
                            <a href="https://vk.com/" className={styles.social}>
                                <img src={vk} alt="website icon" className={styles.sociallink_svg}/>
                            </a>
                        </div>
                        <div title="Telegram">
                            <a href="https://t.me/"  className={styles.social}>
                                <img src={tg} alt="website icon" className={styles.sociallink_svg}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
;
};

export default Footer;