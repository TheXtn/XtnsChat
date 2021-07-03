import { useState } from "react";
import {signIn} from 'next-auth/client'
import {useRouter} from "next/router";
import { useToast } from "@chakra-ui/react"
import {
  useColorMode,
  Progress,
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Link from 'next/link';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {

  const toast=useToast()
  const [loading,setloading]=useState(false)
  const router=useRouter()
  async function hsubmit(e){
    e.preventDefault()
    setloading(true)
    const res=await signIn('credentials',{
        redirect:false,
        email:email,
        password:password
    })
  if (!res.error){
    toast({
          title: "Welcome.",
          description: "You can join the chat now",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
        router.replace('/')
    }
    else {
      setloading(false)
      toast({
          title: "Error.",
          description: res.error,
          status: "error",
          duration: 9000,
          isClosable: true,
        })
  }
  }
  const [showPassword, setShowPassword] = useState(false);
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={hsubmit}>
            <Stack
              spacing={4}
              p="1rem"

              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input value={email} type="email" placeholder="Email address" onChange={(e)=>setemail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">

                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                disabled={loading}
              >

                Login
              </Button>
            </Stack>


          </form>
          {loading?<Progress size="xs" isIndeterminate />:""}

        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link  href={'/signup'}>
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
