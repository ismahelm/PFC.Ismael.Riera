import { Card } from "@mui/material";

const CustomCard=({width="600px",heigth="350px", children, direction="column"})=>{
    return(
        <Card
        sx={{
            width: width,
            height: heigth,
            display: "flex",
            flexDirection: direction,
            justifyContent: "center",
            alignItems: "center", padding: "5px"
        }}
        >
                {children}
        </Card>
    )
}
export default CustomCard