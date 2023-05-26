import { useState } from "react";
import "./item.css";
import { Link } from "react-router-dom";


function CardDescription({ price, category}) {
  return (
    <div className="item-card_detail">
      <h5 className="item-card_price-tag">$ {price} COP /mes</h5>
      <small>{category}</small>
    </div>
  );
}

function Item({ title, img, price, category, description, id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  let classNameFavorite;

  if (isFavorite === false) {
    classNameFavorite = "item-card_favicon";
  } else {
    classNameFavorite = "item-card_favicon favorite";
  }

  function handleClickFav() {
    console.log("ok");
    setIsFavorite(!isFavorite);
  }

  return (
    <Link to={`/room/${id}`}>
    <div className="item-card">
      <button onClick={handleClickFav} className={classNameFavorite}>
        ♥
      </button>
      <div className="item-card_img">
        <img src={img} alt="imagen"></img>
      </div>
      <div className="item-card_header">
        <h5>{title}</h5>
        <small>{category}</small>
        <small><p>{description}</p></small>
        <CardDescription price={price}  />
        <button className="btn-ver-detalles">Ver detalles</button>
      </div>
    </div>
    </Link>
  );
}

export default Item;