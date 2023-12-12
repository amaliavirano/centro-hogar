import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import { Card, CardBody, Image, CardFooter, Center, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react';


const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  const handleRemoveItem = (productId) => {

    const itemToRemove = cart.find((item) => item.product.id === productId);

    if (itemToRemove.quantity > 1) {
      removeItem(productId, 1);
    } else {
      removeItem(productId);
    }
  };

  return (
    <Center>
      <Card maxW='2xl' className="cart-container">
        <CardBody>
          {cart.length === 0 ? (
            <Text fontSize='xl'>No hay productos en el carrito.</Text>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="cart-item">
                <div>
                  <Image
                    src={item.product.imagen}
                    alt={item.product.titulo}
                    borderRadius='lg'
                    width='100%'
                    height='35vh'
                    objectFit='cover'
                  />
                  <Heading size='md'>{item.product.titulo}</Heading>
                  <Text>Cantidad: {item.quantity}</Text>
                  <Text>Precio: {item.product.precio}</Text>


                </div>
                <Button
                  className="remove-button"
                  variant='link'
                  colorScheme='red'
                  onClick={() => handleRemoveItem(item.product.id)}
                >
                  X
                </Button>
              </div>
            ))
          )}
        </CardBody>
        {cart.length > 0 && (
          <>
            <Divider />
            <CardFooter justifyContent="center">
              <ButtonGroup spacing='2'>
                <Button
                  variant='outline'
                  colorScheme='red'
                  onClick={() => clearCart()}
                >
                  Limpiar Carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
          </>
        )}
      </Card>
    </Center>
  );
};

export default Cart;