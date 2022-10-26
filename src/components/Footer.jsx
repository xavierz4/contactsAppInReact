export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div>
          <img
            className="circular-square"
            src="https://static.platzi.com/media/avatars/javierst_1f292b68-f5ae-4c23-9590-7f3bb1846a22.jpg"
            alt="Jose Soto"
          />
          <h3>
            <span> Desing by: Jose Javier Soto Torres</span>
          </h3>
          <h3>
            Github:
            <a
              href="https://github.com/xavierz4/contactsAppInReact"
              target="_blank"
            >
              ContactsApp in Github
            </a>
          </h3>
          <h4>Copiright © {year}</h4>;
        </div>
      </footer>
    </>
  );
};
