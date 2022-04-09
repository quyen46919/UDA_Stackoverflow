import { Search } from '@mui/icons-material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';

function ActionMenu() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const location = useLocation();
    const currentPage = location.pathname.split('/').pop();
    const history = useHistory();
    const [page, setPage] = useState(currentPage || 'home');

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleChangePage = (e) => {
        let newUrlParam = e.target.value;
        setPage(newUrlParam);
        if (newUrlParam === 'home') {
            newUrlParam = '';
        }
        history.push(`/home/${newUrlParam}`);
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
                p: 3,
                boxSizing: 'border-box',
                bgcolor: '#ffffff',
                margin: '10px 0',
                borderRadius: 2,
                fontSize: 17,
                position: { xs: 'unset', lg: 'sticky' },
                transition: 'all .15s ease',
                top: '90px'
            }}
        >
            <Box fullWidth>
                <Typography sx={{ pb: 1, color: grey[500] }}>
                    Điều hướng
                </Typography>
                <TextField
                    select
                    size="small"
                    fullWidth
                    value={page}
                    onChange={handleChangePage}
                >
                    <MenuItem value="home">Trang chủ</MenuItem>
                    <MenuItem value="post">Đăng câu hỏi</MenuItem>
                    <MenuItem value="support">Hỗ trợ</MenuItem>
                </TextField>
            </Box>
            {
                ( currentPage === 'home' || currentPage === '' ) && <Box sx={{ pt: 2 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 24 }}>
                        Tìm kiếm câu hỏi
                    </Typography>
                    <Typography sx={{ pb: 1, color: grey[500] }}>
                        Nhập từ khóa tìm kiếm ở ô bên dưới
                    </Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Nhập câu hỏi tìm kiếm..."
                        size="small"
                        sx={{
                            width: '100%',
                            mt: 1,
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
                            endAdornment: <InputAdornment position="end"><Search/></InputAdornment>
                        }}
                    />
                </Box>
            }
            <Box sx={{ width: '100%', bgcolor: '#fff', display: { xs: 'none', lg: 'block' } }}>
                <List component="nav" aria-label="main mailbox folders"
                    sx={{
                        '& a': {
                            textDecoration: 'none',
                            color: 'inherit'
                        },
                        '& a.active span': {
                            color: blue[900],
                            fontWeight: 700
                        }
                    }}
                >
                    <NavLink to="/home" exact>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemText primary="Câu hỏi" />
                            <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: grey[500] }} />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/home/group" exact>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemText primary="Nhóm" />
                            <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: grey[500] }} />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/home/post" exact>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemText primary="Đăng câu hỏi" />
                            <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: grey[500] }} />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/home/support" exact>
                        <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}
                        >
                            <ListItemText primary="Hỗ trợ" />
                            <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: grey[500] }} />
                        </ListItemButton>
                    </NavLink>
                </List>
            </Box>
        </Box>

    );
}
export default ActionMenu;