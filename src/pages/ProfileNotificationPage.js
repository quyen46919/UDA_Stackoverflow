import { Switch, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';

function ProfileNotificationPage() {
    return (
        <Box sx={{
            width: { xs: '100%', lg: '60%' },
            ml: { xs: 0, lg: 1 },
            p: { xs: 0, lg: '0 24px' },
            pl: 0,
            boxSizing: 'border-box',
            '& > p': {
                mb: 1,
                color: grey[500],
                pl: 2,
                boxSizing: 'border-box'
            },
            '& > div > div': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pr: 2, pl: 2, pt: 1
            },
            '& > div > div > p': {
                color: grey[600]
            }
        }}>
            <Typography>Thiết lập đăng tải</Typography>
            <Box sx={{
                borderRadius: 3,
                overflow: 'hidden',
                pt: 1, pb: 2,
                boxSizing: 'border-box',
                bgcolor: '#fff'
            }}>
                <Box>
                    <Typography>Hiển thị các ghi chú hướng dẫn sử dụng</Typography>
                    <Switch inputProps={{ 'aria-label': 'Switch demo' }} defaultChecked />
                </Box>
                <Box>
                    <Typography>Gửi thông báo về email khi trạng thái câu hỏi thay đổi</Typography>
                    <Switch inputProps={{ 'aria-label': 'Switch demo' }} defaultChecked />
                </Box>
            </Box>
            <Typography sx={{ mt: 2 }}>Thiết lập thông báo</Typography>
            <Box sx={{
                borderRadius: 3,
                overflow: 'hidden',
                pt: 1, pb: 2,
                boxSizing: 'border-box',
                bgcolor: '#fff'
            }}>
                <Box>
                    <Typography>Ai đó bình luận về câu hỏi của tôi</Typography>
                    <Switch inputProps={{ 'aria-label': 'Switch demo' }} defaultChecked />
                </Box>
                <Box>
                    <Typography>Ai đó báo cáo câu hỏi của tôi</Typography>
                    <Switch inputProps={{ 'aria-label': 'Switch demo' }} defaultChecked />
                </Box>
                <Box>
                    <Typography>Ai đó theo dõi tôi</Typography>
                    <Switch inputProps={{ 'aria-label': 'Switch demo' }} defaultChecked />
                </Box>
            </Box>
        </Box>
    );
}

export default ProfileNotificationPage;