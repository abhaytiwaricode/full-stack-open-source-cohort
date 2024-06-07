import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Appbar() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 2,
            }}
        >
            <Typography sx={{ marginRight: 2 }}>Coursera</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button component={Link} to="/signup" variant="contained">Sign up</Button>
                <Button component={Link} to="/signin" variant="outlined">Sign in</Button>
            </Box>
        </Box>
    );
}

export default Appbar;
