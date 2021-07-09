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
import Mod from "../components/UI/Modal";
import NextImage from "next/image";
import img from "../public/Settings.svg";

export default function Home(){
    const [anim,setanim]=useState(false)
    return(




         <Box
 min-height='100%'
    height='100%'
            d={{ lg: "flex" }}
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}

            key={2}
          >
            <Box
              w={{ base: "80%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}

            >
              <NextImage
                src={img}
                width="500"
                height="500"
                alt={"Hello"}
                placeholder="blur"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
              />
            </Box>

            <Box w={{ lg: "50%" }}>
               <ScaleFade reverse={true} initialScale={3} in={true}>
  <Box maxW="32rem">
  <Heading  color={useColorModeValue("black","white")} mb={4}>Profile page</Heading>
  <Text fontSize="xl">
    Manage your account here
  </Text>
      <Divider colorScheme={'purple'} size={"300"}/>
      <br/>
  <Mod/>


</Box>
                     </ScaleFade>
            </Box>
             <br/>
              <br/>
               <br/>
          </Box>


    )
}