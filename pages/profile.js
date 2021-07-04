import Link from 'next/link'
import {
    Fade, ScaleFade, Slide, SlideFade,
    Divider,
    Box,
    Heading,
    Text,
    Button,
    Center,
    Square,
    Circle,
    Stack,
    Flex,
    useColorModeValue
} from "@chakra-ui/react"
import {useState} from "react";

export default function Home(){
    const [anim,setanim]=useState(false)
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
  <Heading  color={useColorModeValue("black","white")} mb={4}>Profile page</Heading>
  <Text fontSize="xl">
    Manage your account here
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