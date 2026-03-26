import React from 'react';
import styles from './Header.module.scss'
import HeaderButt from "./HeaderButt";
import vk from "@/Data/VK.svg";
import tg from "@/Data/TG.svg";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.workTime}>
                JewelryLab - Блеск звезд <br/>
                +7 (000) 000-00-00<br/>
            </div>
            <div className={styles.socials_wrapper}>
                <div title="Сообщество Вконтакте">
                    <a href="https://vk.com/" className={styles.social}>
                        <img src={vk} alt="website icon" className={styles.sociallink_svg}/>
                    </a>
                </div>
                <div title="Telegram">
                    <a href="https://web.telegram.org/" className={styles.social}>
                        <img src={tg} alt="website icon" className={styles.sociallink_svg}/>
                    </a>
                </div>
            </div>
            <div className={styles.header_content_wrapper}>
                <HeaderButt title={'Главная'} route={'/'}>
                    <i className="fas fa-home"></i>
                </HeaderButt>
                <HeaderButt title={'Контакты'} route={'/contact'}/>
                <HeaderButt title={'Каталог'} route={'/catalog'}/>
            </div>
        </div>
    );
};

export default Header;