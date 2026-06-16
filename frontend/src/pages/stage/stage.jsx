import styles from "../stage/stage.module.css"
import { BsChatRightDots, BsBoxSeam } from "react-icons/bs";
import { GiSewingMachine } from "react-icons/gi";
import { MdOutlineDesignServices, MdOutlineLocalShipping } from "react-icons/md";

export default function Stage() {
  return (
    <>
      <div className={styles.stage}>
        <h1 className="font-style">Como funciona</h1>
        <div className={styles.stage_content}>

          <div className={styles.arrow}></div>

          <div className={styles.stage_content_box}>
            <div className={styles.box_icon}>
              <BsChatRightDots />
            </div>
            <p><strong>1. Conversa</strong><br></br></p>
            <p>Entendemos suas necessidades e seu instrumento.</p>
          </div>


          <div className={styles.stage_content_box}>
            <div className={styles.box_icon}>
              <MdOutlineDesignServices />
            </div>
            <p><strong>2. Projeto</strong><br></br></p>
            <p>Desenvolvemos o projeto ideal para você.</p>
          </div>

          <div className={styles.stage_content_box}>
            <div className={styles.box_icon}>
              <GiSewingMachine />
            </div>
            <p><strong>3. Produção</strong><br></br></p>
            <p>Produzimos com cuidado, materiais de alta qualidade e acabamento premium.</p>
          </div>

          <div className={styles.stage_content_box}>
            <div className={styles.box_icon}>
              <BsBoxSeam />
            </div>
            <p><strong>4. Revisão</strong><br></br></p>
            <p>Verificamos cada detalhe para garantir a qualidade Tocha Bags.</p>
          </div>

          <div className={styles.stage_content_box}>
            <div className={styles.box_icon}>
              <MdOutlineLocalShipping />
            </div>
            <p><strong>5. Entrega</strong><br></br></p>
            <p>Seu instrumento protegido, onde você estiver.</p>
          </div>
        </div>
      </div>

      <div className={styles.stage_cards}>
        <div className={`${styles.stage_cards_content_1}`}>
          <img src="/images/stage1.png" />
          <div>
            <p><span className={styles.stageTitle}>Feito com paixão</span></p>
            <p>Mais do que <span translate="no"> bags </span>, entregamos segurança e confiança para músicos que levam sua arte a sério.</p>
          </div>
        </div>

        <div className={`${styles.stage_cards_content_2}`}>
          <img src="/images/stage2.png" />
          <div>
            <p><span className={styles.stageTitle}>Prazo que respeita sua música</span></p>
            <p>Cada <span translate="no"> bag </span> tem prazo definido e a gente cumpre. Organização e respeito com o seu tempo e sua arte.</p>
          </div>
        </div>

        <div className={`${styles.stage_cards_content_3}`}>
          <img src="/images/stage3.png" />
          <div>
            <p><span className={styles.stageTitle}>Segurança em cada entrega</span></p>
            <p>O envio é feito com todo cuidado para que sua <span translate="no"> bag chegue </span> perfeita até você.</p>
          </div>
        </div>
      </div>
    </>
  );
}