import {
    Box,
    chakra,
    Container, Flex,
    Stack, Switch,
    Text, useColorMode,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import {DarkModeSwitch} from "../DarkModeSwitch";

const SocialButton = () => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={"dsfdsf"}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{''}</VisuallyHidden>
      {''}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
    const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Box
position= 'fixed'

   bottom='0'
   width='100%'
   height='60px'   /* Height of the footer */


      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© Made with ♥ By Yussef mrt</Text>
        <DarkModeSwitch/>
      </Container>
    </Box>
  );
}