import React, {useState} from 'react';
import styles from './CartInfo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {checkCartStorage, sendOrder} from '../../../features/cart/cartSlice'
import {useCreateOrder} from "../../../features/api/orders/useCreateOrder";
import toast from "react-hot-toast";

const CartInfo = () => {
  const cart = useSelector((state) => state.cart.value)
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState('');

  const {mutateAsync: orderMutation, isPending} = useCreateOrder()
  const createOrder = async () => {
    setOpen(true);
    setContent(checkOrder(cart));
    if (name.length > 0 & contact.length > 0 && cart.length > 0)
      await orderMutation({name, contact, comment, items: cart}).then(
        (num) => {
          num = num ? num : 0
          setContent(`Заказ отправлен. Номер заказа: ${num} С вами свяжется менеджер.`);
          dispatch(sendOrder({name, contact, comment, items: cart, number: num}))
        }
      ).catch((err) => {
        toast.error(err.response.data.title);
        setContent('Ошибка отправки.' + err.response.data.title);
      })
  }
  const dispatch = useDispatch();
  if (cart.length === 0) {
    let LsCart = JSON.parse(localStorage.getItem('Cart'));
    if (LsCart !== null)
      if (LsCart.length !== 0)
        dispatch(checkCartStorage());
  }
  let sum = getSum(cart);
  let count = getCount(cart);
  return (
    <div className={styles.cartInfo}>
      <div className={styles.cartInfo_title}>Товаров: {count}</div>
      <div className={styles.cartInfo_title}>Сумма: {sum}</div>
      <div className={styles.cartInfo_form}>
        <div className={styles.cartInfo_form_title}> Заполните контактные данные для отправки заказа</div>
        <input id={'name'} placeholder={'ФИО'} className={styles.cartInfo_input}
               onChange={(event) => setName(event.target.value)}/>
        <input id={'phone'} placeholder={'Способ связи'} className={styles.cartInfo_input}
               onChange={(event) => setContact(event.target.value)}/>
        <textarea id={'comment'} placeholder={'Комментарий'} className={styles.cartInfo_input}
                  onChange={(event) => setComment(event.target.value)}/>
        <div className={styles.button}
             onClick={createOrder}>
          {isPending ? 'Загрузка...' : 'Заказать'}
        </div>
      </div>
      {open && (<div onClick={() => setOpen(false)} className={styles.alert}>
          {content}
        </div>
      )}
    </div>
  );
};

function checkOrder(cart) {
  let name = document.getElementById('name').value
  let phone = document.getElementById('phone').value
  if (name === '' || phone === '')
    return ('Укажите контактные данные')
  else if (cart.length === 0)
    return ('Корзина пуста')
}

function getSum(cart) {
  return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
}

function getCount(cart) {
  return cart.reduce((acc, item) => acc + item.amount, 0);
}

export default CartInfo;