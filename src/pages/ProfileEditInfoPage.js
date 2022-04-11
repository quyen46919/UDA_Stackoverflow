import { ArrowBack, SaveAs } from '@mui/icons-material';
import { Button, Input, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

ProfileEditInfoPage.propTypes = {
    handleOpenEditInfoPage: PropTypes.func.isRequired
};

function ProfileEditInfoPage(props) {
    const { handleOpenEditInfoPage } = props;
    return (
        <Box sx={{
            width: {
                xs: '100%',
                md: 'calc(100% - 350px)'
            },
            borderRadius: 2,
            bgcolor: '#fff',
            p: 3, pt: 2,
            boxSizing: 'border-box'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1
            }}>
                <Button
                    onClick={handleOpenEditInfoPage}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: blue[800],
                        fontSize: 16
                    }}
                >
                    <ArrowBack fontSize="small"/>
                    Quay lại trang chủ
                </Button>
                <Button sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    bgcolor: `${blue[50]}!important`,
                    pl: 2, pr: 2,
                    color: blue[800],
                    fontSize: 16
                }}>
                    <SaveAs fontSize="small"/>
                    Lưu thay đổi
                </Button>
            </Box>
            <Box sx={{
                width: '100%',
                height: 140,
                position: 'relative',
                mt: 2
            }}>
                <Box sx={{
                    width: 120,
                    height: 120,
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: { xs: 'translateX(-50%)' },
                    bgcolor: blue[900],
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
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" type="file" style={{ display: 'none' }}/>
                    <Button
                        component="span"
                        sx={{
                            gap: 1,
                            bgcolor: `${blue[50]}!important`,
                            pl: 2, pr: 2,
                            color: blue[800],
                            fontSize: 16,
                            m: '0 auto'
                        }}
                    >
                    Cập nhật ảnh đại diện
                    </Button>
                </label>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                '& p': {
                    color: grey[500],
                    fontSize: 16,
                    mb: 1,
                    mt: 2
                },
                '& input': { color: grey[700] },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: grey[400]
                    },
                    '&:hover fieldset': {
                        borderColor: blue[500]
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: blue[500]
                    }
                }
            }}>
                <Typography>Tên của bạn</Typography>
                <TextField fullWidth size="small"/>
                <Typography>Lớp hiện tại</Typography>
                <TextField fullWidth size="small"/>
            </Box>
        </Box>
    );
}

export default ProfileEditInfoPage;