import { useState } from "react";
import { useToast } from "@chakra-ui/react"
import {
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
import {useRouter} from "next/router";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const toast=useToast()
  async function createuser(email,password,name){
  const res=await fetch('/api/auth/signup',{
    method:'POST',
    body:JSON.stringify({email,password,name}),
    headers:{
      'Content-Type':'application/json'
    }
  })

  const data=await res.json()
  return data
}
const router=useRouter()
  const [name,setname]=useState("")
  const [password,setpwd]=useState("")
  const [email,setemail]=useState("")
  const [showPassword, setShowPassword] = useState(false);
  async function hsubmit(e){
    e.preventDefault()
    const res=await createuser(email,password,name)
    if (res.message==='User Exist'){
      toast({
          title: "Error.",
          description: res.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        })
    }
    else {
      toast({
          title: "Welcome.",
          description: "You can login now",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
        router.replace('/login')
    }
  }
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
                  ><CFaUserAlt color="gray.300" /></InputLeftElement>
                  <Input  type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                   <InputLeftElement
                    pointerEvents="none"
                  ><CFaUserAlt color="gray.300" /></InputLeftElement>
                  <Input type="email" placeholder="Email address" value={email} onChange={(e)=>setemail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                   <InputLeftElement
                    pointerEvents="none"
                  ><CFaLock color="gray.300" /></InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password} onChange={(e)=>setpwd(e.target.value)}
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
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have account ?{" "}
        <Link  href={'/login'}>
         Login
        </Link>
      </Box>
    </Flex>
  );
};

export default Signup;
