import { Flex } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'

const Itemlist = ({ productos }) => {
    return (
        <Flex wrap="wrap" justify="space-around" mx="auto" >
            {productos.map((producto) => {
                return (
                    <div key={producto.id}>
                        <Item
                        id={producto.id}
                        titulo={producto.titulo}
                        precio={producto.precio}
                        descripcion={producto.descripcion}
                        categoria={producto.categoria}
                        imagen={producto.imagen}
                    />
                    </div>
                )
            })
        }
        </Flex>
    )
}

export default Itemlist