import React from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from 'react-router-dom';

function ActionMenu() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <Box
            sx={{
                minWidth: '200px',
                display:{
                    xs: 'none', sm: 'flex'
                },
                height: '70%',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                paddingTop: 2,
                background: 'white',
                margin: '10px 0',
                borderRadius: 2,
                fontSize: 17,
                paddingLeft: 2,
                paddingRight: 2
            }}
        >
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
    );
}
export default ActionMenu;