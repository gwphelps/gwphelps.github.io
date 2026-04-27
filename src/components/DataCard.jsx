import { useState, useEffect } from 'react'
import { TextField, Stack, CardMedia, CardContent, Typography, Card, Box } from '@mui/material';

function DataCard({ onClick, name, image }) {
    const cardSx = {
        display: 'flex',
        "&:hover" : {
            backgroundColor: "lightgray",
            cursor: "pointer",
            border: "1px solid black"
        }
    }
    return (
        <>
            <Card onClick={onClick} sx = {cardSx} variant="outlined">
                <CardMedia
                    component="img"
                    sx={{ width: 50 }}
                    image={image}
                    alt=""
                />
                <CardContent>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default DataCard;