import { useTheme } from '@emotion/react';
import { ExpandLess, ExpandMore, Logout, School, Settings } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';
import { Avatar, Collapse, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, TextField, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { blue, grey } from '@mui/material/colors';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const isLaptop = useMediaQuery(theme.breakpoints.up('sm'));

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            id={menuId}
            keepMounted
            open={isMenuOpen}
            onClose={handleMenuClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.24))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 20,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0
                    }
                }
            }}
            sx={{ '& svg, & p': { color: grey[500] } }}
        >
            <MenuItem sx={{ pt: 1.2, pb: 1.2, minWidth: 200 }}>
                <ListItemIcon>
                    <AccountCircle/>
                </ListItemIcon>
                <ListItemText sx={{ color: grey[700], pr: 1, pl: 1, '& span': { fontSize: 16 } }}>Tài khoản</ListItemText>
            </MenuItem>
            <MenuItem sx={{ pt: 1.2, pb: 1.2 }}>
                <ListItemIcon>
                    <Logout/>
                </ListItemIcon>
                <ListItemText sx={{
                    color: grey[700],
                    pr: 1, pl: 1,
                    '& span': { fontSize: 16 },
                    '& a': {
                        textDecoration: 'none',
                        color: 'inherit'
                    }
                }}>
                    <Link to="/login">
                        Đăng xuất
                    </Link>
                </ListItemText>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.24))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 20,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0
                    }
                }
            }}
            id={mobileMenuId}
            keepMounted
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem sx={{ pt: 0, pb: 0, minWidth: 200, width: 220 }}>
                <Badge badgeContent={4} sx={{ '& span': { backgroundColor: blue[400], color: 'white' } }}>
                    <MailIcon sx={{ color: grey[400], pl: 1 }}/>
                </Badge>
                <Typography sx={{ pl: 3, color: grey[600] }}>Tin nhắn</Typography>
            </MenuItem>
            <MenuItem sx={{ pt: 0, pb: 0 }}>
                <Badge badgeContent={17} sx={{ '& span': { backgroundColor: blue[400], color: 'white' } }}>
                    <NotificationsIcon sx={{ color: grey[400], pl: 1 }}/>
                </Badge>
                <Typography sx={{ pl: 3, color: grey[600] }}>Thông báo</Typography>
            </MenuItem>
            <MenuItem onClick={handleClick} sx={{ pt: 0, pb: 0, pl: 3.5 }}>
                <Avatar alt="Remy Sharp" sx={{ width: 34, height: 34 }}
                    src="https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg" />
                <Typography sx={{ pl: 1.4, color: grey[600] }}>Tài khoản</Typography>
                {open ? <ExpandLess sx={{ color: grey[400], pl: 1 }}/> : <ExpandMore sx={{ color: grey[400], pl: 1 }}/>}
            </MenuItem>
            <Collapse in={open}>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ p: 0.7, pl: 3 }}>
                        <Settings sx={{ mr: 2, color: grey[500] }}/>
                        <ListItemText primary="Cài đặt" sx={{ color: grey[600] }}/>
                    </ListItemButton>
                    <ListItemButton sx={{ p: 0.7, pl: 3 }}>
                        <Logout sx={{ mr: 2, color: grey[500] }}/>
                        <ListItemText
                            sx={{
                                '& a': {
                                    textDecoration: 'none',
                                    color: 'inherit'
                                },
                                color: grey[600]
                            }}
                            primary={<Link to="/login">Đăng xuất</Link>}
                        />
                    </ListItemButton>
                </List>
            </Collapse>
        </Menu>
    );

    return (
        <Container maxWidth="xl" sx={{ p: '0px!important' }}>
            <AppBar position="static"
                sx={{
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                    borderBottom: `1px solid ${blue[500]}`,
                    height: 70
                }}
            >
                <Toolbar sx={{ height: '100%' }}>
                    <School sx={{ mr: { xs: 1.5, md: 1 }, color: blue[500] }} fontSize="large"/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            color: blue[500], fontWeight: 600
                        }}
                    >
                        UDA Stackoverflow
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Nhập từ khóa tìm kiếm..."
                            sx={{
                                '.Mui-focused': { border: 'none', outline: 'none' },
                                '& ::placeholder': { fontSize: 16 },
                                '& svg': { color: grey[400], pr: 0 },
                                '& input': { color: grey[700] },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: grey[400]
                                    },
                                    '&:hover fieldset': {
                                        borderColor: blue[500]
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: blue[500]
                                    }
                                }
                            }}
                            spellCheck="false"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Search/></InputAdornment>
                            }}
                        />
                    </Box>
                    {
                        (isDesktop || isLaptop) && <Box sx={{ ml: 2 }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} sx={{ '& span': { backgroundColor: blue[400] } }}>
                                    <MailIcon sx={{ color: grey[400] }}/>
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} sx={{ '& span': { backgroundColor: blue[400] } }}>
                                    <NotificationsIcon sx={{ color: grey[400] }}/>
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                                sx={{ color: grey[400] }}
                            >
                                <Avatar alt="Remy Sharp" sx={{ width: 30, height: 30 }}
                                    src="https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg" />
                            </IconButton>
                        </Box>
                    }

                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            sx={{ color: grey[400] }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Container>
    );
}
