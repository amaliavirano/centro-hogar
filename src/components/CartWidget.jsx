import React, { useContext } from 'react';
import { Image, Badge } from '@chakra-ui/react';
import carrito from '../assets/carrito.png';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

   const totalUnits = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Image
        src={carrito}
        alt="Carrito"
        boxSize="60px"
        borderRadius="full"
      />
      {totalUnits > 0 && (
        <Badge
          colorScheme="red"  
          borderRadius="full"
          position="absolute"
          top="140"
          right="50"
          fontSize="15px"
          
        >
          {totalUnits}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;