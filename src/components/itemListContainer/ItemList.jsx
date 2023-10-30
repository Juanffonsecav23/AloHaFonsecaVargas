/* eslint-disable react/prop-types */
import Item from "../Item/Item";
import Flex from "../Flex/Flex";
import Loader from "../Loader/Loader";

function ItemList({ room ,isLoading }) {
  if (isLoading) return <Loader />; 

  if (room.length === 0){
    return <h2>No se encontro el producto</h2>
  }else return (
    <div style={{paddingTop:"90px"}}>
      <Flex title="Habitaciones" color="orange">
        {room.map((roomInArray) => (
          <Item key={room.id} {...roomInArray} />
        ))}
      </Flex>
    </div>
  );
}

export default ItemList;