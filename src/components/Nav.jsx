import { AppBar, Link, Toolbar, Typography, Button } from "@mui/material"
export default function Nav(){
    return(
            <AppBar style={{backgroundColor:"#20232a"}} position="static">
            <Toolbar >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>My Website</Typography>
                <Button color="inherit">HOME</Button>
                <Button color="inherit">ABOUT</Button>
                <Button color="inherit">CONTACT</Button>
            </Toolbar>
            </AppBar>
    )
}