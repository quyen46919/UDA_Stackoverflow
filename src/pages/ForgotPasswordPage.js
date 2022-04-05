import { ArrowBack, Email } from '@mui/icons-material';
import {
    Box, Button, InputAdornment, TextField, Typography
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function ForgotPasswordPage() {

    const forgotPasswordForm = useForm({
        defaultValues: {
            email: ''
        },
        resolver: yupResolver(Yup.object().shape({
            email: Yup.string()
                .required('Thông tin này là bắt buộc')
                .email('Email không hợp lệ')
        }))
    });

    const handleSubmit = () => {
        // console.log(values);
    };

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box
                component="form"
                onSubmit={forgotPasswordForm.handleSubmit(handleSubmit)}
                sx={{
                    width: 'fit-content',
                    maxWidth: 460,
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: {
                        xs: 'none',
                        md: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    },
                    p: '20px 30px',
                    backgroundColor: '#ffffff',
                    borderRadius: 2
                }}>
                <Typography mb={2} sx={{
                    fontSize: {
                        xs: 24, sm: 28
                    },
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: blue[600]
                }}>
                    Quên mật khẩu
                </Typography>
                <Typography mb={3} sx={{
                    color: grey[600],
                    textAlign: 'center',
                    fontSize: 16
                }}>
                    Nhập email đã đăng ký của bạn vào ô bên dưới và chúng tôi sẽ gửi vào email của bạn link xác nhận đổi mật khẩu
                </Typography>
                <TextField
                    { ...forgotPasswordForm.register('email') }
                    autoFocus
                    autoComplete="true"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email />
                            </InputAdornment>
                        )
                    }}
                    spellCheck="false"
                    placeholder="Nhập email tại đây"
                    name="email"
                    type="text"
                    error={!!forgotPasswordForm.formState.errors.email}
                    helperText={forgotPasswordForm.formState.errors.email?.message ?? ''}
                    sx={{
                        pb: 2,
                        '.Mui-focused': { border: 'none', outline: 'none' },
                        '& ::placeholder': { fontSize: 18, color: grey[700] },
                        '& svg': { pr: 1 },
                        '& input': {
                            color: grey[700],
                            pl: 1
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: grey[300]
                            },
                            '&:hover fieldset': {
                                borderColor: blue[500]
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: blue[500]
                            }
                        }
                    }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disableElevation sx={{
                        height: 50,
                        textTransform: 'uppercase',
                        mt: 1
                    }}>
                    Gửi link xác nhận
                </Button>
                <Button startIcon={<ArrowBack/>} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                    '& a': {
                        textDecoration: 'none',
                        color: 'inherit',
                        fontSize: 16
                    }
                }}>
                    <Link to="/login">
                        Quay lại đăng nhập
                    </Link>
                </Button>
            </Box>
        </Box>
    );
}

export default ForgotPasswordPage;