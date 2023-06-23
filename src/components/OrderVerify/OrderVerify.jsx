import { useParams } from "react-router-dom"
import "../../services/Firebase"
import {doc, getDoc, getFirestore } from "firebase/firestore"; 
import { useState, useEffect, } from "react";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAm0wvLiDabRFHqC_lYwzhCzvpwsBPmP2o",
  authDomain: "aloha-152.firebaseapp.com",
  projectId: "aloha-152",
  storageBucket: "aloha-152.appspot.com",
  messagingSenderId: "1073540384409",
  appId: "1:1073540384409:web:591d8c20a2ae5a8efe9a08",
  //measurementId: "G-Y3P00MH46Q"
};

const FirebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(FirebaseApp)

 async function getOrderData(idOrderURL) {
  const docOrderRef = doc(db, "orders", idOrderURL);
  const docOrderSnap =  getDoc(docOrderRef);
  return {id: docOrderSnap.id , ...docOrderSnap.data()}
}

function OrderVerify() {
    const {orderid} = useParams() 
    const [order , setOrder] =  useState(null)
    const [errors , setErrors] = useState(null)
    const orderId = useParams().id;

    useEffect(() => {
      getOrderData(orderId).then((respuesta) => {
        setOrder(respuesta);
      })
      .catch(error => {
        setErrors(error.message)
      })
    }, [orderId]);

    if (errors)
    return (
      <div >
        <h1>Error</h1>
        <p>{errors}</p>
      </div>
    );
    if(order)
    return (
    <div>
      <h2>Gracias por tu reserva</h2>
      <small>Este es tu comprobante de compra: {orderid}</small>
      <small>{order.email}</small>
    </div>
    /* con getDoc o get Docs se pueden traer los datos de la rserva para mostrarlos al cliente */
  )
}

export default OrderVerify