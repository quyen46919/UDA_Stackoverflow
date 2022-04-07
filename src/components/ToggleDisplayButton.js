import { Apps, ViewList } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useState } from 'react';

function ToggleDisplayButton() {
    const [showInBlock, setShowInBlock] = useState(true);

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            ml: 'auto'
        }}>
            <IconButton
                sx={{
                    borderRadius: '5px!important',
                    color: showInBlock ? blue[600] : grey[600],
                    bgcolor: showInBlock ? `${blue[50]}!important` : 'initial',
                    '& span': {
                        borderRadius: '5px!important'
                    }
                }}
                onClick={() => setShowInBlock(true)}
            >
                <Apps/>
            </IconButton>
            <IconButton
                sx={{
                    borderRadius: '5px!important',
                    color: !showInBlock ? blue[600] : grey[600],
                    bgcolor: !showInBlock ? `${blue[50]}!important` : 'initial',
                    '& span': {
                        borderRadius: '5px!important'
                    }
                }}
                onClick={() => setShowInBlock(false)}
            >
                <ViewList/>
            </IconButton>
        </Box>
    );
}

export default ToggleDisplayButton;