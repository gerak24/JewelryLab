import React from 'react';
import styles from './Header.module.scss'
import HeaderButt from "./HeaderButt";
import vk from "@/Data/VK.svg";
import tg from "@/Data/TG.svg";

const ManagerHeader = () => {
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
                    <div onClick={() => exit()}>
                        <HeaderButt route={'/auth'}>
                            <i className="fas fa-sign-out-alt"></i>
                        </HeaderButt>
                    </div>
                    <HeaderButt route={'/nomenc'}>
                        <i className="fas fa-book"></i>
                    </HeaderButt>
                    <HeaderButt route={'/orders'}>
                        <i className="fas fa-clipboard-list"></i>
                    </HeaderButt>
                </div>
            </div>
        </div>
    );
};

function exit() {
    localStorage.removeItem('User');
}

export default ManagerHeader;