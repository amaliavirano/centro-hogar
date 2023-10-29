import React from 'react';
import CartWidget from './CartWidget';
import { Flex, Box, Text, Menu, MenuButton, MenuItem, MenuList, Image } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1rem"
      backgroundColor="red"
      color="white"
      fontWeight={'bold'}
      fontSize={20}
    >
      <Box p='4'>
        <Image
          src="logo.png"
          alt="LOGO"
          boxSize="130px"
        />
      </Box>


      <Box flex="1" />

      <Box p='4'>
        <Menu>
          <MenuButton>
            <Text as='b'>CATEGORIAS</Text>
          </MenuButton>
          <MenuList color="grey" fontSize={15}>
            <MenuItem>TV-AUDIO-VIDEO</MenuItem>
            <MenuItem>CLIMATIZACION</MenuItem>
            <MenuItem>TECNOLOGIA Y CELULARES</MenuItem>
            <MenuItem>ELECTRO HOGAR</MenuItem>
            <MenuItem>HOGAR Y JARDIN</MenuItem>
            <MenuItem>SALUD Y BELLEZA</MenuItem>
            <MenuItem>DECO HOGAR</MenuItem>
            <MenuItem>MAS PRODUCTOS</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box flex="1" />
      <Box p='4'>
        <CartWidget />
      </Box>
    </Flex>
  );
}

export default NavBar;
