import NavBar from "../../components/navBar";
import Apresentation from "../apresentation";
import Header from "../header";


export default function Home() {
  return (
    <div>
      <header>
        <Header/>
      </header>
        <NavBar/>
        <Apresentation/>
    </div>
  );
}
