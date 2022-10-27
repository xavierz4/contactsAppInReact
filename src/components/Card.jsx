import { Details } from "./Details";

export const Card = (props) => {
  return (
    <div className="cardPerson">
      <h2 className="title">{props.name}</h2>
      <img src={props.imgUrl} alt="" />
      <div className="bottomTar">
        <Details detailInfo={props.phone} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
};
