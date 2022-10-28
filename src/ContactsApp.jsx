import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { contacts } from "./components/contacts";

const createCard = (contacts) => {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      imgUrl={contacts.imgUrl}
      phone={contacts.phone}
      email={contacts.email}
    />
  );
};

export const ContactsApp = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="cardContainer">{contacts.map(createCard)}</div>

      <div className="footerContainer">
        <Footer />
      </div>
    </>
  );
};
