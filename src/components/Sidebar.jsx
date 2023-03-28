import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from '@mui/icons-material/Home';
import { AccountBox, Article, Group, Pages, Person, Settings, Storefront } from "@mui/icons-material";
import StorefrontIcon from '@mui/icons-material/Storefront';
export default function SideBar(){
    return(
        <Box container sx={{ justifyContent: 'flex-end'}} display="flex">
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Homepage"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Article/>
                </ListItemIcon>
                <ListItemText primary="Pages"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Group/>
                </ListItemIcon>
                <ListItemText primary="Groups"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Storefront/>
                </ListItemIcon>
                <ListItemText primary="Marketplace"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Person/>
                </ListItemIcon>
                <ListItemText primary="Friends"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Settings/>
                </ListItemIcon>
                <ListItemText primary="Setting"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AccountBox/>
                </ListItemIcon>
                <ListItemText primary="Profile"/>
            </ListItemButton>
            
        </List>
    </Box>
    )
}