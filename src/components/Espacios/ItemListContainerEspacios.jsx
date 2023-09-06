import { useEffect, useState } from "react"
import "./Espacios.css"
import espacios from "../../data/espacios";
import ItemListEspacios from "./ItemListEspacios";

function getDataEspacios(){
  return new Promise ((resolve)=>{
    setTimeout(() => {
      resolve(espacios)
    }, 1000);
  })
}

function ItemListContainerEspacios() {

  let [isLoading , setIsLoading]= useState(true);
  let [espacios , setEspacios] = useState([]);

  useEffect(()=> {
    getDataEspacios().then((respuesta) =>
        setEspacios(respuesta))
        .finally(()=> {
            setIsLoading(false)
        })
});

  return (<ItemListEspacios isLoading={isLoading} espacios={espacios}/>)
}

export default ItemListContainerEspacios