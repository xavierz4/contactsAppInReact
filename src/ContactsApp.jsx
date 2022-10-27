import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { contacts } from "./components/contacts";

export const ContactsApp = () => {
  console.log(contacts);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="cardContainer">
        <Card
          name={contacts[0].name}
          imgUrl={contacts[0].imgUrl}
          phone={contacts[0].phone}
          email={contacts[0].email}
        />
        <Card
          name={contacts[1].name}
          imgUrl={contacts[1].imgUrl}
          phone={contacts[1].phone}
          email={contacts[1].email}
        />
        <Card
          name={contacts[2].name}
          imgUrl={contacts[2].imgUrl}
          phone={contacts[2].phone}
          email={contacts[2].email}
        />
      </div>

      <div className="footerContainer">
        <Footer />
      </div>
    </>
  );
};
