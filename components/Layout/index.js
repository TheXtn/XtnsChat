import { useState } from 'react'
import classes from './lay.module.css'
import {
    Skeleton,
    useColorMode,
    Switch,
    Flex,
    Button,
    IconButton, Box
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import {signOut, useSession} from "next-auth/client";

export const Nav = () => {
  async function hlogout(){
    signOut()
    }
  const [session,load]=useSession()
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (

         <Flex>
      <Flex

        top="1rem"
        left="1rem"
        align="center"
      >
        {/* Desktop */}
        {load?<Skeleton><div></div></Skeleton>:<Flex
          display={['none', 'none', 'flex','flex']}
        >

          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
                    </Button>
          </Link>
{!session && (
              <Link href="/login" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Login"
              my={5}
              w="100%"
            >
              Login
                    </Button>
          </Link>
          )}

{!session&&(
     <Link href="/signup" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Sign Up
                    </Button>
          </Link>
)}
          {session&&(
               <Link href="/profile" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Profile"
              my={5}
              w="100%"
            >
              Profile
                    </Button>
          </Link>
          )
          }
          {session&&(

            <Button
                onClick={hlogout}
              as="a"
              variant="ghost"
              aria-label="Profile"
              my={5}
              w="100%"
            >
              Logout
                    </Button>

          )
          }

        </Flex>}


        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />

      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"

        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Home
                    </Button>
          </Link>

          {!session && (
              <Link href="/login" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Login"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Login
                    </Button>
          </Link>
          )}

          {!session&&(
     <Link href="/signup" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Sign Up
                    </Button>
          </Link>
)}
 {session&&(
               <Link href="/profile" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Profile"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Profile
                    </Button>
          </Link>
          )
          }
          {session&&(

            <Button
                onClick={hlogout}
              as="a"
              variant="ghost"
              aria-label="Profile"
              my={5}
              w="100%"
                onClick={() => changeDisplay('none')}
            >
              Logout
                    </Button>

          )
          }
        </Flex>
      </Flex>
    </Flex>


  )
}