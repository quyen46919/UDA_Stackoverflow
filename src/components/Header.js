import { Brightness4, Campaign, ExpandLess, ExpandMore, Home, LibraryBooks, LightMode, Logout, ModeNight, School } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BlockIcon from '@mui/icons-material/Block';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Collapse, Divider, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, Popover, TextField } from '@mui/material';
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

const POPOVER_STYLES = {
    transform: 'translate(-2px, 5px)!important',
    boxShadow: 0,
    '& .MuiPopover-paper': {
        border: `1px solid ${blue[700]}`,
        boxShadow: 0
    },
    '& .MuiPopover-paper li': {
        pt: 1.2, pb: 1.2, color: grey[600]
    },
    '& .MuiPopover-paper li svg': {
        mr: 2, color: blue[600]
    }
};

export default function Header() {
    const [popupAnchorEl2, setPopupAnchorEl2] = useState(null);

    const handlePopUpClick2 = (event) => {
        setPopupAnchorEl2(event.currentTarget);
    };

    const handlePopupClose2 = () => {
        setPopupAnchorEl2(null);
    };

    const popupOpen2 = Boolean(popupAnchorEl2);
    const idPopup2 = popupOpen2 ? 'simple-popover' : undefined;

    const [popupAnchorEl, setPopupAnchorEl] = useState(null);

    const handlePopUpClick = (event) => {
        setPopupAnchorEl(event.currentTarget);
    };

    const handlePopupClose = () => {
        setPopupAnchorEl(null);
    };

    const popupOpen = Boolean(popupAnchorEl);
    const idPopup = popupOpen ? 'simple-popover' : undefined;
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [openSystemCollapse, setOpenSystemCollap] = useState(false);
    const [showAccountCollapse, setShowAccountCollapse] = useState(false);
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

    const handleShowSystemCollapse = () => {
        setOpenSystemCollap(!openSystemCollapse);
    };
    const handleShowAccountCollapse = () => {
        setShowAccountCollapse(!showAccountCollapse);
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
            <Typography
                sx={{
                    fontSize: '16px',
                    fontWeight: 600,
                    pl: 2.2,
                    pt: 0.8,
                    color: `${grey[700]}!important`
                }}>Thông tin của tôi</Typography>
            <MenuItem
                sx={{ pt: 1.2, pb: 1.2, minWidth: 250 }}
                onClick={() => handleLinktoUrlClick('profile')}
            >
                <ListItemIcon>
                    <AccountBoxIcon sx={{ color: `${blue[600]}!important`, fontSize: 20 }}/>
                </ListItemIcon>
                <ListItemText sx={{ color: grey[600], p6: 1, pl: 0, '& span': { fontSize: 16 } }}>
                    Trang cá nhân
                </ListItemText>
            </MenuItem>
            <MenuItem
                sx={{ pt: 1.2, pb: 1.2, minWidth: 250 }}
                onClick={() => handleLinktoUrlClick('profile/notification')}
            >
                <ListItemIcon>
                    <Campaign sx={{ color: `${blue[600]}!important`, fontSize: 20 }}/>
                </ListItemIcon>
                <ListItemText sx={{ color: grey[600], p6: 1, pl: 0, '& span': { fontSize: 16 } }}>
                    Thiết lập thông báo
                </ListItemText>
            </MenuItem>
            <MenuItem
                sx={{ pt: 1.2, pb: 1.2, minWidth: 250 }}
                onClick={() => handleLinktoUrlClick('profile/privacy')}
            >
                <ListItemIcon>
                    <LockIcon sx={{ color: `${blue[600]}!important`, fontSize: 20 }}/>
                </ListItemIcon>
                <ListItemText sx={{ color: grey[600], pr: 1, '& span': { fontSize: 16 } }}>
                    Thiết lập quyền riêng tư
                </ListItemText>
            </MenuItem>
            <MenuItem
                sx={{ pt: 1.2, pb: 1.2, minWidth: 250, borderBottom: '1px solid #ebe6e6' }}
                onClick={() => handleLinktoUrlClick('profile/blacklist')}
            >
                <ListItemIcon>
                    <BlockIcon sx={{ color: `${blue[600]}!important`, fontSize: 20 }}/>
                </ListItemIcon>
                <ListItemText sx={{ color: grey[600], pr: 1, '& span': { fontSize: 16 } }}>
                    Quản lý danh sách chặn
                </ListItemText>
            </MenuItem>
            <Typography
                sx={{
                    fontSize: '16px',
                    fontWeight: 600,
                    pl: 2.2,
                    color: `${grey[700]}!important`,
                    pt: 1.8
                }}>
                    Thiết lập hệ thống
            </Typography>
            <MenuItem sx={{ pt: 1.2, pb: 1.2, minWidth: 250 }} aria-describedby={idPopup} onClick={handlePopUpClick}>
                <ListItemIcon>
                    <LanguageIcon sx={{ color: `${blue[600]}!important`, fontSize: 20 }}/>
                </ListItemIcon>
                <ListItemText
                    sx={{ color: grey[600], pr: 1, '& span': { fontSize: 16 } }}
                >
                    Đổi ngôn ngữ
                </ListItemText>
                <ChevronRightIcon/>
            </MenuItem>
            <Popover
                sx={POPOVER_STYLES}
                id={idPopup}
                open={popupOpen}
                anchorEl={popupAnchorEl}
                onClose={handlePopupClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem sx={{ minWidth: 200 }} onClick={() => setPopupAnchorEl(null)}>
                    <Typography sx={{ color: blue[600], fontWeight: 600, mr: 2 }}>VN</Typography>
                    <Typography>Tiếng Việt</Typography>
                </MenuItem>
                <MenuItem onClick={() => setPopupAnchorEl(null)}>
                    <Typography sx={{ color: blue[600], fontWeight: 600, mr: 2 }}>EN</Typography>
                    <Typography>Tiếng Anh</Typography>
                </MenuItem>
            </Popover>
            <MenuItem
                sx={{ pt: 1.2, pb: 1.2, minWidth: 250, borderBottom: '1px solid #ebe6e6' }}
                aria-describedby={idPopup2}
                onClick={handlePopUpClick2}
            >
                <ListItemIcon>
                    <LightModeIcon sx={{ color: `${blue[600]}!important`, fontSize: 20 }}/>
                </ListItemIcon>
                <ListItemText
                    sx={{ color: grey[600], pr: 3, '& span': { fontSize: 16 } }}
                >
                    Cài đặt hiển thị
                </ListItemText>
                <ChevronRightIcon/>
            </MenuItem>
            <Popover
                elevation={0}
                sx={POPOVER_STYLES}
                id={idPopup2}
                open={popupOpen2}
                anchorEl={popupAnchorEl2}
                onClose={handlePopupClose2}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem sx={{ minWidth: 200 }} onClick={() => setPopupAnchorEl2(null)}>
                    <Brightness4/>
                    <Typography>Mặc định</Typography>
                </MenuItem>
                <MenuItem onClick={() => setPopupAnchorEl2(null)}>
                    <ModeNight/>
                    <Typography>Đêm</Typography>
                </MenuItem>
                <MenuItem onClick={() => setPopupAnchorEl2(null)}>
                    <LightMode/>
                    <Typography>Ngày</Typography>
                </MenuItem>
            </Popover>
            <MenuItem sx={{ pt: 1.2, pb: 1.2 }} onClick={() => handleLinktoUrlClick('login')}>
                <ListItemIcon>
                    <Logout sx={{ color: `${blue[600]}!important`, fontSize: 20 }}/>
                </ListItemIcon>
                <ListItemText
                    sx={{
                        color: grey[700],
                        pr: 1,
                        '& span': { fontSize: 16 },
                        '& a': {
                            textDecoration: 'none',
                            color: 'inherit'
                        }
                    }}
                >
                    Đăng xuất
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
                '& ul li': { pb: 1, minWidth: 260 },
                '& ul li p': { pl: 1, color: grey[600] }
            }}
        >
            <MenuItem onClick={() => handleLinktoUrlClick('home')}>
                <Home sx={{ color: `${blue[600]}!important`, fontSize: 20 }}/>
                <Typography sx={{ fontSize: '17px', ml: 0.9, fontWeight: 500 }}>Trang chủ</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleLinktoUrlClick('blogs')}>
                <LibraryBooks sx={{ color: `${blue[600]}!important`, fontSize: 20 }}/>
                <Typography sx={{ fontSize: '17px', ml: 0.9, fontWeight: 500 }}>Blogs</Typography>
            </MenuItem>
            <Divider sx={{ width: '100%', m: '0 auto', bgcolor: grey[50] }}/>
            <MenuItem
                onClick={handleShowAccountCollapse}
                sx={{
                    pt: 1, pb: 1,
                    '& svg': {
                        color: grey[400]
                    }
                }}>
                <><AccountCircleIcon sx={{ color: `${blue[600]}!important`, fontSize: 20, ml: '0!important' }}/></>
                <Typography
                    sx={{
                        fontSize: '17px',
                        fontWeight: 600,
                        ml: 0.9,
                        color: `${grey[700]}!important`
                    }}>Tài khoản</Typography>
                {
                    showAccountCollapse
                        ? <ExpandLess sx={{ ml: 'auto', color: grey[400] }}/>
                        : <ExpandMore sx={{ ml: 'auto', color: grey[400] }} />
                }
            </MenuItem>
            <Collapse in={showAccountCollapse}>
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
                    <ListItemButton sx={{ p: 0.7, pl: 3 }} onClick={() => handleLinktoUrlClick('profile')}>
                        <AccountBoxIcon sx={{ color: `${blue[600]}!important`, fontSize: '17px', pl: 1 }}/>
                        <ListItemText sx={{ color: grey[600], pl: 1, '& span': { fontSize: 16 } }}>
                            Quản lý thông tin
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton sx={{ p: 0.7, pl: 3 }} onClick={() => handleLinktoUrlClick('profile/privacy')}>
                        <LockIcon sx={{ color: `${blue[600]}!important`, fontSize: '17px', pl: 1 }}/>
                        <ListItemText sx={{ color: grey[600], pl: 1, '& span': { fontSize: 16 } }}>
                            Thiết lập quyền riêng tư
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton sx={{ p: 0.7, pl: 3 }} onClick={() => handleLinktoUrlClick('profile/blacklist')}>
                        <BlockIcon sx={{ color: `${blue[600]}!important`, fontSize: '17px', pl: 1 }}/>
                        <ListItemText sx={{ color: grey[600], pl: 1, '& span': { fontSize: 16 } }}>
                            Danh sách chặn
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Collapse>
            <MenuItem
                onClick={handleShowSystemCollapse}
                sx={{
                    pt: 1, pb: 1,
                    '& svg': {
                        color: grey[400]
                    }
                }}>
                <SettingsIcon sx={{ color: `${blue[600]}!important`, fontSize: 20, ml: '0!important' }}/>
                <Typography
                    sx={{
                        fontSize: '17px',
                        fontWeight: 600,
                        ml: 0.9,
                        color: `${grey[700]}!important`
                    }}>
                    Hệ thống
                </Typography>
                {
                    openSystemCollapse
                        ? <ExpandLess sx={{ ml: 'auto', color: grey[400] }}/>
                        : <ExpandMore sx={{ ml: 'auto', color: grey[400] }} />
                }
            </MenuItem>
            <Collapse in={openSystemCollapse}>
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
                    <ListItemButton sx={{ p: 0.7, pl: 3 }} onClick={() => handleLinktoUrlClick('profile/system')}>
                        <LanguageIcon sx={{ color: `${blue[600]}!important`, fontSize: '17px', pl: 1 }}/>
                        <ListItemText sx={{ color: grey[600], pl: 1, '& span': { fontSize: 16 } }}>
                            Đổi ngôn ngữ
                        </ListItemText>
                        <ChevronRightIcon/>
                    </ListItemButton>
                    <ListItemButton sx={{ p: 0.7, pl: 3 }} onClick={() => handleLinktoUrlClick('profile/system')}>
                        <LightModeIcon sx={{ color: `${blue[600]}!important`, fontSize: '17px', pl: 1 }}/>
                        <ListItemText sx={{ color: grey[600], pl: 1, '& span': { fontSize: 16 } }}>
                            Chế độ hiển thị
                        </ListItemText>
                        <ChevronRightIcon/>
                    </ListItemButton>
                </List>
            </Collapse>
            <MenuItem
                onClick={() => handleLinktoUrlClick('login')}
                sx={{
                    pt: 1, pb: 1,
                    '& svg': {
                        color: grey[400],
                        maxWidth: '20px!important'
                    }
                }}>
                <ListItemIcon>
                    <Logout sx={{ color: `${blue[600]}!important`, fontSize: 20, ml: '0!important' }}/>
                </ListItemIcon>
                <ListItemText
                    sx={{
                        color: grey[700],
                        '& span': { fontSize: 17,
                            fontWeight: 600,
                            color: `${grey[700]}!important` },
                        '& a': {
                            textDecoration: 'none',
                            color: 'inherit'

                        }
                    }}
                >
                    Đăng xuất
                </ListItemText>
            </MenuItem>
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
