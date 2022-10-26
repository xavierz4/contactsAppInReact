import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const ContactsApp = (props) => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="cardContainer">
        <Card
          name="Shakira"
          img="https://www.lecturas.com/medio/2022/10/20/shakira-monotonia_f488041a_1280x720.jpg"
          tel="56646656"
          email="shaki@gmail.com"
        />

        <Card
          name="Tom Holland"
          img="https://ichef.bbci.co.uk/news/640/cpsprodpb/62CB/production/_126319252_gettyimages-1361454688.jpg"
          tel="54545612"
          email="th@gmail.com"
        />

        <Card
          name="Doctor Strange"
          img="https://img.europapress.es/fotoweb/fotonoticia_20220508123048_420.jpg"
          tel="5545454"
          email="strange@gmail.com"
        />
      </div>

      <div className="footerContainer">
        <Footer />
      </div>
    </>
  );
};
