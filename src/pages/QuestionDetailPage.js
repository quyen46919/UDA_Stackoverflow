import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Box, Container, Divider, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import user3 from 'assets/images/intro-ChauQuyen.jpg';
import TextEditor from 'components/TextEditor';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function QuestionDetailPage() {
    const ref = useRef();
    useEffect(() => {
        ref.current.scrollIntoView();
    }, []);

    return (
        <>
            <Box ref={ref}/>
            <Container
                maxWidth="xl"
                sx= {{
                    width: {
                        xs: '100%',
                        lg: 'calc(100% - 360px)'
                    },
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems:'flex-start',
                    gap: 5,
                    pb: 6,
                    pt: 2,
                    mt: { xs: 0, lg: 1 },
                    ml: { xs: 0, lg: 3 },
                    mr: { xs: 0, md: 3 },
                    backgroundColor: 'white',
                    transition: '0.2s',
                    borderRadius: 2
                }}
            >
                <Box
                    sx={{
                        height: 'auto',
                        width: '100%',
                        px: { xs: 0, md: 3 },
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 1,
                        marginTop: '10px',
                        borderRadius: 2,
                        overflowWrap: 'anywhere'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 24,
                            fontWeight: 700,
                            color: grey[700]
                        }}
                    >
                        Tôi không cách nào có thể sử dụng useRef React Hook để lấy chiều dài của một component được
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            boxSizing: 'border-box',
                            p: 2.5,
                            pl: 0,
                            pt: 1,
                            gap: 2
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 2

                            }}
                        >
                            <Stack direction="row">
                                <Avatar
                                    alt="Avatar"
                                    src= {user3} />
                            </Stack>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        color: grey[600],
                                        m: 0,
                                        fontSize: 16
                                    }}
                                >
                                    Nguyễn Châu Quyền
                                </Typography>
                                <Typography
                                    sx={{
                                        color: grey[500],
                                        m: 0,
                                        fontSize: 14
                                    }}
                                >
                                    4 days ago
                                </Typography>
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                m: 0
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro distinctio quisquam ea quibusdam commodi quas! Qui, vel itaque culpa pariatur ex ea inventore natus tenetur nam repellendus, quasi saepe eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro distinctio quisquam ea quibusdam commodi quas! Qui, vel itaque culpa pariatur ex ea inventore natus tenetur nam repellendus, quasi saepe eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro distinctio quisquam ea quibusdam commodi quas! Qui, vel itaque culpa pariatur ex ea inventore natus tenetur nam repellendus, quasi saepe eius.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                width: '100%'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 1
                                }}
                            >
                                <FavoriteBorderIcon sx={{ color: grey[400] }} />
                                <Typography
                                    sx={{
                                        color: grey[400],
                                        m: 0,
                                        fontSize: 14
                                    }}
                                    variant="subtitle1"
                                    gutterBottom component="div">
                            4 Likes
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <PriorityHighIcon sx={{ color: grey[400] }} />
                                <Typography
                                    sx={{
                                        color: grey[500],
                                        m: 0,
                                        fontSize: 14
                                    }}>
                                    Báo cáo bài viết này
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            boxSizing: 'border-box',
                            gap: 2,
                            pb: 3
                        }}
                    >
                        <Typography
                            sx={{
                                m: 0,
                                fontSize: 18,
                                fontWeight: 600,
                                width: '100%',
                                pb: 1
                            }}>
                            12 Câu trả lời
                        </Typography>
                        <Divider sx={{ width: '100%' }}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                pt: 1,
                                gap: 2
                            }}
                        >
                            <Stack direction="row">
                                <Avatar
                                    alt="Avatar"
                                    src="https://yt3.ggpht.com/ytc/AKedOLSwsClUG1GFkusyX93-K9XTaDva7Mkw8huSIykH=s68-c-k-c0x00ffffff-no-rj"/>
                            </Stack>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-start',
                                    height: '50px!important'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            color: grey[600],
                                            m: 0,
                                            fontSize: 16
                                        }}
                                    >
                                    Hoàng Hữu Tài
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: grey[500],
                                            m: 0,
                                            fontSize: 14
                                        }}
                                    >
                                    4 ngày trước
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>
                            Tôi chưa dùng thư viện này bao giờ, nhưng tôi có thể giúp bạn bằng một số dòng code dưới đây:
                            </Typography>
                            <Typography>
                            Dưới đây là phần code mẫu cho bạn:
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                boxSizing: 'border-box',
                                p: 2.5,
                                backgroundColor: '#f0f4f5'
                            }}
                        >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae, optio at non eligendi error dolore quibusdam est minima consequatur, cupiditate explicabo totam assumenda repellat? Itaque hic molestias nobis dicta.
                        </Box>
                        <Box>
                            <Typography>
                            Hoặc bạn có thể thử cách khác dưới đây:
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                boxSizing: 'border-box',
                                p: 2.5,
                                backgroundColor: '#f0f4f5'
                            }}
                        >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae, optio at non eligendi error dolore quibusdam est minima consequatur, cupiditate explicabo totam assumenda repellat? Itaque hic molestias nobis dicta.
                        </Box>
                        <Box>
                            <Typography>
                            Bạn có thể tham khảo thêm tại: &nbsp;
                                <Link to="https://github.com/quyen46919/UDA_Stackoverflow">
                                https://github.com/quyen46919/UDA_Stackoverflow
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ width: '100%' }}/>
                    <Box sx={{
                        width: '100%',
                        mt: 1
                    }}>
                        <Typography sx={{ color: grey[700], mb: 1.5 }}>
                            Nhập câu trả lời của bạn
                        </Typography>
                        <TextEditor/>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default QuestionDetailPage;