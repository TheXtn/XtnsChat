import { useState } from "react";
import {getSession, signIn} from 'next-auth/client'
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

const RoomLogin = () => {

  const toast=useToast()
  const [loading,setloading]=useState(false)
  const router=useRouter()
    const roomid=router.query['id']

  const [showPassword, setShowPassword] = useState(false);
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const handleShowClick = () => setShowPassword(!showPassword);
  async function sendtologin(roomid,password){
    setloading(true)
     const res=await fetch('/api/rooms/roomlogin',{
    method:'POST',
    body:JSON.stringify({roomid,password}),
    headers:{
      'Content-Type':'application/json'
    }
  }

  )
    setloading(false)
    if (res.status!=200){

          toast({
          title: "Error.",
          description: "Wrong Password",
          status: "error",
          duration: 5000,
          isClosable: true,
        })

    }
    else {

          toast({
          title: "Welcome.",
          description: "Successfully joined",
          status: "success",
          duration: 5000,
          isClosable: true,
        }
      )
      router.replace("/chat/"+roomid)
    }
  }
  function hsubmit(e){
    e.preventDefault()

    sendtologin(roomid,password)

  }
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
        <Heading color="teal.400">RoomID: {roomid}</Heading>
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
                  ><CFaLock color="gray.300" /></InputLeftElement>
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
        Need password ?{" "}
        <Link  href={'/'}>
          Ask for in public room
        </Link>
      </Box>
    </Flex>
  );
};

export default RoomLogin;
export async function getServerSideProps(context){
  const session=await getSession({req:context.req})
     const name=session.user.name
    const email=session.user.email
    if (!(context.params.id=="public" || context.params.id=="pv1")){
        return {
      redirect:{
        destination:'/',
        permanent:false
      }
    }
    }
  if (!session){
    return {
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }

  return {
    props:{
      session
    }
  }}

