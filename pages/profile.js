import {getSession} from "next-auth/client";
import {Flex, Heading, useColorModeValue} from "@chakra-ui/react"

export default function login(){
    return(
        <Flex>
           <Heading
                color="gray.200"
               as="h1" size="4xl" isTruncated>Profile</Heading>
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