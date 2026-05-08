import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MatLink } from '@mui/material';

export default function ButtonAppBar({ title }) {
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Toolbar sx={{pl: 0, pr: 0}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton
            onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': buttonId,
              },
            }}
          >
            <MatLink component={RouterLink} underline="none" color="inherit" to="/"><MenuItem onClick={handleClose}>Home</MenuItem></MatLink>
            <MatLink component={RouterLink} underline="none" color="inherit" to="/animetoanime"><MenuItem onClick={handleClose}>AnimeToAnime</MenuItem></MatLink>
            <MatLink component={RouterLink} underline="none" color="inherit" to="/blog"><MenuItem onClick={handleClose}>Blog</MenuItem></MatLink>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
