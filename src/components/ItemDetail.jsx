import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'


const ItemDetail = ({ producto }) => {
  const { id } = useParams();
  console.log("ID del producto item detail:", id);

  return (
    <Flex wrap="wrap" justify="space-around" mx="auto">
      {producto && (
        <div key={id}>
          
          <Card className="cardprod" direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
            <Image objectFit="cover" maxW={{ base: '100%', sm: '200%' }} src={producto.imagen} alt={producto.titulo} />

            <Stack className="cuerpoImg">
              <CardBody>
                <Heading size="md" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
                  {producto.titulo}
                </Heading>

                <Text py="2">{producto.descripcion}</Text>
              </CardBody>

              <CardFooter>
                <Button variant="ghost" colorScheme="black">
                  <ItemCount producto={producto} id={id} />
                  
                </Button>
                
              </CardFooter>
            </Stack>
          </Card>
        </div>
         
      )}
    </Flex>
  );
};

export default ItemDetail;