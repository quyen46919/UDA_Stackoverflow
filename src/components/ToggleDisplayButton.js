import { Apps, ViewList } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

ToggleDisplayButton.propTypes = {
    lineDisplay: PropTypes.bool.isRequired,
    handleChangeDisplayType: PropTypes.func.isRequired
};

function ToggleDisplayButton(props) {
    const { lineDisplay, handleChangeDisplayType } = props;

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
                    color: lineDisplay ? blue[600] : grey[600],
                    bgcolor: lineDisplay ? `${blue[50]}!important` : 'initial',
                    '& span': {
                        borderRadius: '5px!important'
                    }
                }}
                onClick={() => handleChangeDisplayType(true)}
            >
                <ViewList/>
            </IconButton>
            <IconButton
                sx={{
                    borderRadius: '5px!important',
                    color: !lineDisplay ? blue[600] : grey[600],
                    bgcolor: !lineDisplay ? `${blue[50]}!important` : 'initial',
                    '& span': {
                        borderRadius: '5px!important'
                    }
                }}
                onClick={() => handleChangeDisplayType(false)}
            >
                <Apps/>
            </IconButton>
        </Box>
    );
}

export default ToggleDisplayButton;