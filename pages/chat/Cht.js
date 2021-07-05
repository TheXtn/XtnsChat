import { Grid,Box, GridItem } from "@chakra-ui/react"
import Ma from "../../components/UI/Card";
export default function ch(){
    return(
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
    <Box w="100%" h="10"  >
        <Ma title={"Public Room"} desc={"10 users"} link={"/chat/public"}></Ma>
    </Box>
             <Box w="100%" h="10"  >
        <Ma title={"Private Room 1"} desc={"5 users"} link={"/chat/pv1"}></Ma>
    </Box>

</Grid>

        )

}