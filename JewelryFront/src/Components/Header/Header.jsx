import React from 'react';
import styles from './Header.module.scss'
import HeaderButt from "./HeaderButt";
import vk from "@/Data/VK.svg";
import tg from "@/Data/TG.svg";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_content_wrapper}>
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
                    <div className={styles.workTime}>
                        +7 (000) 000-00-00<br/>
                    </div>
                </div>
                <div className={styles.title}>
                    JewelryLab<br/>
                </div>
                <div className={styles.buttons_wrapper}>
                    <HeaderButt route={'/'}>
                        <i className="fas fa-home"></i>
                    </HeaderButt>
                    <HeaderButt route={'/contact'}>
                        <i className="fas fa-map-marker-alt"></i>
                    </HeaderButt>
                    <HeaderButt route={'/catalog'}>
                        <i className="fas fa-gifts"></i>
                    </HeaderButt>
                </div>
            </div>
        </div>
    );
};

export default Header;