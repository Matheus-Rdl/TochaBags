import Header from "./header/header";
import styles from "../pages/home.module.css"
import Apresentation from "./apresentation/apresentation";
import Work from "./work/work";
import Footer from "./footer/footer";
import Production from "./production/production";
import Bags from "./bags/bags";
import Stage from "./stage/stage";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <div className={styles.apresentation_work_section}>
          <Apresentation />
          <Work />
        </div>
        <Production/>
        <Bags/>
        <Stage/>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}