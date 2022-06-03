/* eslint-disable indent */
import { yupResolver } from '@hookform/resolvers/yup';
import { Email, Lock, Person } from '@mui/icons-material';
import {
    Alert,
    Box,
    Button, InputAdornment,
    TextField,
    Typography
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { unwrapResult } from '@reduxjs/toolkit';
import bg from 'assets/images/login-banner.jpg';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logup } from 'redux/userSlice';
import * as Yup from 'yup';

function LogupPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [message, setMessage] = useState('');

    const signupSchema = Yup.object().shape({
        email: Yup.string()
            .required('Thông tin này là bắt buộc')
            .email('Email không hợp lệ'),
        password: Yup.string()
            .required('Thông tin này là bắt buộc')
            .min(6, 'Mật khẩu quá ngắn!')
            .max(50, 'Mật khẩu quá dài!'),
        username: Yup.string()
            .required('Thông tin này là bắt buộc')
    });

    const signupForm = useForm({
        defaultValues: {
            email: '',
            username: '',
            password: ''
        },
        resolver: yupResolver(signupSchema)
    });

    const handleClick = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = async (values) => {
        setIsSubmitting(true);
        try {
            const action = logup(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            signupForm.reset();
            enqueueSnackbar('Tạo tài khoản thành công', { variant: 'success' });
            setMessage('Tạo tài khoản thành công, vui lòng kiểm tra gmail để xác thực tài khoản');
        } catch (error) {
            if (error?.data?.message) {
                if (error?.data?.message === 'Địa chỉ email này đã tồn tại') {
                    signupForm.setError('email', { type: 'custom', message: error?.data?.message });
                }
            }
        } finally {
            setIsSubmitting(false);
        }
        // }
    };

    // const handleSignupSubmit = async (values) => {
    //     try {
    //         await axios.post(`${process.env.REACT_APP_SERVER_URL}/v1/auth/register`, values);
    //         enqueueSnackbar('Đăng ký thành công', {
    //             variant: 'success'
    //         });
    //         signupForm.reset();
    //     } catch (err) {
    //         // console.log(err.response.data.message);
    //         enqueueSnackbar(err.response.data.message || 'Có lỗi xảy ra, vui lòng thử lại!', {
    //             variant: 'error'
    //         });
    //     }
    // };

    return (
        <Box sx={{
            width: '100%',
            height: 'auto',
            bgcolor: 'secondary.main',
            display: 'flex',
            flexDirection: 'row-reverse',
            overflowX: 'hidden!important',
            '& ::-webkit-scrollbar': {
                'WebkitAppearance': 'none!important',
                'width': '6px!important'
            },
            '& ::-webkit-scrollbar-thumb': {
                'background': 'rgb(214, 214, 214)!important',
                'borderRadius': '5px!important'
            }
        }}>
            <Box sx={{
                width: {
                    xs: '100%',
                    md: '50vw'
                },
                height: '100vh',
                minWidth: '50vw',
                boxSizing: 'border-box',
                padding: {
                    xs: '30px 40px 30px 40px',
                    md: '30px 100px',
                    lg: '20px 90px',
                    xl: '20px 140px'
                },
                display: {
                    xs: 'block',
                    sm: 'flex'
                },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                overflowY: 'scroll'
            }}>
                {
                    message && <Alert severity="success">{message}</Alert>
                }
                <Typography
                    sx={{
                        fontSize: {
                            xs: 28,
                            sm: 36
                        },
                        color: blue[600],
                        fontWeight: 600,
                        pb: 1
                    }}
                >
                    Đăng ký
                </Typography>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    mb: 2,
                    fontSize: 18,
                    pb: 2,
                    color: grey[600]
                }}>
                    {'Bạn đã tài khoản?'} &nbsp;
                    <Typography onClick={handleClick}
                        sx={{
                            textDecoration: 'underline',
                            color: blue[500],
                            cursor: 'pointer',
                            fontWeight: 600,
                            '& a': {
                                textDecoration: 'none',
                                color: 'inherit'
                            }
                        }}
                    >
                        <Link to="/login">
                            Đăng nhập ngay
                        </Link>
                    </Typography>
                </Box>
                <Box
                    component="form"
                    onSubmit={signupForm.handleSubmit(handleSubmit)}
                    sx={{ width: '100%' }}
                >
                    <Typography variant="subtitle1" sx={{ color: grey[600], pb: 1 }}>Tên của bạn</Typography>
                    <TextField
                        { ...signupForm.register('username') }
                        autoComplete="true"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"
                                    sx={{
                                        display: {
                                            xs: 'none',
                                            sm: 'flex'
                                        }
                                    }}
                                >
                                    <Person />
                                </InputAdornment>
                            )
                        }}
                        spellCheck="false"
                        placeholder="Nhập tên của bạn"
                        name="username"
                        type="text"
                        error={!!signupForm.formState.errors.username}
                        helperText={signupForm.formState.errors.username?.message ?? ''}
                        sx={{
                            pb: 1,
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
                    <Typography variant="subtitle1" sx={{ color: grey[600], pb: 1 }}>Email (Đăng nhập)</Typography>
                    <TextField
                        { ...signupForm.register('email') }
                        autoComplete="true"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"
                                    sx={{
                                        display: {
                                            xs: 'none',
                                            sm: 'flex'
                                        }
                                    }}
                                >
                                    <Email />
                                </InputAdornment>
                            )
                        }}
                        spellCheck="false"
                        placeholder="Nhập tài khoản"
                        name="email"
                        type="email"
                        error={!!signupForm.formState.errors.email}
                        helperText={signupForm.formState.errors.email?.message ?? ''}
                        sx={{
                            pb: 1,
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
                    <Typography variant="subtitle1" sx={{ color: grey[600], pb: 1 }}>Mật khẩu</Typography>
                    <TextField
                        autoComplete="true"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"
                                    sx={{
                                        display: {
                                            xs: 'none',
                                            sm: 'flex'
                                        }
                                    }}
                                >
                                    <Lock />
                                </InputAdornment>
                            )
                        }}
                        placeholder="Nhập mật khẩu"
                        type="password"
                        name="password"
                        { ...signupForm.register('password') }
                        error={!!signupForm.formState.errors.password}
                        helperText={signupForm.formState.errors.password?.message ?? ''}
                        sx={{
                            pb: 1,
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
                        type="submit"
                        fullWidth
                        variant="contained"
                        disableElevation
                        disabled={!isSubmitting ? false : true}
                        sx={{
                            height: 50,
                            fontSize: 18,
                            mt: 2,
                            bgcolor: `${blue[600]}!important`,
                            color: '#fff'
                        }}
                    >
                        { !isSubmitting ? 'Đăng ký' : 'Đang đăng ký' }
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    },
                    backgroundImage: `url('${bg}')`,
                    width: '50vw',
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'start'
                }}
            />
        </Box>
    );
}

export default LogupPage;
