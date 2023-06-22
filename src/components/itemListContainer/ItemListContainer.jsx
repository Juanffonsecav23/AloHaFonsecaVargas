import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {getCategoryData, getData} from "../../services/Firebase"


function ItemListContainer() {
  let [isLoading , setIsLoading] = useState(true)
  let [room, setRoom] = useState([]);
  const { categoryId } = useParams();

  const fetchData = categoryId === undefined ? getData : getCategoryData;

  useEffect(() => {
    fetchData(categoryId)
    .then(respuesta => setRoom(respuesta))
    .finally(()=> {
      setIsLoading(false)
    });
  }, [categoryId]);

  return <ItemList isLoading={isLoading} room={room} />;
}

export default ItemListContainer;