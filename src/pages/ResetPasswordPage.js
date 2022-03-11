import { ArrowBack, LockOpen, Password, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function ResetPasswordPage() {
    const [values, setValues] = useState({
        showPassword: false,
        showRetypePassword: false
    });

    const resetPasswordForm = useForm({
        defaultValues: {
            password: '',
            retypePassword: ''
        },
        resolver: yupResolver(Yup.object().shape({
            password: Yup.string()
                .required('Đây là thông tin bắt buộc')
                .min(6, 'Mật khẩu ít nhất 6 kí tự')
                .when('oldPassword', {
                    is: val => (val && val.length > 0 ? true : false),
                    then: Yup.string().notOneOf(
                        [Yup.ref('oldPassword')],
                        'Mật khẩu mới trùng mật khẩu cũ'
                    )
                }),
            retypePassword: Yup.string()
                .when('password', {
                    is: val => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Mật khẩu không trùng khớp'
                    )
                })
                .required('Đây là thông tin bắt buộc')
        }))
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

    const handleClickShowResetPassword = () => {
        setValues({
            ...values,
            showRetypePassword: !values.showRetypePassword
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
            <Box component="form" onSubmit={resetPasswordForm.handleSubmit(handleSubmit)} sx={{
                width: '100%',
                maxWidth: 460,
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
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
                    color: blue[600],
                    textAlign: 'center'
                }}>
                    Đổi mật khẩu
                </Typography>
                <Typography mb={3} sx={{
                    color: grey[600],
                    textAlign: 'center',
                    fontSize: 16
                }}>
                    Bạn đang tiến hành đổi mật khẩu cho tài khoản nguyenchauquyen@gmail.com
                </Typography>
                <Typography variant="subtitle1" sx={{ color: grey[600], mb: 1 }}>Mật khẩu mới</Typography>
                <TextField
                    { ...resetPasswordForm.register('password') }
                    autoFocus
                    autoComplete="true"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Password />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    sx={{
                                        transform: 'translateX(-10px)',
                                        '& svg': { p: 0, color: `${grey[500]}!important` }
                                    }}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    spellCheck="false"
                    placeholder="Nhập mật khẩu mới tại đây"
                    name="password"
                    type={values.showPassword ? 'text' : 'password'}
                    error={!!resetPasswordForm.formState.errors.password}
                    helperText={resetPasswordForm.formState.errors.password?.message ?? ''}
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
                <Typography variant="subtitle1" sx={{ color: grey[600], mb: 1 }}>Nhập lại mật khẩu</Typography>
                <TextField
                    { ...resetPasswordForm.register('retypePassword') }
                    autoFocus
                    autoComplete="true"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpen />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowResetPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    sx={{
                                        transform: 'translateX(-10px)',
                                        '& svg': { p: 0, color: `${grey[500]}!important` }
                                    }}
                                >
                                    {values.showRetypePassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    spellCheck="false"
                    placeholder="Nhập lại mật khẩu"
                    name="retypePassword"
                    type={values.showRetypePassword ? 'text' : 'password'}
                    error={!!resetPasswordForm.formState.errors.retypePassword}
                    helperText={resetPasswordForm.formState.errors.retypePassword?.message ?? ''}
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
                <Button type="submit" fullWidth variant="contained" disableElevation sx={{
                    height: 50,
                    textTransform: 'uppercase',
                    mt: 1
                }}>
                    Đổi mật khẩu
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

export default ResetPasswordPage;