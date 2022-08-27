import React from "react"
import {Link} from "react-router-dom";

import RouterBreadcrumbs from './RouterBreadcrumbs'
import { isAuth } from "./Utils";

import {AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Tooltip} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

type props = {
    setAuth : (auth:boolean)=>void
}

const Header = ({setAuth}:props) =>{
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const settings = [
        {
            name: 'پروفایل',
            onClick: () => {
                setAnchorElUser(null);
            },
            href: '#'
        },
        {
            name: 'خروج',
            onClick: () => {
                window.localStorage.removeItem('auth-token');
                setAuth(isAuth());
                setAnchorElUser(null);
            },
            href: '../login'
        }
    ];

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return(
        <AppBar position="fixed" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                
                <Box sx={{ flexGrow: 1, display: 'flex'}}>
                    <RouterBreadcrumbs/>
                </Box>

                <Box sx={{ flexGrow: 0}}>
                <IconButton aria-label="delete" sx={{marginLeft: 2}}>
                    <NotificationsNoneIcon  />
                </IconButton>
                    <Tooltip title="پروفایل">
                    <IconButton onClick={(event) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
                        <Avatar  />
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting.name} onClick={setting.onClick}>
                            {/* <Typography textAlign="center">{setting.name}</Typography> */}
                            <Link to={setting.href}>{setting.name}</Link>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;