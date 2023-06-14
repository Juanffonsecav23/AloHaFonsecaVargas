import Flex from "../Flex/Flex";
import { useState } from "react";
import "./itemcount.css";
import Button from "../Button/Button";

function ItemCount(props) {
  let [count, setCount] = useState(0);

  function handleAdd() {
    if (count < props.stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <small>Seleccione la cantidad de personas</small>
      <div className="itemcount_control">
        <Flex>
          <Button  className="btnA" onClick={handleSubstract}>
            -
          </Button>
          <span className="itemcount_count">{count}</span>
          <Button className="btnA" onClick={handleAdd}>
            +
          </Button>
        </Flex>
      </div>

      <div className="itemcount_btns">
        <Button onClick={() => {props.onAddToCart(count);}} className="btnA">Reservar</Button>
      </div>
    </div>
  );
}

export default ItemCount;