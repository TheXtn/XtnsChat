import {useColorModeValue, chakra, Center, Heading, Grid, Box, GridItem, Stack, Flex} from "@chakra-ui/react"
import Ma from "../../components/UI/Card";
export default function ch(){
    return(

        <Center h="100px">



        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
    <Box w="100%" h="10"  >
        <Ma title={"Public Room"} desc={"10 users"} link={"/chat/public"} img={"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}></Ma>
    </Box>
             <Box w="100%" h="10"  >
        <Ma title={"Private Room 1"} desc={"5 users"} link={"/chat/pv1"} img={"https://images.unsplash.com/photo-1574790398664-0cb03682ed1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"}></Ma>
    </Box>

</Grid>
</Center>

        )

}