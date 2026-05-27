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
              <img src="/images/b-icon1.png" />
              <p>Percussão</p>
            </div>
          </div>

          <div className={styles.box}>
            <img src="/images/bags2.png" />
            <div className={styles.box_icon}>
              <img src="/images/b-icon2.png" />
              <p>Cordas</p>
            </div>
          </div>

          <div className={styles.box}>
            <img src="/images/bags3.png" />
            <div className={styles.box_icon}>
              <img src="/images/b-icon3.png" />
              <p>Sopro</p>
            </div>
          </div>

          <div className={styles.box}>
            <img src="/images/bags4.png" />
            <div className={styles.box_icon}>
              <img src="/images/b-icon4.png" />
              <p>Diversos</p>
            </div>
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

        <div className={styles.bags_products}>
          <div className={styles.bags_list}>
            <div className={styles.bags_card}>
              <div>
                <img src="/bags/cavacos/4bd06196-eee8-4226-b64b-0165da8b42ec/0.png" />
              </div>
              <h2>Bags - Cavacos</h2>
            </div>
            <div className={styles.bags_card}>
              <div>
                <img src="/bags/cavacos/4bd06196-eee8-4226-b64b-0165da8b42ec/1.png" />
              </div>
              <h2>Bags - Cavacos</h2>
            </div>
            <div className={styles.bags_card}>
              <div>
                <img src="/bags/cavacos/4bd06196-eee8-4226-b64b-0165da8b42ec/2.png" />
              </div>
              <h2>Bags - Cavacos</h2>
            </div>
            <div className={styles.bags_card}>
              <div>
                <img src="/bags/cavacos/4bd06196-eee8-4226-b64b-0165da8b42ec/3.png" />
              </div>
              <h2>Bags - Cavacos</h2>
            </div>
            <div className={styles.bags_card}>
              <div>
                <img src="/bags/cavacos/4bd06196-eee8-4226-b64b-0165da8b42ec/4.png" />
              </div>
              <h2>Bags - Cavacos</h2>
            </div>
            <div className={styles.bags_card}>
              <div>
                <img src="/bags/cavacos/4bd06196-eee8-4226-b64b-0165da8b42ec/5.png" />
              </div>
              <h2>Bags - Cavacos</h2>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}