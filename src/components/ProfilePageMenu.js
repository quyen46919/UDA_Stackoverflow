import { AdminPanelSettings, Campaign, DisplaySettings, Healing } from '@mui/icons-material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const menuItemStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 1,
    color: grey[600],
    '& svg': { transform: 'translateY(-1px)' }
};

function ProfilePageMenu() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const location = useLocation();
    const currentPage = location.pathname.split('/').pop();
    const history = useHistory();
    const [page, setPage] = useState(currentPage || '');

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleChangePage = (e) => {
        let newUrlParam = e.target.value;
        setPage(newUrlParam);
        if (newUrlParam === 'profile') {
            newUrlParam = '';
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
                bgcolor: '#ffffff',
                borderRadius: 2,
                fontSize: 17,
                position: { xs: 'unset', lg: 'sticky' },
                transition: 'all .15s ease',
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
                        '& .MuiSelect-select': menuItemStyles
                    }}
                >
                    <MenuItem value="profile" sx={menuItemStyles}>
                        <CardGiftcardIcon/>
                        <ListItemText primary="Trang cá nhân" />
                    </MenuItem>
                    <MenuItem value="notification" sx={menuItemStyles}>
                        <Campaign/>
                        <ListItemText primary="Thiết lập thông báo" />
                    </MenuItem>
                    <MenuItem value="privacy" sx={menuItemStyles}>
                        <AdminPanelSettings/>
                        <ListItemText primary="Thiết lập quyền riêng tư" />
                    </MenuItem>
                    <MenuItem value="blacklist" sx={menuItemStyles}>
                        <Healing/>
                        <ListItemText primary="Quản lí danh sách chặn" />
                    </MenuItem>
                    <MenuItem value="system" sx={menuItemStyles}>
                        <DisplaySettings/>
                        <ListItemText primary="Thiết lập hệ thống" />
                    </MenuItem>
                </TextField>
            </Box>
            <Box sx={{ width: '100%', bgcolor: '#fff', display: { xs: 'none', lg: 'block' } }}>
                <List component="nav"
                    sx={{
                        '& a': {
                            textDecoration: 'none',
                            color: grey[500]
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
                            <CardGiftcardIcon/>
                            <ListItemText primary="Trang cá nhân" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/profile/notification" exact>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <Campaign/>
                            <ListItemText primary="Thiết lập thông báo" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/profile/privacy" exact>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <AdminPanelSettings/>
                            <ListItemText primary="Thiết lập quyền riêng tư" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/profile/blacklist" exact>
                        <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}
                        >
                            <Healing/>
                            <ListItemText primary="Quản lí danh sách chặn" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/profile/system" exact>
                        <ListItemButton
                            selected={selectedIndex === 5}
                            onClick={(event) => handleListItemClick(event, 5)}
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