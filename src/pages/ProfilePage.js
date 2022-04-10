import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import React from 'react';
import noItem from 'assets/images/no-item.png';
import { useTheme } from '@emotion/react';

function ProfilePage() {
    const theme = useTheme();
    const upMD = useMediaQuery(theme.breakpoints.up('md'));
    const downSM = useMediaQuery(theme.breakpoints.down('sm'));

    const renderStatisticalTable = (
        <Box sx={{
            width: { xs: '100%', md: 400 },
            minWidth: { xs: '100%', md: 400 },
            height: { xs: 'auto', md: 300 },
            bgcolor: '#fff',
            p: 3,
            pt: { xs: 0, md: 3 },
            boxSizing: 'border-box',
            borderRadius: 2,
            '& > div': {
                width: '100%',
                bgcolor: '#f1f4f9',
                p: 1.6,
                borderRadius: 3,
                boxSizing: 'border-box',
                display: 'flex',
                alighItems: 'center',
                justifyContent: 'space-between',
                mb: 1
            },
            '& > div > p:nth-of-type(1)': { color: '#97acc7', fontSize: 16 },
            '& > div > p:nth-of-type(2)': { color: grey[700], fontWeight: 700 }
        }}>
            <Box>
                <Typography>Số ngày hoạt động</Typography>
                <Typography>125</Typography>
            </Box>
            <Box>
                <Typography>Số câu hỏi đã đăng</Typography>
                <Typography>12</Typography>
            </Box>
            <Box>
                <Typography>Số bình luận</Typography>
                <Typography>521</Typography>
            </Box>
            <Box>
                <Typography>Số ngày hoạt động</Typography>
                <Typography>125</Typography>
            </Box>
        </Box>
    );

    const renderEditInfoButton = (
        <Button
            sx={{
                display: 'block',
                position: { xs: 'relative', sm: 'absolute' },
                right: 0,
                bottom: { xs: 0, sm: 25 },
                zIndex: 2,
                bgcolor: `${blue[50]}!important`,
                color: blue[800],
                p: '8px 16px',
                width: { xs: '100%', sm: 'fit-content' },
                mt: { xs: 2, sm: 0 }
            }}
        >
            Chỉnh sửa thông tin
        </Button>
    );

    return (
        <Box sx={{
            width: '100%',
            ml: { xs: 0, md: 0, lg: 2 },
            boxSizing: 'border-box',
            display: 'flex',
            gap: 2
        }}>
            <Box sx={{
                width: {
                    xs: '100%',
                    md: 'calc(100% - 400px)'
                },
                borderRadius: 2
            }}>
                <Box sx={{
                    width: '100%',
                    bgcolor: '#fff',
                    p: 3,
                    boxSizing: 'border-box',
                    borderRadius: 2
                }}>
                    <Typography sx={{
                        color: blue[800],
                        fontWeight: 600
                    }}>
                    Trang cá nhân
                    </Typography>
                    <Box sx={{
                        width: '100%',
                        position: 'relative',
                        height: 270,
                        mt: 2
                    }}>
                        <Box sx={{
                            width: '100%',
                            height: 200,
                            position: 'relative',
                            borderRadius: '20px 20px 0 0',
                            backgroundImage: 'url("https://www.hoyolab.com/_nuxt/img/34ed883.png")',
                            backgroundSize: 'cover'
                        }}/>
                        <Box sx={{
                            width: 120,
                            height: 120,
                            position: 'absolute',
                            top: 140,
                            left: { xs: '50%', sm: 40 },
                            transform: { xs: 'translateX(-50%)', sm: 'translateX(0px)' },
                            bgcolor: '#fff',
                            borderRadius: '50%',
                            '& > div': {
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                bgcolor: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            },
                            '& img': {
                                height: '95%',
                                width: '95%',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }
                        }}>
                            <Box>
                                <img src="https://img-os-static.hoyolab.com/avatar/avatar1.png" alt="avatar"/>
                            </Box>
                        </Box>
                        { !downSM && renderEditInfoButton }
                    </Box>
                    <Box sx={{
                        width: '100%',
                        pl: 2,
                        pr: 2,
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', sm: 'flex-start' },
                        justifyContent: { xs: 'flex-start', sm: 'center' }
                    }}
                    >
                        <Typography sx={{
                            color: blue[800],
                            fontWeight: 700
                        }}>
                            Nguyễn Châu Quyền
                        </Typography>
                        <Typography sx={{ color: grey[500], fontSize: 16 }}>
                            Tham gia vào ngày 09/04/2022
                        </Typography>
                    </Box>
                    { downSM && renderEditInfoButton }
                </Box>
                {!upMD && renderStatisticalTable}
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    '& img': { height: 'auto', width: 300 }
                }}>
                    <img src={noItem} alt="no item"/>
                    <Typography sx={{ color: grey[500], fontSize: 16 }}>
                        Bạn chưa đăng tải câu hỏi nào cả
                    </Typography>
                </Box>
            </Box>
            {upMD && renderStatisticalTable}
        </Box>
    );
}

export default ProfilePage;