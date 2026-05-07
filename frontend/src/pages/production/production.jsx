import styles from "../production/production.module.css"

export default function Production() {
  return (
    <>
      <div className={styles.production}>

        <div className={styles.production_text}>
          <h1 className="font-style">Nossa Produção</h1>
          <p>Nossas bags são produzidas com materiais de alta qualidade e durabilidade, combinando design funcional e acabamento premium para oferecer proteção extra durante o transporte e praticidade no dia a dia.</p>
        </div>

        <div className={styles.production_content}>
          <div>
            <p><strong>Tecido externo</strong></p>
            <img src="/images/p1.png" />
            <p>Lona capota marítima e fundo emborrachado.</p>
          </div>
          <div>
            <p><strong>Tecido interno</strong></p>
            <img src="/images/p2.png" />
            <p>Forração acolchoada de alta proteção.</p>
          </div>
          <div>
            <p><strong>Personalizações</strong></p>
            <img src="/images/p3.png" />
            <p>Bordados, patches, nome personalizado.</p>
          </div>
        </div>

      </div>
    </>
  );
}