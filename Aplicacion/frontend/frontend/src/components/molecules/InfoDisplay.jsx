import { Box } from "@mui/material";
import Title from "../atoms/Title/Title";

const InfoDisplay =({field, value})=>
{
    return(
        <Box
        sx={{display: "flex",
            flexDirection: "row", 
        }}
        >
            <Title text={field} fontSize={"20px"}/>
            <Title text={":"} fontSize={"20px"}/>

            <Title text={value} italic fontSize={"20px"} marginLeft={"5px"}/>

        </Box>
    )
}
export default InfoDisplay