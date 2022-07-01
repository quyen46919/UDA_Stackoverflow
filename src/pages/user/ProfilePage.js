import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import noItem from 'assets/images/no-item.png';
import { useTheme } from '@emotion/react';
import ProfileEditInfoPage from './ProfileEditInfoPage';
import UserAPI from 'api/user.api';
import { useSelector } from 'react-redux';
import moment from 'moment';
import QuestionBox from 'components/QuestionBox';

function ProfilePage() {
    const theme = useTheme();
    const upMD = useMediaQuery(theme.breakpoints.up('md'));
    const downSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [isEdit, setIsEdit] = useState(false);
    const [postedQuestionList, setPostedQuestionList] = useState([]);
    const { user } = useSelector(state => state.user.current);

    const handleOpenEditInfoPage = () => {
        setIsEdit(!isEdit);
    };

    useEffect(() => {
        const loadPostedQuestionList = async () => {
            try {
                const response = await UserAPI.fetchAllPostedQuestions(user?.id);
                setPostedQuestionList(response?.data?.questions);
            } catch (err) {
                // console.log(err?.message);
            }
        };
        loadPostedQuestionList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderStatisticalTable = (
        <Box sx={{
            width: { xs: '100%', md: 350 },
            minWidth: { xs: '100%', md: 350 },
            height: { xs: 'auto', md: 350 },
            p: 3,
            bgcolor: 'secondary.main',
            pt: { xs: 0, md: 3 },
            boxSizing: 'border-box',
            borderRadius: 2,
            '& > div': {
                width: '100%',
                bgcolor: 'secondary.light',
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
            onClick={handleOpenEditInfoPage}
            sx={{
                display: 'block',
                textTransform: 'initial',
                position: { xs: 'relative', sm: 'absolute' },
                right: 0,
                bottom: { xs: 0, sm: 20 },
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
            {
                !isEdit
                    ? <Box sx={{
                        width: {
                            xs: '100%',
                            md: 'calc(100% - 350px)'
                        },
                        borderRadius: 2
                    }}>
                        <Box sx={{
                            width: '100%',
                            bgcolor: 'secondary.main',
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
                                        <img src={user?.avatar} alt={user?.username}/>
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
                                    {user?.username}
                                </Typography>
                                <Typography sx={{ color: grey[500], fontSize: 16 }}>
                                    Tham gia vào {moment(user?.created_at).format('DD-MM-YYYY')}
                                </Typography>
                            </Box>
                            { downSM && renderEditInfoButton }
                        </Box>
                        {!upMD && renderStatisticalTable}
                        {
                            postedQuestionList.length > 0
                                ? <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                    mt: 1
                                }}>
                                    {
                                        postedQuestionList.map((question) =>
                                            <QuestionBox key={question.id} item={question} isLine={true}/>
                                        )
                                    }
                                </Box>
                                : <Box sx={{
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
                        }
                    </Box>
                    : <ProfileEditInfoPage handleOpenEditInfoPage={handleOpenEditInfoPage}/>
            }
            {upMD && renderStatisticalTable}
        </Box>
    );
}

export default ProfilePage;