import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import habitaciones from "../../data/habitaciones";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(habitaciones)), 1000;
  });
}


function ItemListContainer() {
  let [room, setRoom] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    getData().then((respuesta) => {
      if (categoryid) {
        const filterRooms = respuesta.filter(
          (room) => room.category === categoryid
        );
        setRoom(filterRooms);
      } else {
        setRoom(respuesta);
      }
    });
  }, [categoryid]);

  return <ItemList room={room} />;
}

export default ItemListContainer;