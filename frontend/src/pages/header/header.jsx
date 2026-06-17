import styles from "../header/header.module.css"
import { FaWhatsapp, FaBoxes } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { CiBoxes } from "react-icons/ci";
import { BsPersonCheck } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.triangle}>
          <div className={styles.rectangle1}></div>
          <div className={styles.rectangle2}></div>
        </div>

        <div className={styles.header_content}>

          <div className={styles.header_content_logo}>
            <img src="/images/logo.png" className={styles.logo} />
            <div className={styles.title}>
              <h1 className={`font-title`} translate="no">Tocha Bags</h1>
              <h2 className={`font-title`}>O alfaiate dos seus instrumentos</h2>
            </div>
          </div>

          <div className={styles.header_content_text}>
            <p className="font-title" translate="no">Proteção que acompanha</p>
            <p className="font-style">O ritmo<br></br>da sua música</p>
            <p className="font-text" translate="no">Soluções sob medida em bags e cases para instrumentos musicais, feitas com materiais de alta qualidade e acabamento impecável.</p>

            <div className={styles.header_content_btns}>
              <a
                className="font-text"
                translate="no"
                href="https://wa.me/5511948495894"
                target="_blank"
                rel="noopener noreferrer">
                <FaWhatsapp />Fazer orçamento
              </a>
              <a className="font-text" translate="no" href="#bags">Conheça nossas bags</a>
            </div>
          </div>

          <div className={styles.header_content_boxes}>
            <div>
              <CiBoxes />
              <p>
                <strong>Produção artesanal</strong><br></br>
                Feito com cuidado
              </p>
            </div>

            <div>
              <GiDuration />
              <p>
                <strong>Materiais premium</strong><br></br>
                Alta durabilidade
              </p>
            </div>

            <div>
              <BsPersonCheck />
              <p>
                <strong>Atendimento delicado</strong><br></br>
                Do inicio ao fim
              </p>
            </div>
          </div>

        </div>

        <div className={styles.header_backgroung}>
          {/*
          <div></div>
          <div></div>

          <div className={`${styles.bg_green_left} ${styles.bg_green}`}></div>
          <div className={`${styles.bg_green_right} ${styles.bg_green}`}></div>
          */}
          <img src="/images/header-bg.png" className={styles.img_bg} />
          <img src="/images/header-bg-mobile.png" className={styles.img_bg_mobile} />
          <div className={styles.header_content_boxes_mobile}>
            <div>
              <CiBoxes />
              <p>
                <strong>Produção artesanal</strong><br></br>
                Feito com cuidado
              </p>
            </div>

            <div>
              <GiDuration />
              <p>
                <strong>Materiais premium</strong><br></br>
                Alta durabilidade
              </p>
            </div>

            <div>
              <BsPersonCheck />
              <p>
                <strong>Atendimento delicado</strong><br></br>
                Do inicio ao fim
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}