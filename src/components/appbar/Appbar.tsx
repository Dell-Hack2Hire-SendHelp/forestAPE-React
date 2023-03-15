import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar, Box, Toolbar, IconButton, Typography,
    Menu, Container, Avatar, Button, Tooltip, MenuItem
} from '@mui/material';

import MenuIcon from "@mui/icons-material/Menu";



const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];
const userControls = [
    { name: "Logout", href: "/logout" },
];


function Appbar() {
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>( null );
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>( null );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigateTo = (href: string)=> {
        navigate(href);
        handleCloseNavMenu();
        handleCloseUserMenu();
    }





    return (
        <AppBar position="sticky" >
        <Container maxWidth="xl">
        <Toolbar disableGutters>

            {/* Logo on Large Screen */}
            <Button onClick={()=> navigateTo("/")} className='hidden md:flex'>
                <img 
                    src="/images/APELogo.png" 
                    alt="ForestAPE Logo" 
                    className='mr-3 w-11 h-11 p-1 rounded-full bg-white'
                />

                <Typography className="text-white normal-case font-bold text-xl md:flex font-['Cantora_One']">
                    ForestAPE
                </Typography>
            </Button>

            
            {/* Pages Menu on Small Screen */}
            <Box className='grow flex md:hidden'>
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={handleOpenNavMenu}
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    keepMounted
                    anchorOrigin={{ vertical: "bottom", horizontal: "left", }}
                    transformOrigin={{ vertical: "top", horizontal: "left", }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    className='block md:hidden'
                >
                    {
                        pages.map(({ name, href }) => (
                            <MenuItem key={name} onClick={()=> navigateTo(href)}>
                                <Typography textAlign="center">{name}</Typography>
                            </MenuItem>
                        ))
                    }
                </Menu>
            </Box>

            
            {/* Logo on small screen */}
            <Button onClick={()=> navigateTo("/")} className='grow flex md:hidden'>
                <img 
                    src="/images/APELogo.png" 
                    alt="ForestAPE Logo" 
                    className='mr-4 w-11 h-11 p-1 rounded-full bg-white'
                />

                <Typography className='text-white normal-case font-bold text-xl flex grow font-["Cantora_One"]'>
                    ForestAPE
                </Typography>
            </Button>

            
            {/* Pages on Large Screen */}
            <Box className='hidden md:flex grow ml-4 font-bold'>
                {
                    pages.map(({ name, href }) => (
                        <Button
                            key={name}
                            onClick={()=> navigateTo(href)}
                            className='text-white font-["Cantora_One"]'
                        >
                            {name}
                        </Button>
                    ))
                }
            </Box>
            
            
            {/* Avatar Controls */}
            <Box className='grow-0 flex items-center gap-3'>

                <Button className='text-white font-["Cantora_One"]' onClick={()=> navigateTo('/signin')}>
                    Sign in
                </Button>

                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} className='p-0'>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" className='bg-green-500'/>
                    </IconButton>
                </Tooltip>

                <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    keepMounted
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {
                        userControls.map(({ name, href }) => (
                            <MenuItem key={name} onClick={()=> navigateTo(href)}>
                                <Typography textAlign="center">{name}</Typography>
                            </MenuItem>
                        ))
                    }
                </Menu>
            </Box>

        </Toolbar>
        </Container>
        </AppBar>
    );
}



export default Appbar;
