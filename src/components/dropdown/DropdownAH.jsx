export default function DropdownAH (){
    return(
        <div className="dropdown ">
            <button className="dropdownColor" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Habitaciones ▼
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Completa</a></li>
              <li><a className="dropdown-item" href="#">Media</a></li>
              <li><a className="dropdown-item" href="#">Aparta Estudios</a></li>
            </ul>
        </div>
    )
}