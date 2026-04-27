import { useState, useEffect, useRef } from 'react'
import { CircularProgress, TextField, Stack, CardMedia, CardContent, Typography, Card, Box, Dialog, DialogTitle, Button, DialogContent, DialogContentText, DialogActions } from '@mui/material';

function LoadingPopup({ isLoading }) {
    function handleClose() {
        console.log("loading done");
    }
    return (
        <Dialog
            open={isLoading}
            onClose={handleClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            role="alertdialog"
        >
            <DialogTitle id="alert-dialog-title">Loading...</DialogTitle>
            <DialogContent sx={{ display: 'flex', justifyContent: "center"}}>
                <CircularProgress aria-label="Loading…" />
            </DialogContent>
        </Dialog>
    );
}

export default LoadingPopup;