import Loader from '../Loader/Loader'
import ItemEspacios from '../ItemEspacios/ItemEspacios'
import Flex from '../Flex/Flex'

function ItemListEspacios({isLoading , espacios}) {

    if (isLoading) return <Loader/>

    else return (
        <Flex title={"Espacios"}>
            {espacios.map((itemInArray)=>(
                <ItemEspacios key={itemInArray.id}{...itemInArray}/>
            ))}
        </Flex>
  )
}

export default ItemListEspacios