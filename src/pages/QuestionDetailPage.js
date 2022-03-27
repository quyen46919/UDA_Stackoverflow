import { Box, Chip, Container, Typography } from '@mui/material';
import ActionMenu from 'components/ActionMenu';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import user3 from 'assets/images/intro-ChauQuyen.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import user4 from 'assets/images/intro-HuuTai.jpg';
import { green, grey, lightGreen } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import { set } from 'lodash';

function QuestionDetailPage() {
    const ref = useRef();

    useEffect(() => {
        if (ref && ref.current && ref.current.clientHeight) {
            console.log('called');
        }
        console.log('useEffect', {
            ref,
            current: ref.current,
            clientHeight: ref.current.clientHeight
        });
    }, []);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 100 && position < (parseFloat(ref.current.clientHeight) - 500)) {
            setScrollPosition(position);
        }
        if (window.pageYOffset === 0) {
            setScrollPosition(0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(scrollPosition);


    return (
        <Container
            maxWidth="xl"
            sx= {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems:'flex-start',
                pt: 6,
                backgroundColor: 'white',
                gap: 5,
                transition: '0.2s'
            }}
        >
            <ActionMenu marginHeight = { scrollPosition }/>
            <Box
                sx={{
                    height: 'auto',
                    // height: '100vh',
                    width: { xs:'100vw', md: '80vw' },
                    // overflow: 'auto',
                    px: { xs: 1, md: 3 },
                    boxSizing: 'border-box',
                    // '&::-webkit-scrollbar':{
                    //     'webkitAppearance': 'none',
                    //     width: 0
                    // },
                    // '&::-webkit-scrollbar-thumb':{
                    //     background: 'rgb(214, 214, 214)',
                    //     borderRadius: '5px'
                    // },
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 1,
                    marginTop: '10px',
                    borderRadius: 2
                }}
                ref={ref}
            >
                <Typography
                    variant="h5"
                    gutterBottom component="div"
                    sx={{
                        fontSize: 26,
                        fontWeight: 700,
                        pl: 2.5
                    }}
                >
                    Đây là tiêu đề cho câu hỏi của bạn
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
                        pt: 1,
                        // boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
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
                                    m: 0,
                                    fontSize: 16
                                }}
                                variant="h6"
                                gutterBottom component="div">
                            Nguyễn Châu Quyền
                            </Typography>
                            <Typography
                                sx={{
                                    color: grey[400],
                                    m: 0,
                                    fontSize: 14
                                }}
                                variant="subtitle1"
                                gutterBottom component="div">
                            4 days ago
                            </Typography>
                        </Box>

                    </Box>

                    <Typography
                        sx={{
                            // color: grey[400],
                            m: 0,
                            fontSize: 15
                        }}
                        variant="subtitle1"
                        gutterBottom component="div">
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
                            <Link to= {'#'}><FavoriteBorderIcon sx={{ color: grey[400] }} /></Link>

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
                            <Link to= {'#'}><PriorityHighIcon sx={{ color: grey[400] }} /></Link>

                            <Typography
                                sx={{
                                    color: grey[400],
                                    m: 0,
                                    fontSize: 14
                                }}
                                variant="subtitle1"
                                gutterBottom component="div">
                            Report this topic
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
                        p: 2.5
                        // boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    }}
                >
                    <Typography
                        sx={{
                            // color: grey[400],
                            m: 0,
                            fontSize: 16,
                            fontWeight: 600,
                            width: '100%',
                            pb: 1,
                            borderBottom: '1px solid #d9d8d7'
                        }}
                        variant="subtitle1"
                        gutterBottom component="div">
                            12 Câu trả lời
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            // pt: 2,
                            gap: 2

                        }}
                    >
                        <Stack direction="row">
                            <Avatar
                                alt="Avatar"
                                src= {user4} />
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
                                    flexDirection:'row',
                                    justifyContent:'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 2
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        m: 0,
                                        fontSize: 16
                                    }}
                                    variant="h6"
                                    gutterBottom component="div">
                                        Hoàng Hữu Tài
                                </Typography>
                                <Chip sx={{ color: lightGreen['A400'], backgroundColor: green[50] }} label="Best Answer" />
                            </Box>

                            <Typography
                                sx={{
                                    color: grey[400],
                                    m: 0,
                                    fontSize: 14
                                }}
                                variant="subtitle1"
                                gutterBottom component="div">
                            4 days ago
                            </Typography>
                        </Box>


                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                m: 0,
                                fontSize: 15,
                                color: grey[600]
                            }}
                            variant="h6"
                            gutterBottom component="div">
                            Tôi chưa dùng thư viện này bao giờ, nhưng tôi có thể giúp bạn bằng một số dòng code dưới đây:
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                m: 0,
                                fontSize: 15,
                                color: grey[600]
                            }}
                            variant="h6"
                            gutterBottom component="div">
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
                        <Typography
                            sx={{
                                fontWeight: 600,
                                m: 0,
                                fontSize: 15,
                                color: grey[600]
                            }}
                            variant="h6"
                            gutterBottom component="div">
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
                        <Typography
                            sx={{
                                fontWeight: 600,
                                m: 0,
                                fontSize: 15
                            }}
                            variant="h6"
                            gutterBottom component="div">
                            Check this link: <Link to={'#'}>https://github.com/quyen46919/UDA_Stackoverflow</Link>
                        </Typography>
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
                        p: 2.5
                        // boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            // pt: 2,
                            gap: 2

                        }}
                    >
                        <Stack direction="row">
                            <Avatar
                                alt="Avatar"
                                src= {user4} />
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
                                    m: 0,
                                    fontSize: 16
                                }}
                                variant="h6"
                                gutterBottom component="div">
                            Hoàng Hữu Tài
                            </Typography>
                            <Typography
                                sx={{
                                    color: grey[400],
                                    m: 0,
                                    fontSize: 14
                                }}
                                variant="subtitle1"
                                gutterBottom component="div">
                            4 days ago
                            </Typography>
                        </Box>

                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                m: 0,
                                fontSize: 15,
                                color: grey[600]
                            }}
                            variant="h6"
                            gutterBottom component="div">
                            Tôi chưa dùng thư viện này bao giờ, nhưng tôi có thể giúp bạn bằng một số dòng code dưới đây:
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                m: 0,
                                fontSize: 15,
                                color: grey[600]
                            }}
                            variant="h6"
                            gutterBottom component="div">
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
                        <Typography
                            sx={{
                                fontWeight: 600,
                                m: 0,
                                fontSize: 15,
                                color: grey[600]
                            }}
                            variant="h6"
                            gutterBottom component="div">
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
                        <Typography
                            sx={{
                                fontWeight: 600,
                                m: 0,
                                fontSize: 15
                            }}
                            variant="h6"
                            gutterBottom component="div">
                            Check this link: <Link to={'#'}>https://github.com/quyen46919/UDA_Stackoverflow</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default QuestionDetailPage;