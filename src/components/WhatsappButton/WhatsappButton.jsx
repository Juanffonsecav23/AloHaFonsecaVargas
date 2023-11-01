import { Icon } from "@iconify/react"
import "./WhatsappButton.css"
function WhatsappButton() {

  return (
    <a href="https://api.whatsapp.com/send?phone=573212402566" target="_blank"  rel="noreferrer"className="btnWsp">
        <Icon icon="ic:baseline-whatsapp"   className="svgWsp"/>
        </a>
  )
}

export default WhatsappButton