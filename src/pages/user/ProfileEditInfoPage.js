import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowBack, SaveAs } from '@mui/icons-material';
import { Button, Grid, Input, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { unwrapResult } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, updateUserPassword } from 'redux/userSlice';
import * as Yup from 'yup';

ProfileEditInfoPage.propTypes = {
    handleOpenEditInfoPage: PropTypes.func.isRequired
};

const boxContainsTextFieldStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    bgcolor: 'secondary.main',
    p: '8px 24px 24px 24px',
    mt: 1,
    '& p': {
        color: 'text.secondary',
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
};

function ProfileEditInfoPage(props) {
    const { handleOpenEditInfoPage } = props;
    const { user } = useSelector(state => state.user.current);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [image, setImage] = useState();
    const [rawImage, setRawImage] = useState();

    const userSchema = Yup.object().shape({
        username: Yup.string()
            .required('Thông tin này là bắt buộc')
            .min(6, 'Tên đăng nhập quá ngắn')
    });

    const userForm = useForm({
        defaultValues: {
            username: user?.username
        },
        resolver: yupResolver(userSchema)
    });

    const handleUserFormSubmit = async (values) => {
        const formValues = {
            id: user?.id,
            ...values
        };

        try {
            const action = await updateUser(formValues);
            dispatch(action);
            enqueueSnackbar('Cập nhật thông tin thành công', { variant: 'success' });
        } catch (err) {
            enqueueSnackbar('Cập nhật thất bại, vui lòng thử lại sau', { variant: 'error' });
        }
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file);
        }
        reader.onloadend = () => {
            setImage([reader.result]);
        };
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setRawImage(file);
        previewFile(file);
    };

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        URL.revokeObjectURL(image);
    }, [image]);

    const updateUserAvatar = async () => {
        if (!image) return;
        try {
            const formData = new FormData();
            formData.append('file', rawImage);

            const response = await axios.post( `${process.env.REACT_APP_API_SERVER_URL}/upload-image`,
                formData, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
            const fileUrl = response.data.imageUrl;
            const action = updateUser({ id: user?.id, avatar: fileUrl });
            dispatch(action);
            setImage();
            enqueueSnackbar('Cập ảnh ảnh đại diện thành công', { variant: 'success' });
        } catch (err) {
            enqueueSnackbar('Cập nhật thất bại, vui lòng thử lại sau', { variant: 'error' });
        }
    };

    const changePasswordForm = useForm({
        defaultValues: {
            oldPassword: '',
            password: '',
            retypePassword: ''
        },
        resolver: yupResolver(Yup.object().shape({
            oldPassword: Yup.string()
                .required('Đây là thông tin bắt buộc')
                .min(6, 'Mật khẩu ít nhất 6 kí tự'),
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

    const handleChangePassword = async(values) => {
        try {
            delete values.retypePassword;
            const action = await updateUserPassword({ id: user?.id, password: values.password, oldPassword: values.oldPassword });
            const response = await dispatch(action);
            unwrapResult(response);
            enqueueSnackbar('Cập nhật mật khẩu thành công', { variant: 'success' });
            changePasswordForm.reset();
        } catch (error) {
            enqueueSnackbar('Cập nhật thất bại', { variant: 'error' });
            if (error?.data?.message === 'Mật khẩu sai') {
                changePasswordForm.setError('oldPassword', { type: 'custom', message: error.data.message });
            }
        }
    };

    return (
        <Box sx={{
            width: {
                xs: '100%',
                md: 'calc(100% - 350px)'
            }
        }}>
            <Box sx={{
                width: '100%',
                borderRadius: 2,
                p: 3, pt: 2,
                boxSizing: 'border-box',
                bgcolor: 'secondary.main'
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
                    }}
                    disabled={image ? false : true}
                    onClick={updateUserAvatar}
                    >
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
                            <img src={image || user?.avatar} alt={user?.username}/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <label htmlFor="contained-button-file">
                        <Input
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            onChange={handleFileInputChange}
                            style={{ display: 'none' }}
                        />
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
            </Box>
            {/* CHANGE USERNAME AND OTHER INFOR */}
            <Box sx={boxContainsTextFieldStyles}
                component="form"
                className="account__text-fields"
                onSubmit={userForm.handleSubmit(handleUserFormSubmit)}
            >
                <Grid container columnSpacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography>Tên của bạn</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            { ...userForm.register('username') }
                            error={!!userForm.formState.errors.username}
                            helperText={userForm.formState.errors.username?.message ?? ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography>Email</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            disabled
                            value={user?.email}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        bgcolor: `${blue[50]}!important`,
                        pl: 2, pr: 2,
                        color: blue[800],
                        fontSize: 16,
                        mt: 3
                    }}
                >
                    <SaveAs fontSize="small"/>
                    Lưu thay đổi
                </Button>
            </Box>
            <Box sx={boxContainsTextFieldStyles}
                component="form"
                className="account__text-fields"
                onSubmit={changePasswordForm.handleSubmit(handleChangePassword)}
            >
                <Grid container columnSpacing={2} sx={{ '& .MuiFormHelperText-root.Mui-error': { my: 0.5 } }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography>Mật khẩu cũ</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type="password"
                            { ...changePasswordForm.register('oldPassword') }
                            error={!!changePasswordForm.formState.errors.oldPassword}
                            helperText={changePasswordForm.formState.errors.oldPassword?.message ?? ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}></Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography>Mật khẩu mới</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type="password"
                            { ...changePasswordForm.register('password') }
                            error={!!changePasswordForm.formState.errors.password}
                            helperText={changePasswordForm.formState.errors.password?.message ?? ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography>Nhập lại mật khẩu mới</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type="password"
                            { ...changePasswordForm.register('retypePassword') }
                            error={!!changePasswordForm.formState.errors.retypePassword}
                            helperText={changePasswordForm.formState.errors.retypePassword?.message ?? ''}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        bgcolor: `${blue[50]}!important`,
                        pl: 2, pr: 2,
                        color: blue[800],
                        fontSize: 16,
                        mt: 3
                    }}
                >
                    <SaveAs fontSize="small"/>
                    Lưu thay đổi
                </Button>
            </Box>
        </Box>
    );
}

export default ProfileEditInfoPage;