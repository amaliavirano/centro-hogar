import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'




const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filterProductos = productos.filter((producto) => producto.id == id)

  return (
    <Flex wrap="wrap" justify="space-around" mx="auto" >
      {filterProductos.map((productos) => {
        return (
          <div key={productos.id}>
            <Card className='cardprod'
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200%' }}
                src={productos.imagen}
                alt={productos.titulo}
              />

              <Stack className='cuerpoImg'>
                <CardBody>
                  <Heading size='md' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
                    {productos.titulo}</Heading>

                  <Text py='2'>
                    {productos.descripcion}
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant='ghost' colorScheme='black'>
                    <ItemCount productos={productos} />
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </div>
        )
      })}
    </Flex>
  )

}

export default ItemDetail