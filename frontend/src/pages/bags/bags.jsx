import styles from "../bags/bags.module.css"

export default function Bags() {
  return (
    <>
      <div className={styles.bags}>

        <div className={styles.bags_content}>

          <div className={styles.box}>
            <img src="images/bags1.png" />
            <div></div>
            <p>Percussão</p>
          </div>

          <div className={styles.box}>
            <img src="images/bags2.png" />
            <div></div>
            <p>Cordas</p>
          </div>

          <div className={styles.box}>
            <img src="images/bags3.png" />
            <div></div>
            <p>Sopro</p>
          </div>

          <div className={styles.box}>
            <img src="images/bags4.png" />
            <div></div>
            <p>Diversos</p>
          </div>
        </div>

      </div>
    </>
  );
}