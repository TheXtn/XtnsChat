import {getSession} from "next-auth/client";
import {Box, Button, Divider, Flex, Heading, ScaleFade, Stack, Text, useColorModeValue} from "@chakra-ui/react"
import {Center} from "@chakra-ui/react";
import Link from "next/link";

export default function login(){
    return(
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
            <Center  h="100px">


                <ScaleFade reverse={true} initialScale={10} in={true}>
  <Box maxW="32rem">
  <Heading  color={useColorModeValue("black","white")} mb={4}>Profile Page</Heading>
  <Text fontSize="xl">
    Manage your account here.
  </Text>
      <Divider colorScheme={'purple'} size={"300"}/>
      <br/>

                <Button colorScheme="teal" size="lg">
    Settings
  </Button>

</Box>
                     </ScaleFade>
</Center>


        </Stack>
        </Flex>

    )
}
export async function getServerSideProps(context){
  const session=await getSession({req:context.req})
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
  }
}