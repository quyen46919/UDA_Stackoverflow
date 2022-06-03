import { Switch, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function ProfilePrivacyPage() {
    return (
        <Box sx={{
            width: { xs: '100%', lg: '60%' },
            ml: { xs: 0, lg: 1 },
            p: { xs: 0, lg: '0 24px' },
            pl: 0,
            boxSizing: 'border-box',
            '& > p': {
                mb: 1,
                color: 'text.primary',
                pl: 2,
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
                color: 'text.secondary'
            }
        }}>
            <Typography>Thiết lập trang cá nhân</Typography>
            <Box sx={{
                borderRadius: 3,
                overflow: 'hidden',
                pt: 1, pb: 2,
                boxSizing: 'border-box',
                bgcolor: 'secondary.main'
            }}>
                <Box>
                    <Typography>Hiển thị các câu hỏi tại trang cá nhân</Typography>
                    <Switch inputProps={{ 'aria-label': 'Switch demo' }} defaultChecked color="default"
                    />
                </Box>
                <Box>
                    <Typography>Hiển thị các thông số hoạt động tại trang cá nhân</Typography>
                    <Switch inputProps={{ 'aria-label': 'Switch demo' }} defaultChecked color="default"/>
                </Box>
                <Box>
                    <Typography>Hiển thị ngày tham gia</Typography>
                    <Switch inputProps={{ 'aria-label': 'Switch demo' }} defaultChecked color="default"/>
                </Box>
            </Box>
        </Box>
    );
}

export default ProfilePrivacyPage;