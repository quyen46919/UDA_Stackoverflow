import { Divider, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import noItem from 'assets/images/no-item.png';
import React from 'react';

function ProfileBlacklistPage() {
    return (
        <Box sx={{
            width: { xs: '100%', lg: '60%' },
            ml: { xs: 0, lg: 1 },
            p: { xs: 0, lg: '0 24px' },
            pl: 0,
            boxSizing: 'border-box',
            '& > div > p': {
                mb: 1,
                color: blue[900],
                fontWeight: 700,
                pl: 2, pt: 1, pb: 1,
                boxSizing: 'border-box'
            },
            '& > div > div': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pr: 2, pl: 2, pt: 1
                // borderRadius: 3
            },
            '& > div > div > p': {
                color: grey[600]
            }
        }}>
            <Box sx={{
                borderRadius: 3,
                overflow: 'hidden',
                pt: 1, pb: 2,
                boxSizing: 'border-box',
                bgcolor: '#fff'
            }}>
                <Typography>Quản lí danh sách chặn</Typography>
                <Divider/>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    '& img': { height: 'auto', width: 300 }
                }}>
                    <img src={noItem} alt="no item"/>
                    <Typography sx={{ color: grey[500], fontSize: 16 }}>
                        Bạn chưa chặn người dùng nào cả
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ProfileBlacklistPage;