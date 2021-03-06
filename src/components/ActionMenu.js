import { Search } from '@mui/icons-material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';

function ActionMenu(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const { marginHeight } = props;
    return (
        <Box
            sx={{
                minWidth: '200px',
                display:{
                    xs: 'none', md: 'flex'
                },
                height: '70%',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                paddingTop: 2,
                background: 'white',
                // boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
                margin: '10px 0',
                borderRadius: 2,
                fontSize: 17,
                paddingLeft: 2,
                paddingRight: 2,
                mt: `${marginHeight}px` || 0,
                transition: 'margin-top .5s ease'
            }}
        >

            <Box sx={{ pb: 6 }}>
                <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 700 }}>
                    Search for a questions
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ pb: 1, color: grey[500] }}>
                    Type your question or search keyword
                </Typography>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Nh???p c??u h???i t??m ki???m..."
                    sx={{
                        width: '100%',
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
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemText primary="Getting Started" /><KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: grey[500] }} />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemText primary="Account with Card" /><KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: grey[500] }} />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemText primary="WithDraw to Bank" /><KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: grey[500] }} />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemText primary="Help" /><KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: grey[500] }} />
                    </ListItemButton>
                </List>
            </Box>
        </Box>

    );
}
export default ActionMenu;