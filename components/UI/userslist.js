import React, {useEffect, useState} from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
    Button,
    useDisclosure,
    Heading,Avatar, Badge, Box, Flex, Text
} from "@chakra-ui/react"
import {useRouter} from "next/router";

export default function DrawerExample() {
  const router=useRouter()
  const id=router.query['id']
  const [users,setusers]=useState([])
  useEffect(()=>{

    const fetchdata=async ()=>{
      const res=await fetch("/api/rooms/roomusers/"+id)
          const data=await res.json()
      setusers(Object.keys(data.message[0]))


    }
    if (id!="public"){
      fetchdata()
    }

  },[])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const showusers=users.map((user)=>{
    return(
<div>




 <Flex>
  <Avatar src="https://bit.ly/sage-adebayo" />
  <Box ml="3">
    <Text fontWeight="bold">
      {user}
      <Badge ml="1" colorScheme="green">
        Dev
      </Badge>
    </Text>
    <Text fontSize="sm">Engineer</Text>
  </Box>
</Flex>
<br/>
</div>



    )
  })
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Users
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Users have access to this room</DrawerHeader>

          <DrawerBody>
            {showusers}

          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue">Leave room</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
