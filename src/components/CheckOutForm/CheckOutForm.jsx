/* eslint-disable react/prop-types */
import { useState } from "react"
import "./CheckOutForm.css"
import { createOrder } from "../../services/Firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




function CheckOutForm() {

    const navigateToMessageConfirmation = useNavigate();

    const showAlert = () => {
    Swal.fire({
        title: 'Solicitud envida con exito',
        icon: 'success',
        iconColor: "orange",
        focusConfirm: true,
        confirmButtonText: 'OK',
        confirmButtonColor: "orange"
    })
    }


    async function onHandleConfrim (userData){
        const order ={
            buyer: userData,
            date: new Date(),
        }
        const id = await createOrder(order)
        navigateToMessageConfirmation(`/messageConfirmation/${id}`)
    }
    const [userData , setUserData] = useState({
        nombre: "",
        apellido:"",
        phone: "",
        email: "",
        comentario:"",
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
        onHandleConfrim(userData);
        showAlert();
    }

return (
    <div className="checkoutform-Container">
        <h3>Deja tus datos y nosotros te contactamos</h3>
        <div>
            <label>Nombre(s):</label>
            <input className="input-Form" value={userData.nombre} name="nombre" type="text" onChange={onInputChange} />
        </div>
        <div>
            <label>Apellido(s):</label>
            <input className="input-Form" value={userData.apellido} name="apellido" type="text" onChange={onInputChange} />
        </div>
        <div>
            <label style={{marginRight:"38px"}}>Email:</label>
            <input className="input-Form" value={userData.email} name="email" type="text"  onChange={onInputChange}/>
        </div>
        <div>
            <label style={{marginRight:"14px"}}>Telefono:</label>
            <input className="input-Form" value={userData.phone} name="phone" type="text" onChange={onInputChange}/>
        </div>
        <div>
            <p style={{marginTop:"10px" , marginBottom:"0"}}>Comentario:</p>
            <textarea cols={27} rows={10} className="input-Form" style={{marginBottom:"10px"}} name="comentario" onChange={onInputChange}></textarea>
        </div>
        <button style={{backgroundColor:"orange" , width:"100%"}} onClick={onSubmit}>Enviar</button>
    </div> )

    }


export default CheckOutForm