import { useState } from "react";
import DialogBag from "../../components/dialogBag/dialogBag";
import styles from "./bags.module.css"
import { FaEye } from "react-icons/fa";
import BagsProducts from "../../components/bagsProducts/bagsProducts";

export default function Bags() {
  const [openBag, setOpenBag] = useState(null);

  const handleOpenBag = () => {
    setOpenBag(true)
  }

  return (
    <>
      <div className={styles.bags}>

        <h1 className="font-style">Nossas Bags</h1>

        <div className={styles.bags_content_1}>

          <div className={styles.box}>
            {/* 
              <img src="/images/bags1.png" />
            */}
            <img src="/images/b-icon1.png" />
            <div className={styles.box_icon}>
              <p><span>Percussão</span></p>
              <p>Bags para surdos, caixas, pandeiros e mais.</p>
            </div>
          </div>

          <div className={styles.box}>
            {/* 
              <img src="/images/bags2.png" />
            */}
            <img src="/images/b-icon2.png" />
            <div className={styles.box_icon}>
              <p><span>Cordas</span></p>
              <p>Bags para cavacos, violões, guitarras e baixos.</p>
            </div>
          </div>

          <div className={styles.box}>
            {/* 
              <img src="/images/bags3.png" />
            */}
            <img src="/images/b-icon3.png" />
            <div className={styles.box_icon}>
              <p><span>Sopro</span></p>
              <p>Bags para saxofones, trompetes, flautas e mais.</p>
            </div>
          </div>

          <div className={styles.box}>
            {/* 
              <img src="/images/bags4.png" />
            */}
            <img src="/images/b-icon4.png" />
            <div className={styles.box_icon}>
              <p><span>Diversos</span></p>
              <p>Bags para acessórios, pedais, cabos e muito mais.</p>
            </div>
          </div>
        </div>

        <div className={styles.bags_content_2}>
          <div className={styles.bags_content_2_box}>
            <div className={styles.box}>
              <img src="/images/bags1.png" />
              <p>Percussão</p>
            </div>

            <div className={styles.box}>
              <img src="/images/bags2.png" />
              <p>Cordas</p>
            </div>
          </div>

          <div className={styles.bags_content_2_box}>
            <div className={styles.box}>
              <img src="/images/bags3.png" />
              <p>Sopro</p>
            </div>

            <div className={styles.box}>
              <img src="/images/bags4.png" />
              <p>Diversos</p>
            </div>
          </div>
        </div>

        <BagsProducts/>

      </div>
    </>
  );
}