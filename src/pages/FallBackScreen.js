import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Box, styled } from '@mui/system';
import React from 'react';

const StyledTypography = styled(Typography)(() => ({
    position: 'relative',
    color: '#383d52',
    WebkitTextStroke: '0.3vw #383d52',
    fontFamily: 'Nunito, san-serif',
    textTransform: 'uppercase',
    fontWeight: 700,
    '&::before': {
        content: '"UDA_Stackoverflow"',
        position: 'absolute',
        left: 0,
        top: 0,
        width: 0,
        height: '100%',
        color: blue[500],
        fontWeight: 700,
        WebkitTextStroke: '0vw #383d52',
        borderRight: `6px solid ${blue[500]}`,
        overflow: 'hidden',
        animation: 'slide 3s linear infinite'
    },
    '@keyframes slide': {
        '0%, 10%, 100%': {
            width: 0
        },
        '70%, 90%': {
            width: '100%'
        }
    }
}));

function FallBackScreen() {
    return (
        <Box sx={{
            background: '#fff',
            width: '100vw',
            minHeight: '100vh',
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <StyledTypography noWrap sx={{
                fontSize: {
                    xs: '6vw',
                    md: '3vw'
                }
            }}>
                UDA_Stackoverflow
            </StyledTypography>
            <Typography
                sx={{
                    pt: 7,
                    fontSize: '20px',
                    color: '#383d52',
                    fontFamily: 'Nunito, san-serif',
                    fontWeight: 500,
                    transform: 'translateY(-50px)'
                }}
            >
                Đang tải, chờ tí nhé...
            </Typography>
        </Box>
    );
}

export default FallBackScreen;