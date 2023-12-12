import React, { useState, useContext } from 'react';
import { Button, Badge, useToast } from '@chakra-ui/react';
import { CartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

const ItemCount = ({ productos }) => {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const toast = useToast();

  const actualizarCount = () => {
    if (count < productos.stock) {
      setCount(count + 1);
    } else {
      toast({
        title: 'Error',
        description: 'No hay más unidades disponibles.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    const quantityToAdd = Math.min(count, productos.stock);

    if (quantityToAdd > 0) {
      addItem(productos, quantityToAdd);

      toast({
        title: 'Felicitaciones',
        description: `Has agregado ${quantityToAdd} unidades a tu carrito`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

     
      setAddedToCart(true);
    } else {
      toast({
        title: 'Advertencia',
        description: 'Debes agregar al menos una unidad al carrito.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      
      {!addedToCart && (
        <>
          <Button colorScheme='black' variant='outline' onClick={decrement}>
            -
          </Button>
          <Badge colorScheme='black'>{count}</Badge>
          <Button colorScheme='black' variant='outline' onClick={actualizarCount}>
            +
          </Button>
          <Button colorScheme='red' onClick={addToCart}>
            Agregar al carrito
          </Button>
        </>
      )}

     
      {addedToCart && (
        <Button colorScheme='red' variant='outline'  onClick={() => console.log('Ir al carrito')}>
          <Link to={`/cart`}>Ir al carrito </Link>
        </Button>
      )}
    </div>
  );
};

export default ItemCount;

