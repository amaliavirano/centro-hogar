import React, { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Card, CardBody, Image, CardFooter, Center, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react';
import SendOrder from './SendOrder';


const Cart = ({producto,id}) => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  console.log("Cart State:", cart);

  return (
    <div>
    <Center>
      <Card maxW='2xl' className="cart-container">
        <CardBody key={id}>
          {cart.length === 0 ? (
            <Text fontSize='xl'>No hay productos en el carrito.</Text>
          ) : (

          
            cart.map((item) => (
              <div key={id} className="cart-item">
                <div>
                  {/* Contenido del producto */}
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
                  onClick={() => removeItem(item.product)}
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
    
    <SendOrder/>
    </div>
  );

 
};

export default Cart;
