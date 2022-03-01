/* eslint-disable indent */
import { yupResolver } from '@hookform/resolvers/yup';
import { Email, Lock, Person, Phone } from '@mui/icons-material';
import {
    Box,
    Button,
    Checkbox, FormControlLabel,
    InputAdornment,
    TextField,
    Typography
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import bg from 'assets/images/login-banner.jpg';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

function LogupPage() {
    const [isLogin, setIsLogin] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();
    // const { enqueueSnackbar } = useSnackbar();
    // const { dispatch } = useContext(AuthContext);

    const signupSchema = Yup.object().shape({
        email: Yup.string()
            .required('Thông tin này là bắt buộc')
            .email('Email không hợp lệ'),
        password: Yup.string()
            .required('Thông tin này là bắt buộc')
            .min(6, 'Mật khẩu quá ngắn!')
            .max(50, 'Mật khẩu quá dài!'),
        username: Yup.string()
            .required('Thông tin này là bắt buộc'),
        phone: Yup.string()
            .trim()
            .required('Thông tin này là bắt buộc')
            .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Không đúng định dạng số điện thoại')
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
            display: 'flex',
            flexDirection: 'row-reverse',
            overflowX: 'hidden!important'
        }}>
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: 'unset'
                },
                height: '100vh',
                minWidth: '40vw',
                boxSizing: 'border-box',
                padding: {
                    xs: '30px 40px 30px 40px',
                    xl: '30px 90px'
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
                <Typography
                    sx={{
                        fontSize: {
                            xs: 28,
                            sm: 40
                        }
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
                    className="account__text-fields"
                    onSubmit={signupForm.handleSubmit(handleSubmit)}
                    sx={{ width: '100%' }}
                >
                    <Typography variant="subtitle1" sx={{ color: grey[600] }}>Tên đăng nhập</Typography>
                    <TextField
                        { ...signupForm.register('username') }
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
                                    <Person />
                                </InputAdornment>
                            )
                        }}
                        spellCheck="false"
                        placeholder="Nhập tài khoản"
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
                    <Typography variant="subtitle1" sx={{ color: grey[600] }}>Email</Typography>
                    <TextField
                        { ...signupForm.register('email') }
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
                    <Typography variant="subtitle1" sx={{ color: grey[600] }}>Số điện thoại</Typography>
                    <TextField
                        { ...signupForm.register('phone') }
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
                                    <Phone />
                                </InputAdornment>
                            )
                        }}
                        spellCheck="false"
                        placeholder="Nhập tài khoản"
                        name="phone"
                        type="text"
                        error={!!signupForm.formState.errors.phone}
                        helperText={signupForm.formState.errors.phone?.message ?? ''}
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
                    <Box sx={{
                        width: '100%',
                        display: 'block',
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
                            label={<Typography sx={{ color: grey[600] }}>Tôi đã đọc và chấp nhận điều khoản sử dụng của website</Typography>}
                            spellCheck="false"
                        />
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
                    width: '60vw',
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: '300px'
                 }}
            />
        </Box>
    );
}

export default LogupPage;
