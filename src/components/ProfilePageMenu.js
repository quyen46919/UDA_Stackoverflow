import { Campaign, DisplaySettings, ListAlt, Lock } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BlockIcon from '@mui/icons-material/Block';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const menuItemStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 2,
    color: 'text.secondary',
    '& svg': { transform: 'translateY(-1px)', color: blue[800] },
    pt: 1.2, pb: 1.2
};

function ProfilePageMenu() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const location = useLocation();
    const currentPage = location.pathname.split('/').pop();
    const history = useHistory();
    const [page, setPage] = useState(currentPage || 'profile');

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        const newCurrentPage = location.pathname.split('/').pop();
        setPage(newCurrentPage);
    }, [location.pathname]);

    const handleChangePage = (e) => {
        let newUrlParam = e.target.value;
        setPage(newUrlParam);
        if (newUrlParam === 'profile') {
            history.push('/profile');
            return;
        }
        history.push(`/profile/${newUrlParam}`);
    };

    return (
        <Box
            sx={{
                minWidth: { xs: '100%', lg: 300 },
                width: { xs: '100%', lg: 300 },
                display: 'flex',
                height: '70%',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                p: 2,
                boxSizing: 'border-box',
                bgcolor: 'secondary.main',
                borderRadius: 2,
                fontSize: 17,
                position: { xs: 'unset', lg: 'sticky' },
                top: { xs: 0, lg: '85px' },
                ml: { xs: 0, lg: 1 }
            }}
        >
            <Box fullWidth sx={{ display: { xs: 'block', lg: 'none' } }}>
                <Typography sx={{ pb: 1, color: grey[500] }}>
                    Điều hướng
                </Typography>
                <TextField
                    select
                    size="small"
                    fullWidth
                    value={page}
                    onChange={handleChangePage}
                    sx={{
                        '& .MuiSelect-select': menuItemStyles,
                        '& .MuiMenu-paper': {
                            boxShadow: `${0}!important`,
                            border: `1px solid ${blue[600]}!important`
                        }
                    }}
                >
                    <MenuItem value="profile" sx={menuItemStyles}>
                        <AccountBoxIcon/>
                        <ListItemText primary="Trang cá nhân" />
                    </MenuItem>
                    <MenuItem value="notificationList" sx={menuItemStyles}>
                        <ListAlt/>
                        <ListItemText primary="Tất cả thông báo" />
                    </MenuItem>
                    <MenuItem value="notification" sx={menuItemStyles}>
                        <Campaign/>
                        <ListItemText primary="Thiết lập thông báo" />
                    </MenuItem>
                    <MenuItem value="privacy" sx={menuItemStyles}>
                        <Lock/>
                        <ListItemText primary="Thiết lập quyền riêng tư" />
                    </MenuItem>
                    <MenuItem value="blacklist" sx={menuItemStyles}>
                        <BlockIcon/>
                        <ListItemText primary="Quản lí danh sách chặn" />
                    </MenuItem>
                    <MenuItem value="system" sx={menuItemStyles}>
                        <DisplaySettings/>
                        <ListItemText primary="Thiết lập hệ thống" />
                    </MenuItem>
                </TextField>
            </Box>
            <Box sx={{ width: '100%', bgcolor: 'secondary.main', display: { xs: 'none', lg: 'block' } }}>
                <List component="nav"
                    sx={{
                        '& a': {
                            textDecoration: 'none',
                            color: 'text.secondary'
                        },
                        '& a.active span, & a.active .MuiListItemButton-root': {
                            color: blue[900],
                            fontWeight: 700,
                            fontSize: '16px!important'
                        },
                        '& .MuiListItemButton-root': menuItemStyles
                    }}
                >
                    <NavLink to="/profile" exact>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <AccountBoxIcon/>
                            <ListItemText primary="Trang cá nhân" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/profile/notificationList" exact>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListAlt/>
                            <ListItemText primary="Tất cả thông báo" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/profile/notification" exact>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <Campaign/>
                            <ListItemText primary="Thiết lập thông báo" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/profile/privacy" exact>
                        <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}
                        >
                            <Lock/>
                            <ListItemText primary="Thiết lập quyền riêng tư" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/profile/blacklist" exact>
                        <ListItemButton
                            selected={selectedIndex === 5}
                            onClick={(event) => handleListItemClick(event, 5)}
                        >
                            <BlockIcon/>
                            <ListItemText primary="Quản lí danh sách chặn" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/profile/system" exact>
                        <ListItemButton
                            selected={selectedIndex === 6}
                            onClick={(event) => handleListItemClick(event, 6)}
                        >
                            <DisplaySettings/>
                            <ListItemText primary="Thiết lập hệ thống" />
                        </ListItemButton>
                    </NavLink>
                </List>
            </Box>
        </Box>

    );
}
export default ProfilePageMenu;