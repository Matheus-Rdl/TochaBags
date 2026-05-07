import styles from "../apresentation/apresentation.module.css"

export default function Apresentation() {
  return (
    <>
      <div className={styles.apresentation}>
        <h1 className="font-style">A Tocha Bags</h1>
        <div>
          <p>Tocha Bags nasceu da paixão pela música e da necessidade de oferecer proteção de verdade para quem vive o som todos os dias. Cada bag e case que produzimos carrega nosso compromisso com qualidade, resistência e funcionalidade, para que você possa focar no que realmente importa: a sua música.</p>
          <img src="/images/apresentation-img.png" />
        </div>
      </div>
    </>
  );
}