import { useEffect, useState } from "react";

/* AsyncMock - servicioMock / backend/nube/api */
import ItemList from "./ItemList";
import habitaciones from "../../data/habitaciones";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(habitaciones);
    }, 2000);
  });
}
/* ---------------------------------------------- */

function ItemListContainer() {
  let [rooms, setrooms] = useState([]);

  useEffect(() => {
    getData().then((respuesta) => {
      console.log("llegaron los datos", respuesta);
      setrooms(respuesta);
    });
  }, []);

  return <ItemList rooms={rooms}/> ;
}

export default ItemListContainer;