import { Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import dotBg from 'assets/images/img-rect-dots.webp';
import React from 'react';

function UserRatingComment(props) {
    const { content } = props;
    return (
        <Box sx={{
            width: '80%',
            m: '0 auto',
            display: 'flex',
            flexDirection: {
                xs: 'column',
                md: 'row'
            },
            alignItems: 'center',
            gap: 5
        }}>
            <Box sx={{
                width: 380,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& img': {
                    position: 'absolute',
                    zIndex: 0,
                    height: 80,
                    left: -30,
                    top: 10
                },
                '&::after': {
                    content: '""',
                    width: 100,
                    height: 100,
                    bgcolor: blue[50],
                    position: 'absolute',
                    right: 0,
                    bottom: -20
                }
            }}>
                <img src={dotBg}/>
                <Box sx={{
                    width: 220,
                    height: 220,
                    backgroundImage: `url('${content.avatar}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 10
                }}>
                </Box>
            </Box>
            <Box sx={{
                width: {
                    xs: '100%',
                    md: 'calc(100% - 340px)'
                },
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: 'column'
                },
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>
                <Typography>
                    {content.content}
                </Typography>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 0, md: 3 },
                    pb: { xs: 2, md: 0 }
                }}>
                    <Typography sx={{
                        fontWeight: 700,
                        color: blue[900],
                        fontSize: 24
                    }}>
                        {content.title}
                    </Typography>
                    <Typography sx={{
                        color: grey[500],
                        fontSize: 18
                    }}>
                        {content.role}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default UserRatingComment;