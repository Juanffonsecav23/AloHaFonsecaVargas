import { useEffect, useState } from "react"
import "./Espacios.css"
import ItemListEspacios from "./ItemListEspacios";
import { getEspaciosData } from "../../services/Firebase";

function ItemListContainerEspacios() {

  let [isLoading , setIsLoading]= useState(true);
  let [espacios , setEspacios] = useState([]);

  useEffect(()=> {
    getEspaciosData()
    .then((respuesta) =>setEspacios(respuesta))
    .finally(()=> {
        setIsLoading(false)
      })
});

  return (<ItemListEspacios isLoading={isLoading} espacios={espacios}/>)
}

export default ItemListContainerEspacios