import { useState } from "react";
import DialogBag from "../../components/dialogBag/dialogBag";
import styles from "../bagsProducts/BagsProducts.module.css";
import { FaEye } from "react-icons/fa";
import bags from "../../data/bags.json";

export default function BagsProducts() {
  const [openBag, setOpenBag] = useState(null);

  console.log(bags)
  console.log(bags[0])
  console.log(bags[0]?.images)
  console.log(bags[0]?.images?.[0])

  return (
    <>
      <div className={styles.bags_products}>
        <div className={styles.bags_list}>
          {bags.map((bag) => (
            <div className={styles.bags_card} key={bag.id}>
              <div>
                <img
                  src={`/bags/${bag.type}/${bag.id}/${bag.images.main}`}
                  alt={bag.name}
                />
              </div>

              <h2>{bag.name}</h2>

              <button onClick={() => setOpenBag(bag)}>
                Ver detalhes <FaEye />
              </button>
            </div>
          ))}
        </div>
      </div>

      <DialogBag
        open={openBag}
        onClose={() => setOpenBag(null)}
      />
    </>
  );
}