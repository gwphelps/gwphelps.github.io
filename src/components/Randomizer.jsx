import { useState, useEffect, useRef } from 'react'
import { Button, Card, Stack, Typography } from '@mui/material';
import DataCard from './DataCard';

function Randomizer({reverseToAndFrom, setToAndFrom, fromAnime, toAnime}) {
    

    const mySx = {
        display: "flex",
        alignItems: "center"
    };

    return (
        <>
            <Card>
                <Stack direction="row" spacing={1} sx={mySx}>
                    <Typography>From:</Typography>
                    <DataCard name={fromAnime.name} image={fromAnime.image}/>
                    <Typography>To:</Typography>
                    <DataCard name={toAnime.name} image={toAnime.image}/>
                </Stack>
                <Button onClick={setToAndFrom}>Randomize</Button>
                <Button onClick={reverseToAndFrom}>Reverse</Button>
            </Card>
            
            
        </>
    );
}

export default Randomizer;