import Link from 'next/link'
import { Button, Center, Square, Circle } from "@chakra-ui/react"

export default function Home(){
    return(
        <div>
            <Center  h="100px" color="white">
 <Link href={'/chat'}>
                <Button colorScheme="teal" size="lg">
    Join Chat
  </Button>
            </Link>
</Center>


        </div>
    )
}