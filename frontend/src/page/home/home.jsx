import NavBar from "../../components/navBar";
import Apresentation from "../apresentation";
import Header from "../header";
import Production from "../production";
import Work from "../work";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <NavBar />
        <Apresentation />
        <Work />
        <Production />
      </main>
    </div>
  );
}
