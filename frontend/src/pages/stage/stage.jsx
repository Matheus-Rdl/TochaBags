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
    </>
  );
}