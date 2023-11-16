import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'


const Item = ({ titulo, id, categoria, precio, imagen }) => {
  return (
    <>

      <Card maxW='sm'>
        <CardBody>
          <Image
            src={imagen}
            alt={titulo}
            borderRadius='lg'
            width='100%' 
            height='35vh'
            objectFit='cover'           />
          <Stack mt='6' spacing='3' align='center'>
            <Heading size='md' textAlign='center'>{titulo}</Heading>
            <Text>

              {categoria}
            </Text>
            <Text className='precio' fontSize='2xl'>
              {precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="center">
          <ButtonGroup spacing='2'>

            <Button variant='ghost' _hover={{
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              bg: 'gray.400'
            }}>
              <Link to={`/item/${id}`}>

                Detalle
              </Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

    </>
  )
}



export default Item