import { useState, useEffect } from "react";
import DialogBag from "../../components/dialogBag/dialogBag";
import styles from "./bagsProducts.module.css";
import { FaEye, FaChevronDown } from "react-icons/fa";

import bags from "../../data/bags.json";
import bagCategories from "../../data/bagCategories";

export default function BagsProducts({ filterBag }) {
  const [openBag, setOpenBag] = useState(false);
  const [selectedBag, setSelectedBag] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  // Atualiza o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Categoria selecionada
  const currentCategory = bagCategories.find(
    (category) => category.id === filterBag
  );

  // Tipos da categoria
  const currentTypes = currentCategory?.types || [];

  // Sempre seleciona o primeiro tipo quando troca a categoria
  useEffect(() => {
    if (currentTypes.length) {
      setSelectedType(currentTypes[0].value);
    }
  }, [currentCategory]);

  // Produtos filtrados
  const filteredBags = bags.filter((bag) => {
    const categoryMatch =
      filterBag === "todos" || bag.type === filterBag;

    const typeMatch =
      !selectedType || bag.bagType === selectedType;

    return categoryMatch && typeMatch;
  });

  console.log(currentCategory.description);

  return (
    <>
      {currentTypes.length > 0 && (
        <>
          {isMobile ? (
            <div className={styles.bagsFilterSelect}>
              <div className={styles.bagDescription}>
                <p>
                  Bags {currentCategory.description}
                </p>
              </div>
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {currentTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>

                <FaChevronDown className={styles.selectIcon} />
              </div>
            </div>
          ) : (
            <div className={styles.bagsFilter}>
              <div className={styles.bagDescription}>
                <p>
                  Bags {currentCategory.description}
                </p>
              </div>
              {currentTypes.map((type) => (
                <div
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`${styles.filterItem} ${selectedType === type.value
                    ? styles.bagTypeActive
                    : ""
                    }`}
                >
                  <p>{type.label}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {filteredBags.length === 0 && (
        <p className={styles.noProducts}>
          Em breve teremos novas bags para esta categoria. Entre em contato
          conosco para saber mais!
        </p>
      )}

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
                  setSelectedBag(item);
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
        bag={selectedBag}
      />
    </>
  );
}