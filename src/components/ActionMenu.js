<<<<<<< HEAD
import React from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from 'react-router-dom';
=======
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
>>>>>>> b290eebd5f55d59f1e9b16986de04b4779935ab9

function ActionMenu() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
<<<<<<< HEAD
=======
    //     const [isOpen, setIsOpen] = React.useState(false);
    //   const toggleDrawer = (open) => (event) => {
    //     if (
    //       (event && event.type === 'keydown') ||
    //       event.key === 'Tab' ||
    //       event.key === 'Esc'
    //     ) {
    //       return;
    //     }

    //     setIsOpen(open);
    //   };
    //   const list = (anchor) => (
    //     <Box
    //       sx={{ width: 300 }}
    //       role="presentation"
    //       onClick={() => toggleDrawer(false)}
    //       onKeyDown={() => toggleDrawer(false)}
    //     >
    //       <List>
    //         <TextField />
    //       </List>
    //       <List>
    //         <a>Link1</a>
    //       </List>
    //       <List>
    //         <a>Link1</a>
    //       </List>
    //       <List>
    //         <a>Link1</a>
    //       </List>
    //       <List>
    //         <a>Link1</a>
    //       </List>
    //       <Divider />
    //       <a>Link2</a>
    //     </Box>
    //   );
    // return (
    //     <Box>
    //       {/* {['left'].map((anchor) => ( */}

    //         <Button onClick={toggleDrawer(true)}>left</Button>
    //         <SwipeableDrawer
    //           anchor={'left'}
    //           open={isOpen}

    //           onClose={() => toggleDrawer(false)}
    //           onOpen={() => toggleDrawer(true)}
    //         >
    //           {list('left')}
    //         </SwipeableDrawer>

    //       {/* // ))} */}
    //     </Box>
    //   );
    // }
>>>>>>> b290eebd5f55d59f1e9b16986de04b4779935ab9
    return (
        <Box
            sx={{
                minWidth: '200px',
                display:{
<<<<<<< HEAD
                    xs: 'none', sm: 'flex'
=======
                    xs: 'none', md: 'flex'
>>>>>>> b290eebd5f55d59f1e9b16986de04b4779935ab9
                },
                height: '70%',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                paddingTop: 2,
                background: 'white',
<<<<<<< HEAD
=======
                // boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
>>>>>>> b290eebd5f55d59f1e9b16986de04b4779935ab9
                margin: '10px 0',
                borderRadius: 2,
                fontSize: 17,
                paddingLeft: 2,
                paddingRight: 2
            }}
        >
<<<<<<< HEAD
            <Box
                sx={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: 1,
                    '&:hover':{
                        cursor: 'pointer'
                    }
                }}
            >
                <Link to= '/' style={{textDecoration: 'none', color: 'black'}} >Home</Link>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: 1,
                    paddingBottom: 0
                }}
            >
                Public
                <Box
                >
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemText primary="Questions" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemText primary="Tabs" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap'
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 0,
                    marginBottom: 1
                }}>
                    <Box>Collectives
                    </Box>
                    <PriorityHighRoundedIcon sx={{
                        height: '15px',
                        width: '15px',
                        background: 'grey',
                        borderRadius: '45%',
                        color: 'white',
                        fontSize: '13px',
                    }}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <ListItemButton
                        selected={selectedIndex === 7}
                        onClick={(event) => handleListItemClick(event, 7)}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            alignItems: 'center',
                            gap: 2
                        }}
                    >
                        <StarRoundedIcon
                            sx={{
                                height: '15px',
                                width: '15px',
                                background: '#f57c00',
                                borderRadius: '45%',
                                color: 'white',
                                fontSize: '13px'
                            }}/>
                        <ListItemText primary="Jobs" />
                    </ListItemButton>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: 1,
                    paddingTop: 0
                }}
            >
                Find a Job
                <Box>
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            selected={selectedIndex === 5}
                            onClick={(event) => handleListItemClick(event, 5)}
                        >
                            <ListItemText primary="Jobs" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 6}
                            onClick={(event) => handleListItemClick(event, 6)}
                        >
                            <ListItemText primary="Companies" />
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
        </Box>
=======

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
                    placeholder="Nhập câu hỏi tìm kiếm..."
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

>>>>>>> b290eebd5f55d59f1e9b16986de04b4779935ab9
    );
}
export default ActionMenu;