import React, {useState} from 'react';
import styles from "./LeftImage.module.scss";
import content4 from "../../../../Data/content4.jpg";


const LeftImage = () => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();
    return (
        <div className={styles.image_container}>
            <div className={styles.img_column}>
                <img onClick={() => {
                    setOpen(true);
                    setContent(content4);
                }}
                     className={`${styles.img_zoomable} ${styles.image}`} src={content4} alt="Ooops"/>
            </div>
            {open && (<div onClick={() => setOpen(false)} className={styles.popup}>
                    <img id='popup_img' onClick={() => setOpen(false)}
                         src={content} className={styles.popup_img} alt='missing img'></img>
                </div>
            )}
        </div>
    );
};

export default LeftImage;