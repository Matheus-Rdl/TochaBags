import { useState } from "react";
import DialogBag from "../../components/dialogBag/dialogBag";
import styles from "./bagsProducts.module.css";
import { FaEye } from "react-icons/fa";
import bags from "../../data/bags.json";

export default function BagsProducts({ filterBag }) {
  const [openBag, setOpenBag] = useState(false);
  const [bag, setBag] = useState("");

  const [filter, setFilter] = useState(filterBag);

  const filteredBags =
    filter === "todos"
      ? bags
      : bags.filter((bag) => bag.type === filter);

  console.log("bags", bags);
  console.log("filteredBags", filteredBags);

  return (
    <>
      <div className={styles.bags_products}>
        <div className={styles.bags_list}>
          {filteredBags.map((item) => (
            <div className={styles.bags_card} key={item.id}>
              <div>
                <img
                  src={item.images[0]}
                  alt={item.title}
                />
              </div>

              <h2>{item.title}</h2>

              <button
                onClick={() => {
                  setBag(item);
                  setOpenBag(true);
                }}
              >
                Ver detalhes <FaEye />
              </button>
            </div>
          ))}
        </div>
      </div>

      <DialogBag
        className={styles.dialogBar}
        open={openBag}
        onClose={() => setOpenBag(false)}
        bag={bag}
      />
    </>
  );
}