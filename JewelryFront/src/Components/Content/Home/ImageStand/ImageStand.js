import React, {useState} from 'react';
import styles from "./ImageStand.module.scss";
import content1 from "../../../../Data/content1.jpg";
import content2 from "../../../../Data/content2.jpg";
import content3 from "../../../../Data/content3.jpg";

const ImageStand = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  return (
    <div className={styles.image_container}>
      <div className={styles.img_column}>
        <img onClick={() => {
          setOpen(true);
          setContent(content1);
        }}
             className={`${styles.img_zoomable} ${styles.left_img}`} src={content1} alt="Ooops"/>
      </div>
      <div className={styles.img_column}>
        <img onClick={() => {
          setOpen(true);
          setContent(content2)
        }}
             className={`${styles.img_zoomable} ${styles.right_img}`} src={content2} alt="Ooops"/>
        <img onClick={() => {
          setOpen(true);
          setContent(content3)
        }}
             className={`${styles.img_zoomable} ${styles.right_img}`} src={content3} alt="Ooops"/>
      </div>
      {open && (<div onClick={() => setOpen(false)} className={styles.popup}>
          <img id='popup_img' onClick={() => setOpen(false)}
               src={content} className={styles.popup_img} alt='missing img'></img>
        </div>
      )}
    </div>

  );
};
export default ImageStand;