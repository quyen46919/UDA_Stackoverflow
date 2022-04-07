import { Search } from '@mui/icons-material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';

function ActionMenu() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box
            sx={{
                minWidth: 300,
                width: 300,
                display:{
                    xs: 'none', md: 'flex'
                },
                height: '70%',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                pt: 3,
                pl: 3,
                pr: 3,
                // //boxShadow:`${grey[200]} 0px 0px 16px`,
                boxSizing: 'border-box',
                bgcolor: '#ffffff',
                margin: '10px 0',
                borderRadius: 2,
                fontSize: 17,
                position: 'sticky',
                transition: 'all .15s ease',
                top: '90px'
            }}
        >
            <Box sx={{ pb: 4 }}>
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
            <Box sx={{ width: '100%', bgcolor: '#fff' }}>
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
                            <ListItemText primary="Tất cả câu hỏi" />
                            <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: grey[500] }} />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/home/group" exact>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemText primary="Tất cả các nhóm" />
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