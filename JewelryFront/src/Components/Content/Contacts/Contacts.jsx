import React from 'react';
import styles from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.title}> Контакты</div>
            <div className={styles.description}>
                Мы находимся по адресу: г. Ростов-на-Дону, проспект Буденновский, 49/97<br/>
                Наш телелефон: +7 (000) 00-00-00<br/>
                Сообщество ВКонтакте: <a className={styles.link}
                                         href="https://vk.com/">https://vk.com/</a><br/>
                Наш Телеграм: <a className={styles.link}
                                 href="https://web.telegram.org/">https://web.telegram.org/</a><br/>
            </div>
            <div className={styles.iframe_wrapper}>
                <iframe title="Наш адрес" className={styles.map_wrapper}
                        src="https://yandex.com/map-widget/v1/?ll=39.704673%2C47.224936&mode=search&oid=119384518376&ol=biz&z=17.53"></iframe>
                <iframe title="Отзыввы посетителей" className={styles.feedback_wrapper}
                        src="https://yandex.ru/maps-reviews-widget/119384518376?comments"></iframe>
            </div>
        </div>
    );
};

export default Contacts;