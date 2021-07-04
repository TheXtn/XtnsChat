import { useColorMode, Switch } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      position="fixed"
      top="2.1rem"
      right="5rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
