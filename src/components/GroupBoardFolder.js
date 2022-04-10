import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { FolderShared } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { Typography } from '@mui/material';

GroupBoardFolder.propTypes = {
    board: PropTypes.object.isRequired
};

function GroupBoardFolder(props) {
    const { board } = props;
    const { title } = board;
    return (
        <Box
            sx={{
                width: '100%',
                height: 60,
                borderRadius: '8px',
                transition: 'box-shadow .18s ease-in-out',
                border: `1px solid ${grey[300]}`,
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection:'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                bgcolor: '#fff',
                p: '0 16px'

            }}
        >
            <FolderShared sx={{ color: grey[600] }}/>
            <Typography
                sx={{
                    width: '80%',
                    color: grey[700],
                    fontWeight: 700,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    textAlign: 'left'
                }}
            >
                {title}
            </Typography>
        </Box>
    );
}

export default GroupBoardFolder;