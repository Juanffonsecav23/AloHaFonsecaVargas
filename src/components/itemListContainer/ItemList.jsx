import Item from "../Item/Item";
import Flex from "../Flex/Flex";

function ItemList({ room }) {
  return (
    <div>
      <Flex title="Habitaciones">
        {room.map((itemInArray) => (
          <Item key={itemInArray.id} {...itemInArray} />
        ))}
      </Flex>
    </div>
  );
}

export default ItemList;