import { useState } from "react";
import "./item.css";


function CardDescription({ price}) {
  return (
    <div className="item-card_detail">
      <h5 className="item-card_price-tag">$ {price} COP /mes</h5>
    </div>
  );
}

function Item({ title, img1, price, category, description }) {
  const [isFavorite, setIsFavorite] = useState(false);
  let classNameFavorite;

  if (isFavorite === false) {
    classNameFavorite = "item-card_favicon";
  } else {
    classNameFavorite = "item-card_favicon favorite";
  }

  /* let classNameFavorite = isFavorite
    ? "item-card_favicon favorite"
    : "item-card_favicon"; */

  function handleClickFav() {
    console.log("ok");
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="item-card">
      <button onClick={handleClickFav} className={classNameFavorite}>
        ♥
      </button>
      <div className="item-card_img">
        <img src={img1} alt="imagen"></img>
      </div>
      <div className="item-card_header">
        <h5>{title}</h5>
        <small>{category}</small>
        <small><p>{description}</p></small>
        <CardDescription price={price}  />
        <button className="btn-ver-detalles">Ver detalles</button>
      </div>
    </div>
  );
}

export default Item;