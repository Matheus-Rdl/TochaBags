import NavBar from "../../components/navBar";
import Apresentation from "../apresentation";
import Bags from "../bags";
import Bills from "../bills";
import Contacts from "../contacts";
import Footer from "../footer";
import Header from "../header";
import Production from "../production";
import Work from "../work";

export default function Home() {
  return (
    <div>

      <header>
        <Header/>
      </header>

      <main>
        <NavBar/>
        <Apresentation/>
        <Work/>
        <Production/>
        <Bags/>
        <Bills/>
        <Contacts/>
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}
