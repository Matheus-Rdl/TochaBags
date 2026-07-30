import { useState } from "react";
import DialogBag from "../../components/dialogBag/dialogBag";
import styles from "./bags.module.css"
import { FaEye } from "react-icons/fa";
import BagsProducts from "../../components/bagsProducts/bagsProducts";
import bagCategories from "../../data/bagCategories";

export default function Bags() {
  const [openBag, setOpenBag] = useState(null);
  const [filter, setFilter] = useState("percussao");

  const handleOpenBag = () => {
    setOpenBag(true)
  }

  return (
    <>
      <div className={styles.bags} id="bags">

        <h1 className="font-style">Nossas <span translate="no"> Bags </span></h1>

        <div className={styles.categories}>
          {bagCategories.map((category) => (
            <div
              key={category.id}
              className={`${styles.box} ${filter === category.id ? styles.boxFocus : ""
                }`}
              onClick={() => setFilter(category.id)}
            >
              <div className={styles.box_icon}>
                <p className={styles.bags_content_p}>
                  <img src={category.icon} alt={category.title} />
                  <strong>{category.title}</strong>
                </p>

                <p>
                  <span translate="no">Bags</span> {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <BagsProducts filterBag={filter} />

      </div>
    </>
  );
}