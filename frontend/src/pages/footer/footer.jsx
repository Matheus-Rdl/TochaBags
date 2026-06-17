import styles from "../footer/footer.module.css"

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <h1>Contatos</h1>

        <div className={styles.footer_content}>

          <div className={styles.location}>
            <div>
              <p><strong>Localização</strong></p>
              <p>Rua Guanas, 566<br></br>
                Vila Sônia<br></br>
                São Paulo - SP</p>
            </div>

            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1918930195147!2d-46.73350500000001!3d-23.59745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce598dbcfcfc27%3A0x4d81ac1e2f4c9be5!2sTocha%20Bags!5e0!3m2!1spt-BR!2sbr!4v1777993346033!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <div className={styles.social}>
            <p><strong>Redes Sociais</strong><br></br>
              Clique para saber mais!</p>

            <div className={styles.social_content}>
              <div>
                <a
                  href="https://www.facebook.com/Tocha66/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Facebook</p>
                  <img src="/images/facebook.png" />
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/tochabags/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Instagram</p>
                  <img src="/images/instagram.png" />
                </a>
              </div>

              <div>
                <a
                  href="https://wa.me/5511948495894"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>WhatsApp</p>
                  <img src="/images/whatsapp.png" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footer_logo}>
            <img src="/images/logo.png" className={styles.logo} />
            <div className={styles.title}>
              <h2 className={`font-title`} translate="no">Tocha Bags</h2>
              <h3 className={`font-title`}>O alfaiate dos seus instrumentos</h3>
              <p>© 2024–2026 <span translate="no"> Tocha Bags. </span><br></br>Todos os direitos reservados.</p>
              <p>Feito com ❤️ para músicos.</p>
            </div>
          </div>

        </div>


      </div>
    </>
  );
}