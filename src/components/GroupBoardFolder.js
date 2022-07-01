import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { FolderShared } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { Typography } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

GroupBoardFolder.propTypes = {
    board: PropTypes.object.isRequired
};

function GroupBoardFolder(props) {
    const { board } = props;
    const { title } = board;
    const history = useHistory();
    return (
        <Box
            onClick={() => history.push(`/home/group/boardId/${board.id}`)}
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
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 2,
                cursor: 'pointer',
                bgcolor: '#fff',
                p: '0 16px'

            }}
        >
            <FolderShared sx={{ color: grey[600] }}/>
            <Typography
                sx={{
                    color: grey[600],
                    fontWeight: 700,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    textAlign: 'left',
                    fontSize: 16
                }}
            >
                {title}
            </Typography>
        </Box>
    );
}

export default GroupBoardFolder;