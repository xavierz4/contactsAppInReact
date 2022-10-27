export const Card = (props) => {
  return (
    <div className="cardPerson">
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt="shaki-triste" />
      <p>Telefono: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};
