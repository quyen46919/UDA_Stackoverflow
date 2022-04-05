import { Box } from '@mui/system';
import React from 'react';

function StyledScript(props) {
    const { text } = props;
    return (
        <Box sx={{
            fontFamily: '"Pacifico", cursive!important',
            background: 'linear-gradient( 90deg, #1488CC, #2B32B2)!important',
            backgroundClip: 'text!important',
            WebkitBackgroundClip: 'text!important',
            fontWeight: '500!important',
            fontSize: {
                xs: '24px!important',
                md: '40px!important'
            },
            color: 'transparent!important',
            pl: 3, pr: 3
        }}>
            {text}
        </Box>
    );
}

export default StyledScript;