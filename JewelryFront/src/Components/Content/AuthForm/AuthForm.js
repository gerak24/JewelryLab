import React, {useState} from 'react';
import styles from './AuthForm.module.scss'
import logo from "../../../Data/logo.jpg";
import {useLogin} from "../../../features/api/users/useLogin";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const AuthForm = () => {

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const {mutateAsync: loginMutation, isPending} = useLogin()
  const nav = useNavigate();
  const handleLogin = async () => {
    await loginMutation({login, pass}).then(
      (token) => {
        if (token) {
          localStorage.setItem('User', JSON.stringify({token: token, date: new Date(), IsLogin: true}));
          nav("/nomenc")
        }
      }
    ).catch((err) => {
      toast.error(err.message);
      //toast.error(err.response.data.detail);
    })
  };

  return (<>
      <div className={styles.logo_wrapper}>
        <img src={logo} alt="Missing Logo" className={styles.logo_img}/>
      </div>
      <div className={styles.form_wrapper}>
        <div className={styles.title}>Авторизация менеджера</div>
        <div className={styles.input_wrapper}>
          <div className={styles.text}>Логин</div>
          <input onChange={(e) => setLogin(e.target.value)} className={styles.auth_input}></input>
        </div>
        <div className={styles.input_wrapper}>
          <div className={styles.text}>Пароль</div>
          <input onChange={(e) => setPass(e.target.value)} className={styles.auth_input} type={"password"}></input>
        </div>
        <div className={styles.button} onClick={handleLogin}>
          {isPending ? 'Загрузка...' : 'Войти'}
        </div>
      </div>
    </>
  );
};

export default AuthForm;