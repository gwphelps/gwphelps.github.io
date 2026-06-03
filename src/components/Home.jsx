import { TextField, Stack, CardMedia, CardContent, Typography, Card, Box, Dialog, DialogTitle, Button, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
function Home({ pages }) {
    const cardSx = {
        m: 1,
        display: "flex",
        justifyContent: "center",
        textDecoration: "none",
        backgroundColor: "primary.main",
        "&:hover" : {
            cursor: "pointer",
            //border: "2px solid black"
            //boxShadow: 10
        }
    }
    return (
        <>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box sx={{maxWidth: "sm", display: "flex", flexDirection: "column", width: "100%"}}>
                    <Card sx={{m: 1, display: "flex", flexWrap: "wrap"}}>
                        <CardContent sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <CardMedia
                                component="img"
                                sx={{ maxWidth: "50%" }}
                                image="./images/anko.jpg"
                                alt=""
                            />
                        </CardContent>
                        
                        <CardContent sx={{  }}>
                            <Typography>
                                Welcome to my fuckass website. This site is a companion to Twitter/X account @chet1620, chet aka Brilliant Detective Anko Uguisu. I write shitty blog posts that are essentially longer versions of my tweets, and since I'm a nerd sometimes I put webapps I make here too.
                            </Typography>
                        </CardContent>
                    </Card>
                        {
                            pages.map((page) => {
                                return (
                                    <Card component={RouterLink} to={page.path} sx={cardSx}>
                                        <CardContent>
                                            <Typography sx={{color: "white"}}>{page.name}</Typography>
                                        </CardContent>
                                    </Card>
                                )
                            })
                        }
                </Box>
            </Box>
        </>
    );
}

export default Home;