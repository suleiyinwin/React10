import { ImageList, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Rightbar(){
    return(
        <Box flexDirection={"column"} >
            <Typography variant="h6">Latest Photos</Typography>
            <ImageList sx={{width:250}}>
            <ImageListItem >
                <img src="./assets/3.jpeg"/>
            </ImageListItem>
            <ImageListItem >
                <img src="./assets/3.jpeg"/>
            </ImageListItem>
            <ImageListItem >
                <img src="./assets/3.jpeg"/>
            </ImageListItem>
            <ImageListItem >
                <img src="./assets/3.jpeg"/>
            </ImageListItem>
            
            </ImageList>
        </Box>
        
    )
}