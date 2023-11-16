import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Box, Text, Menu, MenuButton, MenuItem, MenuList, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


const NavBar = () => {
  return (
    <Flex
      className='Navbar'
      align="center"
      justify="space-between"
      padding="1rem"
      color="white"
      fontWeight={'bold'}
      fontSize={20}

    >
      <Box p='4'>
        <Link to={"/"}>
          <Image
            src={logo}
            alt="LOGO"
            boxSize="130px"
          />
        </Link>
      </Box>


      <Box flex="1" />

      <Box p='4'>
        <Menu>
          <MenuButton>
            <Text as='b' fontSize={25}>CATEGORIAS</Text>
          </MenuButton>
          <MenuList color="grey" fontSize={15}>
            <MenuItem><Link to={`categoria/TV-AUDIO-VIDEO`}>TV-AUDIO-VIDEO</Link></MenuItem>
            <MenuItem><Link to={`categoria/TECNOLOGIA Y CELULARES`}>TECNOLOGIA Y CELULARES</Link></MenuItem>
            <MenuItem><Link to={`categoria/ELECTRO HOGAR`}>ELECTRO HOGAR</Link></MenuItem>
            <MenuItem><Link to={`categoria/HOGAR Y JARDIN`}>HOGAR Y JARDIN</Link></MenuItem>
            

          </MenuList>
        </Menu>
      </Box>
      <Box flex="1" />
      <Box p='4'>
        <Link to={"/Cart"}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
}

export default NavBar;
