import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button, useToast,Spinner
} from "@chakra-ui/react"
import React, {useState} from "react";
import { useDisclosure } from "@chakra-ui/react"
import {useRouter} from "next/router";
export default function Mod() {
 const { isOpen, onOpen, onClose } = useDisclosure()
    const router=useRouter()
    const [oldpass,setoldpass]=useState('')
    const [newpass,setnewpass]=useState('')
    const [loading,setloading]=useState(false)
    const toast=useToast()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
    async function hsubmit(e){
     setloading(true)
     e.preventDefault()
        const data={
        oldPassword:oldpass,
        newPassword:newpass
    }
     const res=await fetch('/api/auth/Changepwd',{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{'Content-Type':'application/json'}
    })
    const lastdata=await res.json()
        if (res.status==200){
            toast({
          title: "Done.",
          description: lastdata.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        })
            setloading(false)
            router.replace('/profile')

        }
        else{
                        setloading(false)

            toast({
          title: "Error.",
          description: lastdata.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        })
        }
    }
  return (
    <>
      <Button colorScheme="teal" size="lg" onClick={onOpen}>Settings</Button>



      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
          <form onSubmit={hsubmit}>
        <ModalContent>


          <ModalHeader>Update Your Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>


            <FormControl>
              <FormLabel>Old password</FormLabel>
              <Input value={oldpass} type={'password'} placeholder="Old password" onChange={(e)=>setoldpass(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>New password</FormLabel>
              <Input value={newpass} type={'password'} placeholder="Password" onChange={(e)=>setnewpass(e.target.value)} />
            </FormControl>

          </ModalBody>

          <ModalFooter>
              {loading?<Spinner size="xl" />:<>
                  <Button type="submit" colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
              </>}


          </ModalFooter>
        </ModalContent>
               </form>
      </Modal>
    </>
  )
}