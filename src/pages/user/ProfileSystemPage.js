import { MenuItem, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';

function ProfileSystemPage() {
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
            '& .MuiTypography-root': {
                color: 'text.secondary'
            }
        }}>
            <Typography>Thiết lập hệ thống</Typography>
            <Box sx={{
                borderRadius: 3,
                overflow: 'hidden',
                pt: 1, pb: 2,
                boxSizing: 'border-box',
                bgcolor: 'secondary.main',
                '& div': {
                    color: 'text.primary'
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Typography>Thiết lập ngôn ngữ</Typography>
                    <TextField
                        select
                        size="small"
                        variant="outlined"
                        value="vn"
                        sx={{
                            boxShadow: 0,
                            '& fieldset': { border: 'none' },
                            '& div, & svg': { color: grey[600] },
                            '.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation': {
                                boxShadow: 'none!important',
                                bgcolor: 'red'
                            }
                        }}
                    >
                        <MenuItem value="vn" sx={{ minWidth: 200 }}>Tiếng Việt</MenuItem>
                        <MenuItem value="us">Tiếng Anh</MenuItem>
                    </TextField>
                </Box>
                <Box>
                    <Typography>Chế độ màu</Typography>
                    <TextField
                        select
                        size="small"
                        variant="outlined"
                        value="day"
                        sx={{
                            boxShadow: 0,
                            '& fieldset': { border: 'none' },
                            '& div, & svg': { color: grey[600] },
                            '.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation': {
                                boxShadow: 'none!important',
                                bgcolor: 'red'
                            }
                        }}
                    >
                        <MenuItem value="day" sx={{ minWidth: 200 }}>Chế độ sáng</MenuItem>
                        <MenuItem value="night">Chế độ sáng</MenuItem>
                        <MenuItem value="auto">Theo giờ thực tế</MenuItem>
                    </TextField>
                </Box>
            </Box>
        </Box>
    );
}

export default ProfileSystemPage;