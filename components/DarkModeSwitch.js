import {Flex, IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { BiMoon, BiSun } from 'react-icons/bi'

const ToggleTheme = ()=> {
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(BiMoon, BiSun)
  const { toggleColorMode: toggleMode } = useColorMode()
  return (
    <IconButton
        top="1.1rem"
        left="90%"
      mr={{ base: 2, md: 0 }}
      size='md'
      fontSize='lg'
      aria-label={`Switch to ${text} mode`}
      title={`Switch to ${text} mode`}
      variant='ghost'
      onClick={toggleMode}
      colorScheme='brand'
      icon={<SwitchIcon size={25} />}
    />
  )
}

export default ToggleTheme