import React, {useState} from 'react';
import styles from './NomenclatureForm.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
  clearNomenc,
  setDeleted,
  setDescr,
  setHot,
  setImage,
  setName,
  setPrice
} from "../../../features/cart/productSlice";
import {useCreateProduction} from "../../../features/api/products/useCreateProduction";
import toast from "react-hot-toast";
import {useUpdateProduction} from "../../../features/api/products/useUpdateProduction";

const NomenclatureForm = () => {
  const item = useSelector((state) => state.product.value)
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('Товар успешо создан');
  const {mutateAsync: createProduction} = useCreateProduction()
  const {mutateAsync: updateProduction} = useUpdateProduction()


  const editProduct = async () => {
    const getFormData = {
      productId: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
      isHotOffer: item.isHotOffer,
      isDeleted: item.isDeleted,
    };
    if (item?.id?.length > 0) {
      await updateProduction(getFormData).then(() => {
          setContent("Товар успешно обновлен")
        }
      ).catch((err) => {
        toast.error(err.response.data.title);
        setContent('Ошибка отправки: ' + err.response.data.title);
      })
    } else {
      await createProduction(getFormData).then(() => {
          setContent("Товар успешно создан")
        }
      ).catch((err) => {
        toast.error(err.response.data.title);
        setContent('Ошибка отправки: ' + err.response.data.title);
      })
    }
    setOpen(true);
  }

  const dispatch = useDispatch();
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form}>
        <div className={styles.form_title}> Заполните данные добавляемого/изменяемого продукта</div>
        <input id={'productId'} placeholder={'ID'} className={styles.form_input} readOnly={true} disabled={true}
               value={item.id}/>
        <input id={'name'} placeholder={'Название'} className={styles.form_input} value={item.name} onChange={(e) => {
          dispatch(setName(e.target.value))
        }}/>
        <input id={'price'} placeholder={'Стоимость'} className={styles.form_input} type={'number'} content={'0'}
               value={item.price} onChange={(e) => {
          dispatch(setPrice(e.target.value))
        }}/>
        <input id={'image'} placeholder={'Ссылка на изображение'} className={styles.form_input}
               value={item.image} onChange={(e) => {
          dispatch(setImage(e.target.value))
        }}/>
        <textarea id={'description'} placeholder={'Описание'} className={styles.form_input}
                  value={item.description} onChange={(e) => {
          dispatch(setDescr(e.target.value))
        }}/>
        <div className={styles.box_wrapper}>
          <input type="checkbox" id="isHotOffer" className={styles.box} checked={item.isHotOffer} onChange={() => {
            dispatch(setHot(!item.isHotOffer))
          }}/>
          <label className={styles.text}>Горячее предложение</label>
        </div>
        <div className={styles.box_wrapper}>
          <input type="checkbox" id="isDeleted" className={styles.box} checked={item.isDeleted} onChange={() => {
            dispatch(setDeleted(!item.isDeleted))
          }}/>
          <label className={styles.text}>Удален</label>
        </div>
        <div className={styles.button}
             onClick={async () => {
               await editProduct()
             }}>
          {item.id ? "Обновить" : "Создать"}
        </div>
        <div className={styles.clear}
             onClick={() => {
               dispatch(clearNomenc())
             }}>
          X
        </div>
      </div>
      {open && (<div onClick={() => setOpen(false)} className={styles.alert}>
          {content}
        </div>
      )}
    </div>
  );
};

export default NomenclatureForm;