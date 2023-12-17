import { Flex } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <Flex wrap="wrap" justify="space-around" mx="auto">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          titulo={producto.titulo}
          precio={producto.precio}
          descripcion={producto.descripcion}
          categoria={producto.categoria}
          imagen={producto.imagen}
        />
      ))}
    </Flex>
  );
}

export default ItemList;
