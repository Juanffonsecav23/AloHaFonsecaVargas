/* AsyncMock - servicioMock / backend/nube/api */
import { useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import habitaciones from "../../data/habitaciones";
import { useParams } from "react-router-dom";


function getRoomData(idURL) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const requestedRoom = habitaciones.find(
        (item) => item.id === Number(idURL)
      );
      resolve(requestedRoom);
    }, 1000);
  });
}


function ItemDetailContainer() {

  const [room, setRoom] = useState({});
  const id = useParams().id;

  useEffect(() => {
    getRoomData(id).then((respuesta) => {
      setRoom(respuesta);
    });
  }, [id]);

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={room.img} alt={room.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{room.title}</h1>
        <h2 className="priceTag">$ {room.price} Cop / Mes</h2>
        <small>{room.category}</small>
        <small>{room.description}</small>
        <ItemCount stock={room.capacidad} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;