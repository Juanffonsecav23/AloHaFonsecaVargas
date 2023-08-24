import "./WhatsappButton.css"
function WhatsappButton() {

  return (
    <a href="https://api.whatsapp.com/send?phone=573212402566" target="_blank"  rel="noreferrer"className="btnWsp">
        <img src="/src/assets/iconos/whatsapp.svg" alt="" className="svgWsp" />
        </a>
  )
}

export default WhatsappButton