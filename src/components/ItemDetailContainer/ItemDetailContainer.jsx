/* AsyncMock - servicioMock / backend/nube/api */
import { useEffect, useState } from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import habitaciones from "../../data/habitaciones";

/* AsnyMock ----------------------------------------------- */
function getItemData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(habitaciones[0]);
    }, 2000);
  });
}
/* ------------------------------------------------ */

function ItemDetailContainer() {
  // estado
  /* /detalle/10 */
  const [room, setRoom] = useState({});

  //efecto
  useEffect(() => {
    getItemData().then((respuesta) => {
      setRoom(respuesta);
    });
  }, []);

  //UI
  return (
    /* <ItemDetail .../> */
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={room.img1} alt={room.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{room.title}</h1>
        <h2 className="priceTag">$ {room.price} Cop / Mes</h2>
        <small>{room.description}</small>
        <ItemCount stock={room.capacidad} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;