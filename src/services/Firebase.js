import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore , collection, getDocs, doc, getDoc ,query , where, addDoc, orderBy, writeBatch } from "firebase/firestore";
import rooms from "../data/habitaciones" 

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
/* const analytics = getAnalytics(FirebaseApp);*/
const db = getFirestore(FirebaseApp)

export async function getData() {
  const roomsCollectionRef = collection(db , "Rooms")
  const q = query(roomsCollectionRef, orderBy("index"));//orden de la aparicion de las habitaciones
  const roomsSnapshot = await getDocs(q);
  const arrayDocs = roomsSnapshot.docs;
  const dataDocs = arrayDocs.map(doc => {
    return {...doc.data(), id : doc.id}
  }) ;
  return dataDocs;
}

export async function getRoomData(idURL) {
  const docRef = doc(db, "Rooms", idURL);
  const docSnap = await getDoc(docRef);
  return {id: docSnap.id , ...docSnap.data()}
}

/* export async function getSpaciesData(){
  const docRef = doc(db, "espacios");
  const docSnap = await getDoc(docRef);
  return{...docSnap.data()}
} */
export async function getCategoryData(categoryId) {
  const roomsCollectionRef = collection(db, "Rooms");
  const q = query(roomsCollectionRef, where("category" , "==" , categoryId));
  const roomsSnapshot = await getDocs(q);
  const arrayDocs = roomsSnapshot.docs;
  const dataDocs = arrayDocs.map(doc => {
    return {...doc.data(), id : doc.id}
  }) ;
  return dataDocs;
}

export async function createOrder(data) {
  const ordersCollectionRef = collection(db, "orders");
  const response = await addDoc(ordersCollectionRef, data);
  return response.id;
}

export async function exportData (){
  const roomsCollectionRef = collection(db, "Rooms");
  for (const room of rooms ) {
    room.index = room.id
    const respuesta = await addDoc(roomsCollectionRef , room);
    console.log("cuartos" , respuesta);
  }
}

export async function exportDataWithBatch(){
  const roomsCollectionRef = collection(db, "Rooms");
  const batch = writeBatch(db)

  for (const room of rooms ) { 
    room.index = room.id
    delete room.id
    const docRef = doc(roomsCollectionRef )
    batch.set(docRef , room);
  }
  await batch.commit();
  console.log("items Guardados");
}