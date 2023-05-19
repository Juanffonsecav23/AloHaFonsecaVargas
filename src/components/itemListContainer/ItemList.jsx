import Item from "../Item/Item";
import Flex from "../Flex/Flex";

function ItemList({ rooms }) {
  return (
    <div>
      <Flex title="Habitaciones">
        {rooms.map((itemInArray) => (
          <Item key={itemInArray.id} {...itemInArray} />
        ))}
      </Flex>
    </div>
  );
}

export default ItemList;