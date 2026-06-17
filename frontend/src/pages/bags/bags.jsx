import { useState } from "react";
import DialogBag from "../../components/dialogBag/dialogBag";
import styles from "./bags.module.css"
import { FaEye } from "react-icons/fa";
import BagsProducts from "../../components/bagsProducts/bagsProducts";

export default function Bags() {
  const [openBag, setOpenBag] = useState(null);
  const [filter, setFilter] = useState("percussao");

  const handleOpenBag = () => {
    setOpenBag(true)
  }

  console.log(filter)

  return (
    <>
      <div className={styles.bags} id="bags">

        <h1 className="font-style">Nossas <span translate="no"> Bags </span></h1>

        <div className={styles.bags_content_1}>

          <div
            className={`${styles.box} ${filter === "percussao" ? styles.boxFocus : ""
              }`}
            onClick={() => setFilter("percussao")}
          >
            {/* 
              <img src="/images/bags1.png" />
            */}
            <img src="/images/b-icon1.png" />
            <div className={styles.box_icon} onClick={() => setFilter("percussao")}>
              <p><strong>Percussão</strong></p>
              <p><span translate="no"> Bags </span> para surdos, caixas, pandeiros e mais.</p>
            </div>
          </div>

          <div
            className={`${styles.box} ${filter === "cordas" ? styles.boxFocus : ""
              }`}
            onClick={() => setFilter("cordas")}
          >
            {/* 
              <img src="/images/bags2.png" />
            */}
            <img src="/images/b-icon2.png" />
            <div className={styles.box_icon} onClick={() => setFilter("cordas")}>
              <p><strong>Cordas</strong></p>
              <p><span translate="no"> Bags </span> para cavacos, violões, guitarras e baixos.</p>
            </div>
          </div>

          <div
            className={`${styles.box} ${filter === "sopros" ? styles.boxFocus : ""
              }`}
            onClick={() => setFilter("sopros")}
          >
            {/* 
              <img src="/images/bags3.png" />
            */}
            <img src="/images/b-icon3.png" />
            <div className={styles.box_icon} onClick={() => setFilter("sopros")}>
              <p><strong>Sopro</strong></p>
              <p><span translate="no"> Bags </span> para saxofones, trompetes, flautas e mais.</p>
            </div>
          </div>

          <div
            className={`${styles.box} ${filter === "diversos" ? styles.boxFocus : ""
              }`}
            onClick={() => setFilter("diversos")}
          >
            {/* 
              <img src="/images/bags4.png" />
            */}
            <img src="/images/b-icon4.png" />
            <div className={styles.box_icon} onClick={() => setFilter("diversos")}>
              <p><strong>Diversos</strong></p>
              <p><span translate="no"> Bags </span> para acessórios, pedais, cabos e muito mais.</p>
            </div>
          </div>
        </div>

        {/*
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
*/}

        <div className={styles.bags_content_3}>

          <div className={styles.bags_content_3_box}>
            <div
              className={`${styles.box} ${filter === "percussao" ? styles.boxFocus : ""
                }`}
              onClick={() => setFilter("percussao")}
            >
              {/* 
              <img src="/images/bags1.png" />
            */}
              <img src="/images/b-icon1.png" />
              <div className={styles.box_icon} onClick={() => setFilter("percussao")}>
                <p><strong>Percussão</strong></p>
                <p><span translate="no"> Bags </span> para surdos, caixas, pandeiros e mais.</p>
              </div>
            </div>

            <div
              className={`${styles.box} ${filter === "cordas" ? styles.boxFocus : ""
                }`}
              onClick={() => setFilter("cordas")}
            >
              {/* 
              <img src="/images/bags2.png" />
            */}
              <img src="/images/b-icon2.png" />
              <div className={styles.box_icon} onClick={() => setFilter("cordas")}>
                <p><strong>Cordas</strong></p>
                <p><span translate="no"> Bags </span> para cavacos, violões, guitarras e baixos.</p>
              </div>
            </div>
          </div>

          <div className={styles.bags_content_3_box}>
            <div
              className={`${styles.box} ${filter === "sopros" ? styles.boxFocus : ""
                }`}
              onClick={() => setFilter("sopros")}
            >
              {/* 
              <img src="/images/bags3.png" />
            */}
              <img src="/images/b-icon3.png" />
              <div className={styles.box_icon} onClick={() => setFilter("sopros")}>
                <p><strong>Sopro</strong></p>
                <p><span translate="no"> Bags </span> para saxofones, trompetes, flautas e mais.</p>
              </div>
            </div>

            <div
              className={`${styles.box} ${filter === "diversos" ? styles.boxFocus : ""
                }`}
              onClick={() => setFilter("diversos")}
            >
              {/* 
              <img src="/images/bags4.png" />
            */}
              <img src="/images/b-icon4.png" />
              <div className={styles.box_icon} onClick={() => setFilter("diversos")}>
                <p><strong>Diversos</strong></p>
                <p><span translate="no"> Bags </span> para acessórios, pedais, cabos e muito mais.</p>
              </div>
            </div>
          </div>
        </div>

        <BagsProducts filterBag={filter} />

      </div>
    </>
  );
}