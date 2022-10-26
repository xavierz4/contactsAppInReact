import React from "react";

export const Card = (props) => {
  return (
    <div className="cardPerson">
      <h2>{props.name}</h2>
      <img src={props.img} alt="shaki-triste" />
      <p>Telefono: {props.tel}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};
