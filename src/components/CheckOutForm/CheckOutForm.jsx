/* eslint-disable react/prop-types */
import { useState } from "react"
import "./CheckOutForm.css"

function CheckOutForm({onHandleConfrim}) {

    const [userData , setUserData] = useState({
        nombre: "",
        apellido:"",
        phone: "",
        email: "",
    })

    function onInputChange (evt){
        const prop = evt.target.name;
        const value = evt.target.value
        const newData = {...userData}
        newData[prop] = value;    
        setUserData(newData)
    }
    function onSubmit(evt) {
        evt.preventDefault();
        onHandleConfrim(userData)
    }

  return (
    <div className="checkoutform-Container">
        <h3>Completa tu compra con tus datos personales</h3>
        <div>
            <label >Nombre:</label>
            <input className="input-Form" value={userData.nombre} name="nombre" type="text" onChange={onInputChange} />
        </div>
        <div>
            <label >Apellido:</label>
            <input className="input-Form" value={userData.apellido} name="apellido" type="text" onChange={onInputChange} />
        </div>
        <div>
            <label>Email: </label>
            <input className="input-Form" value={userData.email} name="email" type="text"  onChange={onInputChange}/>
        </div>
        <div>
            <label>Telefono: </label>
            <input className="input-Form" value={userData.phone} name="phone" type="text" onChange={onInputChange} />
        </div>
        <button style={{backgroundColor:"orange" , width:"100%"}} onClick={onSubmit}>Reservar</button>
    </div> )

  }
export default CheckOutForm