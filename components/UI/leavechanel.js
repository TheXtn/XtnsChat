import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
    Button,
    Spinner,
} from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
export default function LeaveRoom() {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()
    const toast=useToast()
  const [loading,setloading]=useState(false)
  const router=useRouter()
  const id=router.query.id
  async function leave(){
    setloading(true)
   const res=await fetch('/api/rooms/leaveroom/'+id)
    if (res.status==200){
      setloading(false)
      toast({
          title: "Room ID: "+id,
          description: "Successfully left",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      router.replace('/chat')

    }
  }
  return (
    <>
      <Button colorScheme="red" onClick={() => setIsOpen(true)}>
        Leave Room
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="xl" fontWeight="bold">
                  Leave Room?
            </AlertDialogHeader>

            <AlertDialogBody fontSize="xl">
              Are you sure? You need password for next time joining.
            </AlertDialogBody>

            <AlertDialogFooter>

                {loading?<Spinner size="xl" />: <div><Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button><Button colorScheme="red" onClick={leave} ml={3}>
                Leave
              </Button></div>}



            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}