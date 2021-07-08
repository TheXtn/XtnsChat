import {Box, Button, Divider, Heading, ScaleFade, Text, useColorModeValue} from "@chakra-ui/react"
import NextImage from "next/image"
import img from "../public/code-review-bro.png"
import Link from "next/link";
export default function tet(){
const isOdd = (num) => num % 2
    return(
        <Box
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
              <ScaleFade reverse={true} initialScale={10} in={true}>
  <Box maxW="32rem">
  <Heading  color={useColorModeValue("black","white")} mb={4}>This is a realtime Nextjs Chat app</Heading>
  <Text fontSize="xl">
    Create an account &&
  </Text><Text fontSize="xl">
    Join Us !
  </Text>
      <Divider colorScheme={'purple'} size={"300"}/>
      <br/>
  <Link href={'/chat'}>
                <Button colorScheme="teal" size="lg">
    Join Chat
  </Button>
            </Link>
</Box>
                     </ScaleFade>
            </Box>
          </Box>
    )
}