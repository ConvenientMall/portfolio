import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../css/Navbar.css';
const navItems = ['Home','Projects', 'About', 'Contact'];
const theme = createTheme({
    palette: {
      primary: {
        main: '#1f3864',
      },
      secondary: {
        main: '#000000',
      },
    },
  });

function Navbar() {
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
        <Typography color="primary" variant="h3" className="tahoma-font">
            JINSU HWANG
        </Typography>
        
        <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
        <Box  m="auto" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
               <Button size="small" key={item}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>


        </Box>
        </ThemeProvider>
      );
}
export default Navbar;