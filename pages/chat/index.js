import {useColorModeValue, chakra, Center, Heading, Grid, Box, GridItem, Stack, Flex} from "@chakra-ui/react"
import Ma from "../../components/UI/Card";
import {useEffect, useState} from "react";
import {getSession} from "next-auth/client";
export default function Homechat(props){
    const rooms=props.rooms
    const showrooms=rooms.map((room)=>{
        return(
            <Box key={room._id} w="100%" h="10"  >
        <Ma title={room.title} desc={room.desc} link={"chat/"+room.link} img={room.img}></Ma>
    </Box>
        )
    })
    return(

        <Center h="100px">

        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {showrooms}

</Grid>
</Center>

        )

}
export async function getServerSideProps(context){
  const res=await fetch(process.env.APISERVER+'/api/rooms/getrooms')
    const data=await res.json()
  return {
    props:{
      rooms:data.data
    }
  }
}