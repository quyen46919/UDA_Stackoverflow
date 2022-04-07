import { ExpandLess, ExpandMore, Home, LibraryBooks, Logout, School, Settings } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';
import { Avatar, Collapse, Divider, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material';
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
import { Link, useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const PAPERSTYLES = {
    elevation: 0,
    sx: {
        overflow: 'visible',
        border: `1px solid ${blue[600]}`,
        mt: 0.6,
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
            top: -1,
            right: 20,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
            borderLeft: `1px solid ${blue[600]}`,
            borderTop: `1px solid ${blue[600]}`
        }
    }
};

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [open, setOpen] = useState(true);
    const history = useHistory();

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

    const handleLinktoUrlClick = (url) => {
        setAnchorEl(null);
        setMobileMoreAnchorEl(null);
        history.push(`/${url}`);
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
            PaperProps={PAPERSTYLES}
            sx={{ '& svg, & p': { color: grey[500] } }}
        >
            <MenuItem sx={{ pt: 1.2, pb: 1.2, minWidth: 200 }}>
                <ListItemIcon>
                    <AccountCircle sx={{ color: `${blue[600]}!important` }}/>
                </ListItemIcon>
                <ListItemText
                    sx={{ color: grey[700], pr: 1, pl: 1, '& span': { fontSize: 16 } }}
                    onClick={() => handleLinktoUrlClick('profile')}
                >
                    Tài khoản
                </ListItemText>
            </MenuItem>
            <MenuItem sx={{ pt: 1.2, pb: 1.2 }}>
                <ListItemIcon>
                    <Logout sx={{ color: `${blue[600]}!important` }}/>
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
            PaperProps={PAPERSTYLES}
            id={mobileMenuId}
            keepMounted
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            sx={{
                '& svg': { color: blue[600] },
                '& ul li': { pt: 1, pb: 1, minWidth: 220 },
                '& ul li p': { pl: 3, color: grey[600] }
            }}
        >
            <MenuItem onClick={() => handleLinktoUrlClick('home')}>
                <Home/>
                <Typography>Trang chủ</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleLinktoUrlClick('blogs')}>
                <LibraryBooks/>
                <Typography>Blogs</Typography>
            </MenuItem>
            <Divider sx={{ width: '100%', m: '0 auto', bgcolor: grey[50] }}/>
            <MenuItem onClick={() => handleLinktoUrlClick('annoucement')}>
                <MailIcon/>
                <Typography>Tin nhắn</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleLinktoUrlClick('profile')}>
                <NotificationsIcon/>
                <Typography>Thông báo</Typography>
            </MenuItem>
            <Divider sx={{ width: '100%', m: '0 auto', bgcolor: grey[50] }}/>
            <MenuItem
                onClick={handleClick}
                sx={{
                    pt: 1, pb: 1, pl: 2.5,
                    '& svg': {
                        color: grey[400], ml: 'auto!important'
                    }
                }}>
                <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 34, height: 34 }}
                    src="https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg"
                />
                <Typography sx={{ pl: '10px!important' }}>Tài khoản</Typography>
                {
                    open ? <ExpandLess /> : <ExpandMore />
                }
            </MenuItem>
            <Collapse in={open}>
                <List
                    component="div"
                    disablePadding
                    sx={{
                        '& a': {
                            textDecoration: 'none',
                            color: 'inherit'
                        },
                        color: grey[600]
                    }}
                >
                    <ListItemButton sx={{ p: 0.7, pl: 3 }}>
                        <Settings sx={{ mr: 2, color: grey[500] }}/>
                        <ListItemText
                            primary="Cài đặt tài khoản"
                            onClick={() => handleLinktoUrlClick('profile')}
                        />
                    </ListItemButton>
                    <ListItemButton sx={{ p: 0.7, pl: 3 }}>
                        <Logout sx={{ mr: 2, color: grey[500] }}/>
                        <ListItemText
                            primary={<Link to="/login">Đăng xuất</Link>}
                        />
                    </ListItemButton>
                </List>
            </Collapse>
        </Menu>
    );

    return (
        <Container maxWidth="xl"
            id="scroller"
            sx={{
                p: '0px!important',
                position: 'sticky',
                top: 0,
                bgcolor: '#fff',
                zIndex: 999
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                    borderBottom: `1px solid ${grey[200]}`,
                    height: 70

                }}
            >
                <Toolbar sx={{
                    height: '100%',
                    '& a': {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: blue[500]
                    }
                }}>
                    <Link to="/home">
                        <School sx={{ mr: { xs: 1.5, md: 1 } }} fontSize="large"/>
                        <Typography
                            noWrap
                            component="div"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                fontWeight: 600,
                                fontSize: 24
                            }}
                        >
                            UDA Stackoverflow
                        </Typography>
                    </Link>
                    <Box sx={{
                        pl: {
                            xs: 0,
                            md: 3,
                            lg: 6
                        },
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        gap: { xs: 0, md: 2, lg: 3 },
                        transition: 'all .15s ease',
                        '& a': {
                            textDecoration: 'none',
                            color: blue[600],
                            fontWeight: 600,
                            fontFamily: 'Nunito',
                            transition: 'all .15s ease',
                            position: 'relative'
                        },
                        '& a.active': {
                            color: blue[800]
                        },
                        '& a::before': {
                            height: 0,
                            width: 0,
                            transition: 'all .15s ease'
                        },
                        '& a.active::before': {
                            content: '""',
                            position: 'absolute',
                            bottom: -24,
                            left: 0,
                            width: '100%',
                            height: '2px',
                            bgcolor: blue[800],
                            borderRadius: 10
                        }
                    }}>
                        <NavLink to="/home" exact>
                            Trang chủ
                        </NavLink>
                        <NavLink to="/blogs" exact>
                            Blogs
                        </NavLink>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Nhập từ khóa tìm kiếm..."
                            sx={{
                                mr: 1,
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
                        <Box sx={{ ml: 2, display: { xs: 'none', md: 'block' } }}>
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

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            sx={{
                                width: 42,
                                height: 42,
                                color: grey[400],
                                borderRadius: 1,
                                '& span': { borderRadius: '8px!important' }
                            }}
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
