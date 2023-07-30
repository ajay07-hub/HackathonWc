import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" style={{ background: '#2E3B55' }}>
            <Toolbar style={{
               
            }}>
                <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none' }}>
                    HOME PAGE
                </Typography>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button component={Link} to="/schedule" color="inherit" >
                <Typography variant="h6">
                    Schedule Page
                </Typography>
                </Button>
                
            </Toolbar>
        </AppBar>
    );
};

export default Header;
