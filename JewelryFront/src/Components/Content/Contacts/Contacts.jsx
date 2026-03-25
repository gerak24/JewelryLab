import React from 'react';
import styles from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.title}> Контакты</div>
            <div className={styles.description}>
                Мы находимся по адресу: Ростовская область, г. Ростов-на-Дону, Большая Садовая ул., 76<br/>
                Наш телелефон: +7 (863) 301-35-00<br/>
                Сообщество ВКонтакте: <a className={styles.link}
                                         href="https://vk.com/chicko_russia">https://vk.com/chicko_russia</a><br/>
                Наш Телеграм: <a className={styles.link}
                                 href="https://t.me/+rSRmlAWAO3piMjJi">https://t.me/+rSRmlAWAO3piMjJi</a><br/>
            </div>
            <div className={styles.iframe_wrapper}>
                <iframe title="Наш адрес" className={styles.map_wrapper}
                        src="https://yandex.ru/map-widget/v1/org/chicko/152192873949/?ll=39.717039%2C47.221471&z=16"></iframe>
                <iframe title="Отзыввы посетителей" className={styles.feedback_wrapper}
                        src="https://yandex.ru/maps-reviews-widget/152192873949?comments"></iframe>
            </div>
        </div>
    );
};

export default Contacts;
