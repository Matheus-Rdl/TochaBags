import styles from "../work/work.module.css"
import { GiViolin, GiGuitarBassHead, GiBorderedShield  } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { FaGuitar, FaHandshake } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbShoppingCartBolt } from "react-icons/tb";

export default function Work() {
  return (
    <>
      <div className={styles.work}>
        <h1>Nosso trabalho</h1>
        <div>
          <p>Sabemos que cada instrumento possui suas particularidades, assim como cada músico tem seu estilo e suas necessidades. Por isso, na Tocha Bags, cada projeto é criado em colaboração com o cliente, levando em consideração:</p>
          <div className={styles.work_box}>

            <div className={styles.work_box_items}>
              <GiGuitarBassHead />
              <div>
                <p><strong>Instrumento</strong></p>
                <p>Baixo, guitarra, bateria, violão, teclados e mais.</p>
              </div>
            </div>

            <div className={styles.work_box_items}>
              <BsTools />
              <div>
                <p><strong>Funcionalidade</strong></p>
                <p>Bolsos inteligentes, alças resistentes e acabamentos impecáveis.</p>
              </div>
            </div>

            <div className={styles.work_box_items}>
              <GiBorderedShield />
              <div>
                <p translate="no"><strong>A proteção</strong></p>
                <p>Utilizamos materiais de alta qualidade e técnicas de costura reforçada.</p>
              </div>
            </div>

            <div className={styles.work_box_items}>
              <FaHandshake />
              <div>
                <p><strong>O cuidado</strong></p>
                <p>Cada detalhe é pensado para garantir a segurança do seu instrumento.</p>
              </div>
            </div>

            <div className={styles.work_box_items}>
              <IoColorPaletteOutline />
              <div>
                <p><strong>O estilo</strong></p>
                <p>Do clássico ao moderno, do minimalista ao personalizado.</p>
              </div>
            </div>

            <div className={styles.work_box_items}>
              <TbShoppingCartBolt />
              <div>
                <p translate="no"><strong>A praticidade</strong></p>
                <p>Conforto no transporte, resistência no dia a dia e organização sempre.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}