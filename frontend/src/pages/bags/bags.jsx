import styles from "../bags/bags.module.css"

export default function Bags() {
  return (
    <>
      <div className={styles.bags}>

        <h1 className="font-style">Nossas Bags</h1>

        <div className={styles.bags_content_1}>

          <div className={styles.box}>
            <img src="/images/bags1.png" />
            <div className={styles.box_icon}>
              {/* 
              <img src="/images/b-icon1.png" />
              */}
            </div>
            <p>Percussão</p>
          </div>

          <div className={styles.box}>
            <img src="/images/bags2.png" />
            <div className={styles.box_icon}>
              {/* 
              <img src="/images/b-icon2.png" />
              */}
            </div>
            <p>Cordas</p>
          </div>

          <div className={styles.box}>
            <img src="/images/bags3.png" />
            <div className={styles.box_icon}>
              {/* 
              <img src="/images/b-icon3.png" />
              */}
            </div>
            <p>Sopro</p>
          </div>

          <div className={styles.box}>
            <img src="/images/bags4.png" />
            <div className={styles.box_icon}>
              {/* 
              <img src="/images/b-icon4.png" />
              */}
            </div>
            <p>Diversos</p>
          </div>
        </div>

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

      </div>
    </>
  );
}