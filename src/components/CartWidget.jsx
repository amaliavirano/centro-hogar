
import React from 'react'
import { Image } from '@chakra-ui/react';
import carrito from '../assets/carrito.png'

const CartWidget = () => {
  return (
    <div>      <Image
      src={carrito}
      alt="Carrito"
      boxSize="60px"
      borderRadius='full'
    />
      <h3>6</h3>
    </div>

  );

}


export default CartWidget