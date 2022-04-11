import { Group, PostAdd, QuestionAnswer, Search } from '@mui/icons-material';
import { Box, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const menuItemStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 2,
    color: grey[600],
    '& svg': { transform: 'translateY(-1px)', color: blue[600] },
    pt: 1.2, pb: 1.2
};

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
                    <MenuItem value="home" sx={menuItemStyles}>
                        <QuestionAnswer fontSize="small"/>
                        Trang chủ
                    </MenuItem>
                    <MenuItem value="post" sx={menuItemStyles}>
                        <PostAdd fontSize="small"/>
                        Đăng câu hỏi
                    </MenuItem>
                    <MenuItem value="group" sx={menuItemStyles}>
                        <Group fontSize="small"/>
                        Nhóm
                    </MenuItem>
                </TextField>
            </Box>
            {
                ( currentPage === 'home' || currentPage === '' ) && <Box sx={{ pt: { xs: 2, lg: 0 } }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 22, color: grey[800] }}>
                        Tìm kiếm câu hỏi
                    </Typography>
                    <Typography sx={{ pb: 1, color: grey[500] }}>
                        Nhập từ khóa tìm kiếm ở ô bên dưới
                    </Typography>
                    <TextField
                        multiline
                        variant="outlined"
                        placeholder="Nhập câu hỏi tìm kiếm..."
                        size="small"
                        sx={{
                            width: '100%',
                            mb: 2,
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
                            color: grey[600]
                        },
                        '& a.active span': {
                            color: blue[800],
                            fontWeight: 700
                        },
                        '& a svg': { pr: 2, color: blue[800] },
                        '& a.active svg': { color: blue[800] }
                    }}
                >
                    <NavLink to="/home" exact>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <QuestionAnswer fontSize="small"/>
                            <ListItemText primary="Câu hỏi" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/home/group" exact>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <Group fontSize="small"/>
                            <ListItemText primary="Nhóm" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/home/post" exact>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <PostAdd fontSize="small"/>
                            <ListItemText primary="Đăng câu hỏi" />
                        </ListItemButton>
                    </NavLink>
                </List>
            </Box>
        </Box>

    );
}
export default ActionMenu;