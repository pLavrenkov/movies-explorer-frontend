import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";

function Main() {
  return (
    <section className="main">
      <Header />
      <section className="main__body">
        <Promo />
        <AboutProject />
      </section>
      <Footer />
    </section>
  )
}

export default Main;
