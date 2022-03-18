import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DoneIcon from '@mui/icons-material/Done';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';

function MenuDetailQuestion() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <Box
            sx={{
                minWidth: '200px',
                display:{
                    xs: 'none', md: 'flex'
                },
                flexDirection: 'column',
                flexWrap: 'nowrap',
                paddingTop: 2,
                background: 'white',
                // boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
                margin: '10px 0',
                borderRadius: 2,
                fontSize: 17,
                paddingLeft: 2,
                paddingRight: 2
            }}
        >
            <Box sx={{ width: '100%', maxWidth: 360, backgroundColor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ContactSupportIcon sx={{ fontSize: '20px', color: grey[500], pr: 2 }} /><ListItemText primary="My Question" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ReplyAllIcon sx={{ fontSize: '20px', color: grey[500], pr: 2 }} /><ListItemText primary="My Participation" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <HighlightOffIcon sx={{ fontSize: '20px', color: grey[500], pr: 2 }} /><ListItemText primary="Unsolved" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <DoneIcon sx={{ fontSize: '20px', color: grey[500], pr: 2 }} /><ListItemText primary="Solved" />
                    </ListItemButton>
                </List>
            </Box>
        </Box>
    );
}

export default MenuDetailQuestion;