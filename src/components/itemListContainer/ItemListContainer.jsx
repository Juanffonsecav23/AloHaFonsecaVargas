import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import habitaciones from "../../data/habitaciones";

function getData() {
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(habitaciones),2000);
  });
}


function ItemListContainer() {
  let [isLoading , setIsLoading] = useState(true)
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
    }).finally(()=> {
      setIsLoading(false)
    });
  }, [categoryid]);

  return <ItemList isLoading={isLoading} room={room} />;
}

export default ItemListContainer;