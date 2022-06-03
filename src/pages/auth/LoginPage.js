/* eslint-disable indent */
import { yupResolver } from '@hookform/resolvers/yup';
import { Email, Lock } from '@mui/icons-material';
import {
    Alert,
    Box,
    Button,
    Checkbox, FormControlLabel,
    InputAdornment,
    TextField,
    Typography
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { unwrapResult } from '@reduxjs/toolkit';
import bg from 'assets/images/login-banner.jpg';
import NotificateDialog from 'components/NotificationDialog';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { login } from 'redux/userSlice';
import * as Yup from 'yup';

function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();
    const [showDialog, setShowDialog] = useState(false);
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');

    const signinSchema = Yup.object().shape({
        email: Yup.string()
            .required('Thông tin này là bắt buộc')
            .min(6, 'Tên đăng nhập quá ngắn'),
        password: Yup.string()
            .required('Thông tin này là bắt buộc')
            .min(6, 'Mật khẩu quá ngắn!')
            .max(50, 'Mật khẩu quá dài!')
    });

    const signinForm = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(signinSchema)
    });

    const handleClick = () => {
        setIsLogin(!isLogin);
    };

    const handleShowDialog = () => {
        setShowDialog(true);
    };

    const handleDialogClose = () => {
        setShowDialog(false);
    };

    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            history.push('/home');
        } catch (error) {
            setErrorMessage(error?.data?.message);
        }
    };

    return (
        <Box sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            bgcolor: 'secondary.main'
        }}>
            <Box sx={{
                width: {
                    xs: '100vw',
                    md: 'unset'
                },
                minWidth: '50vw',
                boxSizing: 'border-box',
                padding: {
                    xs: '30px 40px 30px 40px',
                    sm: '30px 100px',
                    lg: '20px 90px',
                    xl: '20px 140px'
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>
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
                    Đăng nhập ngay
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
                    {'Bạn chưa có tài khoản?'} &nbsp;
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
                        <Link to="/logup" onClick={handleShowDialog}>
                            Đi tới đăng ký
                        </Link>
                    </Typography>
                </Box>
                <Box
                    component="form"
                    className="account__text-fields"
                    onSubmit={signinForm.handleSubmit(handleSubmit)}
                    sx={{ width: '100%', boxSizing: 'border-box' }}
                >
                    {
                        errorMessage && <Alert severity="error" sx={{ my: 1 }}>
                            {errorMessage}
                        </Alert>
                    }
                    <Typography variant="subtitle1" sx={{ color: grey[500], pb: 1 }}>Email</Typography>
                    <TextField
                        { ...signinForm.register('email') }
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
                                    <Email sx={{ color: grey[500] }} />
                                </InputAdornment>
                            )
                        }}
                        spellCheck="false"
                        placeholder="Nhập tài khoản"
                        name="email"
                        type="text"
                        error={!!signinForm.formState.errors.email}
                        helperText={signinForm.formState.errors.email?.message ?? ''}
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
                    <Typography variant="subtitle1" sx={{ color: grey[500], pb: 1 }}>Mật khẩu</Typography>
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
                                    <Lock sx={{ color: grey[500] }}/>
                                </InputAdornment>
                            )
                        }}
                        placeholder="Nhập mật khẩu"
                        type="password"
                        name="password"
                        { ...signinForm.register('password') }
                        error={!!signinForm.formState.errors.password}
                        helperText={signinForm.formState.errors.password?.message ?? ''}
                        sx={{
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
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 1,
                        mb: 1
                    }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: blue[600],
                                        '&.Mui-checked': {
                                            color: blue[600]
                                        }
                                    }}
                                />
                            }
                            label={<Typography sx={{ color: grey[600] }}>Lưu đăng nhập</Typography>}
                            spellCheck="false"
                        />
                        <Typography onClick={handleClick}
                            sx={{
                                textDecoration: 'underline',
                                color: blue[500],
                                cursor: 'pointer',
                                fontWeight: 600,
                                '& a': {
                                    textDecoration: 'none',
                                    color: 'inherit'
                                },
                                pb: {
                                    xs: 1,
                                    sm: 0
                                }
                            }}
                        >
                            <Link to="/forgot-password" onClick={handleShowDialog}>
                                Quên mật khẩu
                            </Link>
                        </Typography>
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disableElevation
                        disabled={!isSubmitting ? false : true}
                        sx={{
                            height: 50,
                            fontSize: 18,
                            color: '#fff',
                            textTransform: 'initial',
                            bgcolor: `${blue[600]}!important`
                        }}
                    >
                        { !isSubmitting ? 'Đăng nhập' : 'Đang đăng nhập' }
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
                    minWidth: '50vw',
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'start'
                 }}
            />
            {showDialog && (
                <NotificateDialog
                    showDialog={showDialog}
                    handleDialogClose={handleDialogClose}
                />
            )}
        </Box>
    );
}

export default LoginPage;
