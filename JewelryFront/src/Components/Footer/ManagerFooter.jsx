import React from 'react';
import vk from '../../Data/VK.svg'
import tg from '../../Data/TG.svg'
import styles from './Footer.module.scss'
import {Navigate} from "react-router-dom";

const ManagerFooter = () => {
  let user = getUser()
  if (user === undefined || user === null) {
    return <Navigate to="/auth"/>
  } else if ((new Date() - new Date(user.date)) >= 3600000) {
    alert("Истекло время жизни токена доступа");
    return <Navigate to="/auth"/>
  }
  return (
    <div className={styles.footer}>
      <div className={styles.content_wrapper}>
        <div className={styles.workTime}>
          ВРЕМЯ РАБОТЫ<br/>
          Понедельник-Воскресенье<br/>
          10.00 - 22.00<br/>
        </div>
        <div className={styles.login}>{user.name}</div>
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
  );
};

export function getUser() {
  return JSON.parse(localStorage.getItem('User'));
}

export default ManagerFooter;