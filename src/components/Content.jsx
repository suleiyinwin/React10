import { Box, Toolbar, Typography, Button, Card, CardContent, Grid,CardMedia } from "@mui/material"
import { sizing } from '@mui/system';

export default function Content(){
    return(
        <Grid sx={{p:1}}>
            <Box>
            <Typography variant="h4">
                Welcome to My Website
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veritatis cupiditate quasi nemo voluptatum! Ipsa, quasi possimus nobis harum voluptatibus ducimus, odit aperiam quam quibusdam quisquam iure natus accusantium illo.<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio consectetur in excepturi velit. Cum illum exercitationem quae corporis tenetur ipsum, ex impedit facere dolorum nostrum aperiam maiores sed voluptatem.
            </Typography>
            </Box>
            <Grid container rowSpacing={3}  columnSpacing={3} >
                <Grid item sx={{ width:'50%' }}>
                    <Card >
                    <CardMedia
                        sx={{ height: 140 }}
                        image="./assets/1.jpeg"
                        
                    />
                    <CardContent>
                        <Typography variant="h6">
                            Card Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam vitae magnam quaerat, repudiandae ducimus error quos molestiae quidem! Veniam fugit pariatur laboriosam eum inventore iste obcaecati nesciunt eius sunt velit?
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item sx={{ width:'50%' }}>
                    <Card >
                    <CardMedia
                        sx={{ height: 140 }}
                        image="./assets/1.jpeg"
                        
                    />
                    <CardContent>
                        <Typography variant="h6">
                            Card Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam vitae magnam quaerat, repudiandae ducimus error quos molestiae quidem! Veniam fugit pariatur laboriosam eum inventore iste obcaecati nesciunt eius sunt velit?
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item sx={{  width:'50%' }}>
                    <Card >
                    <CardMedia
                        sx={{ height: 140 }}
                        image="./assets/1.jpeg"
                        
                    />
                    <CardContent>
                        <Typography variant="h6">
                            Card Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam vitae magnam quaerat, repudiandae ducimus error quos molestiae quidem! Veniam fugit pariatur laboriosam eum inventore iste obcaecati nesciunt eius sunt velit?
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                
            </Grid>
            
        </Grid>
        
    )
}