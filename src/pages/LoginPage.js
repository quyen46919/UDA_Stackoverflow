/* eslint-disable indent */
import { yupResolver } from '@hookform/resolvers/yup';
import { Email, Google, Lock, School } from '@mui/icons-material';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    InputAdornment,
    TextField,
    Typography
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import bg from 'assets/images/login-banner.jpg';
import NotificateDialog from 'components/NotidficationDialog';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();
    // const { enqueueSnackbar } = useSnackbar();
    const [showDialog, setShowDialog] = useState(false);
    // const { dispatch } = useContext(AuthContext);

    const signinSchema = Yup.object().shape({
        username: Yup.string()
            .required('Thông tin này là bắt buộc')
            .min(6, 'Tên đăng nhập quá ngắn'),
        password: Yup.string()
            .required('Thông tin này là bắt buộc')
            .min(6, 'Mật khẩu quá ngắn!')
            .max(50, 'Mật khẩu quá dài!')
    });

    const signinForm = useForm({
        defaultValues: {
            username: '',
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

    const handleSubmit = async () => {
        history.push('/question');
        // try {
        //     setIsSubmitting(true);
        //     const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/v1/auth/login`, values);
        //     // dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        //     // enqueueSnackbar('Đăng nhập thành công', {
        //     //     variant: 'success'
        //     // });
        //     history.push('/');
        // } catch (err) {
        //     // dispatch({ type: 'LOGIN_FAILURE' });
        //     // enqueueSnackbar(err?.response.data.message, {
        //     //     variant: 'error'
        //     // });
        // } finally {
        //     setIsSubmitting(false);
        // }
    };

    return (
        <Box sx={{
            width: '100%',
            height: 'auto',
            display: 'flex'
        }}>
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: 'unset'
                },
                minWidth: '40vw',
                boxSizing: 'border-box',
                padding: {
                    xs: '30px 40px 30px 40px',
                    xl: '20px 90px'
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
                            sm: 40
                        }
                    }}
                >Đăng nhập ngay</Typography>
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
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 1
                }}>
                    <Button
                        variant="contained"
                        startIcon={<Google />}
                        disableElevation
                        fullWidth
                        sx={{
                            height: 50,
                            fontSize: 18,
                            color: 'white',
                            '& svg': {
                                color: 'white'
                            }
                        }}
                        onClick={handleShowDialog}
                    >
                        Google
                    </Button>
                    <Button
                        variant="contained"
                        disableElevation
                        startIcon={<School />}
                        fullWidth
                        onClick={handleShowDialog}
                        sx={{
                            height: 50,
                            fontSize: {
                                xs: 16,
                                sm: 18
                            },
                            color: 'white',
                            '& svg': {
                                color: 'white'
                            }
                        }}
                    >
                        Đông Á
                    </Button>
                </Box>
                <Box sx={{ width: '100%', pt: 1 }}>
                    <Divider>
                        Hoặc
                    </Divider>
                </Box>
                <Box
                    component="form"
                    className="account__text-fields"
                    onSubmit={signinForm.handleSubmit(handleSubmit)}
                    sx={{ width: '100%' }}
                >
                    <Typography variant="subtitle1" sx={{ color: grey[600] }}>Email</Typography>
                    <TextField
                        { ...signinForm.register('username') }
                        autoFocus
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
                        name="username"
                        type="text"
                        error={!!signinForm.formState.errors.username}
                        helperText={signinForm.formState.errors.username?.message ?? ''}
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
                    <Typography variant="subtitle1" sx={{ color: grey[600] }}>Mật khẩu</Typography>
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
                            fontSize: 18
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
                        sm: 'block'
                    },
                    backgroundImage: `url('${bg}')`,
                    width: {
                        xs: 0,
                        sm: '60vw'
                    },
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
