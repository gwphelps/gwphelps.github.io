import { useState, useEffect, useRef } from 'react'
import { TextField, Stack, CardMedia, CardContent, Typography, Card, Box, Dialog, DialogTitle, Button, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import DataCard from './DataCard';
import Randomizer from './Randomizer';
import api from '../api';
import ButtonAppBar from './ButtonAppBar';
import LoadingPopup from './LoadingPopup';

function Game() {
    const [showMode, setShowMode] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [fromAnime, setFromAnime] = useState({});
    const [toAnime, setToAnime] = useState({});
    const [data, setData] = useState([])
    const [path, setPath] = useState([]);
    const [victory, setVictory] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Victory!");
    const [isLoading, setIsLoading] = useState(true);

    const hasFetched = useRef(false);
    
    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        setToAndFrom();
    }, []);

    useEffect(() => {
        if(path.length > 0 && path.at(-1).id == toAnime.id){
            setVictory(true);
        }
        else{
            setVictory(false);
        }
    }, [path])

    useEffect(() => {
        if(fromAnime.id != null){
            setPath([fromAnime]);
            setData(fromAnime.actors);
            setShowMode(false);
        }
    }, [fromAnime]);
    
    useEffect(() => {
        setInputValue("");
    }, [data]);



    function setToAndFrom(){
        setIsLoading(true);
        getRandomAnime().then((data) => {
            setData(data.actors);
            setFromAnime(data);
        }).then(() => getRandomAnime()).then((data) => {
            setToAnime(data);
        }).then(() => setIsLoading(false));
    }

    function getRandomAnime(){
        const num = Math.floor(Math.random() * 61000);
        return api.getAnimeById(num)
            .then((data) => {
                return api.getActorsByAnimeId(data.id).then(actors => {
                    if(actors.length == 0){
                        console.log("not valid: " + data.id);
                        return getRandomAnime();
                    }
                    data.actors = actors;
                    return data;
                });
            })
            .catch((res) => getRandomAnime());
    }

    function getNewData(id){
        if(showMode){
            api.getActorsByAnimeId(id).then(data => {
                setData(data);
                setShowMode(false);
            })
        }
        else{
            api.getAnimeByActorId(id).then(data => {
                setData(data);
                setShowMode(true);
            })
            
        }
    }

    function handleItemClick(item){
        setPath([...path, item]);
        getNewData(item.id);
    }

    function reverseToAndFrom(){
        const temp = fromAnime;
        setFromAnime(toAnime);
        setToAnime(temp);
    }

    function handleClose() {
        setVictory(false);
    }

    function resetGame(){
        handleClose();
        setToAndFrom();
    }

    function calculatePathLength(){
        return (path.length - 1) / 2;
    }

    const mySx = {
        display: "flex",
        alignItems: "center"
    };


    return (
        <>
            <ButtonAppBar />
            <Box sx={{display: isLoading ? "none" : "flex", justifyContent: "center", }}>
                <Box sx={{maxWidth: "md"}}>
                    <Randomizer reverseToAndFrom={reverseToAndFrom} setToAndFrom={setToAndFrom} fromAnime={fromAnime} toAnime={toAnime}/>
                    <Stack direction="row">
                        {
                            path.map((item) => {
                                return (
                                    <Stack direction="row" sx={mySx}>
                                        <img src={item.image} width={50}></img>
                                        {path.at(-1).id != item.id ? <Typography>&gt;</Typography> : <Typography>{item.name}</Typography>}
                                    </Stack>
                                )
                            })
                        }
                    </Stack>
                    <TextField
                        fullWidth 
                        variant="outlined" 
                        placeholder='search' 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}/>
                    <Stack direction="column" spacing={1}>
                    {
                        data
                            .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
                            .map((item) => <DataCard onClick={(e) => handleItemClick(item)} image={item.image} name={item.name}/>)
                    }
                    </Stack>
                </Box>
            </Box>
            <Dialog
                open={victory}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog">
                <DialogTitle id="alert-dialog-title">
                    {"Victory!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Path Length: {calculatePathLength()}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                    <Button onClick={resetGame}>Play Again</Button>
                </DialogActions>
            </Dialog>
            <LoadingPopup isLoading={isLoading}/>  
        </>
    
    
    );
}
export default Game;