import { Dialog, Drawer, useMediaQuery } from '@mui/material';
import styles from './dialogBag.module.css'
import { useEffect, useState } from 'react';
import { IoIosCloseCircle, IoIosClose  } from "react-icons/io";

export default function DialogBag({ open, onClose, bag }) {

  const isMobile = useMediaQuery("(max-width:550px)");

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (bag?.images?.length) {
      setMainImage(bag.images[0]);
    }
  }, [bag]);

  if (!bag) return null;

  if (isMobile) {
    return (
      <Drawer
        PaperProps={{
          className: styles.drawer,
        }}
        anchor="bottom"
        open={open}
        onClose={onClose}
      >
        <IoIosClose onClick={onClose}/>
        <h1 className={styles.dialogTitle}>{bag.title}</h1>
        <div className={styles.boxImgContent}>
          <img className={styles.mainImg} src={mainImage} />
          <div className={styles.boxImgs}>
            {bag.images.map((image, index) => (
              <img
                key={index}
                src={image}
                onClick={() => setMainImage(image)}
                className={mainImage === image ? styles.active : ""}
              />
            ))}
          </div>
        </div>

        <div className={styles.boxContent}>
          <p className={styles.description}>{bag.description}</p>
          <div className={styles.textContent}>
            <p className={styles.textTitle}><span>Tags:</span></p>
            <ul className={styles.textTags}>
              {bag.tags.map((tag) => (
                <li>&bull; {tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" className={styles.dialog}>
      <IoIosClose onClick={onClose}/>
      <div className={styles.dialogBox}>

        <div className={styles.boxImg}>
          <div className={styles.boxImgContent}>
            <img className={styles.mainImg} src={mainImage} />

            <div className={styles.boxImgs}>
              {bag.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  onClick={() => setMainImage(image)}
                  className={mainImage === image ? styles.active : ""}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.boxContent}>
          <h1 className={styles.dialogTitle}>{bag.title}</h1>
          <p className={styles.description}>{bag.description}</p>

          <div className={styles.textContent}>
            <p className={styles.textTitle}><span>Tags:</span></p>
            <ul className={styles.textTags}>
              {bag.tags.map((tag) => (
                <li>&bull; {tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Dialog>
  );
}