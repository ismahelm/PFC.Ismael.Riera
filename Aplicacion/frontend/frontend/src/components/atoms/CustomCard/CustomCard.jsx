import { Card } from "@mui/material";

const CustomCard=({width,heigth, children, direction="column"})=>{
    return(
        <Card
        sx={{
            width: width,
            height: heigth,
            display: "flex",
            flexDirection: direction,
            justifyContent: "center",
            alignItems: "center"
        }}
        >
                {children}
        </Card>
    )
}
export default CustomCard