/* eslint-disable react/prop-types */
/* import { useState } from "react";*/
import "./Item.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


function CardDescription({ price, category}) {
  
  return (
    <div className="item-card_detail">
      <h5 className="item-card_price-tag">$ {price}  COP / Noche</h5>
      <small>{category}</small>
    </div>
  );
}

function Item({ title, img, price, category, id, capacidad }) {
/*   const [isFavorite, setIsFavorite] = useState(false);
  let classNameFavorite;

  if (isFavorite === false) {
    classNameFavorite = "item-card_favicon";
  } else {
    classNameFavorite = "item-card_favicon favorite";
  }

  function handleClickFav(event) {
    event.preventDefault();
    event.stopPropagation();
    setIsFavorite(!isFavorite);
  } */

  const stylesButton = {
    backgroundColor: capacidad === 0 ? "grey" : "inherit",
  };

  return (
    <Link to={`/room/${id}`}>
    <div className="item-card">
      <div className="item-card_img">
      <img src={img} alt="imagen"></img>
      </div>
      <div className="item-card_header">
{/*<span><button onClick={handleClickFav} className={classNameFavorite}>♥</button></span>*/}        
        <h5 style={{marginLeft: "5px"}}>{title}</h5> 
        <small style={{marginLeft: "5px"}}>{category}</small>
        <CardDescription price={(price).toFixed(3)}   />
        <Button className="btn-ver-detalles" style={stylesButton}>Ver detalles</Button> 
      </div>
    </div>
    </Link >
  );
}

export default Item;