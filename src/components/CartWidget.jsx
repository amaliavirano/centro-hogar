
import React from 'react'
import { Image } from '@chakra-ui/react';

const CartWidget = () => {
    return (
      <div>        <Image
        src="carrito.png"  
        alt="Carrito"  
        boxSize="35px"  
        borderRadius='full'
      />
      <h3>6</h3>
      </div>
    );
    
  }


export default CartWidget