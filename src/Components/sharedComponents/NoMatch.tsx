import React from 'react';
import {Box} from '@mui/material'

const NoMatch = () => {
    return(
    <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={require('../../assets/img/404.png')}/>
    </Box>);
}

export default NoMatch;