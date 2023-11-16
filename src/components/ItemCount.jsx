import React from 'react'
import { useState } from 'react'
import { Button, Badge, useToast } from '@chakra-ui/react'


const ItemCount = ({productos}) => {

    const [count, setCount] = useState(0);
    const toast = useToast();

    const actualizarCount = ()=> {

        if(count<productos.stock){
          
            setCount(count+1);
        }
    };
       
    const decrement = () => {
        if (count < 1) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }
       

    const addToCart = () => {
        toast ({
            title: 'Felicitaciones',
            description: `Has agregado ${count} unidades a tu carrito`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            containerStyle: {
                width: '700px',
                maxWidth: '100%',

            },
        })

    }

    return (
        <div>
            <Button colorScheme='black' variant='outline' onClick={decrement}>
                -
            </Button>
            <Badge colorScheme='black'>{count}</Badge>

            <Button colorScheme='black' variant='outline' onClick={actualizarCount}>
                +
            </Button>

            <Button colorScheme='red' onClick={addToCart}>Agregar al carrito</Button>

        </div>
    )
}

export default ItemCount

