import { useTheme } from '@emotion/react';
import { Home, Login } from '@mui/icons-material';
import { Button, Container, Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { coreValues } from 'assets/dataset/coreValues';
import banner from 'assets/images/intro-introduce-img.png';
import { programmingLanguges } from 'assets/programinglanguages';
import { userComment } from 'assets/userComment';
import Footer from 'components/Footer';
import SlickSlider from 'components/SlickSlider';
import StyledScript from 'components/StyledScript';
import UserRatingComment from 'components/UserRatingComment';
import React from 'react';
import { Link } from 'react-router-dom';

const DIVIDER_STYLES = {
    width: { xs: '100%', md: '70%' },
    m: '0 auto',
    fontSize: 24,
    fontWeight: 600,
    mb: { xs: 2, md: 8 },
    '& span': {
        pl: { xs: 0, md: 4 },
        pr: { xs: 0, md: 4 }
    },
    '&::before, &::after': {
        borderColor: {
            xs: 'transparent',
            md: blue[600]
        }
    }
};

function IntroPage() {
    const theme = useTheme();
    const belowSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="xl" sx={{
            pt: { xs: 0, md: 4 },
            pl: { xs: 0, md: 2 },
            pr: { xs: 0, md: 2 } }}
        >
            <Box sx={{
                width: '80%',
                m: '0 auto',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                flexDirection: {
                    xs: 'column',
                    lg: 'row'
                },
                gap: 8,
                mb: 4,
                mt: {
                    xs: 5,
                    lg: 0
                },
                '& img': {
                    width: {
                        xs: '100%',
                        lg: 'auto'
                    },
                    height: {
                        xs: 180,
                        sm: 300,
                        lg: 360
                    },
                    maxWidth: {
                        xs: '100%',
                        lg: '50%'
                    },
                    objectFit: 'cover'
                }
            }}>
                <img src={banner}/>
                <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
                    <Typography sx={{
                        fontSize: 24,
                        color: grey[500],
                        fontWeight: 600,
                        mb: { xs: 0, md: 1 },
                        mt: { xs: 0, md: 3 }
                    }}>
                        Who we are
                    </Typography>
                    <Typography sx={{
                        fontSize: { xs: 24, md: 34 },
                        fontWeight: 600,
                        color: grey[800],
                        mb: 3
                    }}>
                        Empowering the world to develop technology through collective knowledge.
                    </Typography>
                    <Typography sx={{
                        fontSize: { xs: 16, md: 19 },
                        color: grey[600],
                        mb: 3
                    }}>
                        Our public platform serves &nbsp;
                        <Typography component="span" sx={{ color: grey[800], fontSize: 20, fontWeight: 600 }}>
                            100 million people every month
                        </Typography>
                        , making it one of the most popular websites in the world.
                        <br/><br/>
                        Our asynchronous knowledge management and collaboration offering, &nbsp;
                        <Typography component="span" sx={{ color: grey[800], fontSize: 20, fontWeight: 600 }}>
                        Stack Overflow for Teams
                        </Typography>
                        , is transforming how people work.
                    </Typography>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        },
                        justifyContent: 'flex-start',
                        gap: 1,
                        '& a': {
                            textDecoration: 'none',
                            color: 'inherit',
                            width: { xs: '100%!important', md: 220 }
                        }
                    }}>
                        <Link to="/home">
                            <Button sx={{
                                width: { xs: '100%!important', md: 220 },
                                bgcolor: `${blue[50]}!important`,
                                color: blue[800],
                                fontSize: 18,
                                pl: 2, pr: 2, pt: 1, pb: 1
                            }}>
                            Đi tới trang chủ <Home sx={{ ml: 1 }}/>
                            </Button>
                        </Link>
                        <Link to="/logup">
                            <Button sx={{
                                width: { xs: '100%!important', md: 220 },
                                bgcolor: `${blue[50]}!important`,
                                color: blue[800],
                                fontSize: 18,
                                pl: 2, pr: 2, pt: 1, pb: 1
                            }}>
                            Đi tới đăng nhập <Login sx={{ ml: 1 }}/>
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                width: { xs: '96%', lg: '80%!important' },
                m: '0 auto',
                pt: 4
            }}>
                <Divider sx={DIVIDER_STYLES}>
                    <StyledScript text="Giá trị cốt lõi"/>
                </Divider>
            </Box>
            <Grid container spacing={belowSM ? 1 : 3} columnSpacing={belowSM ? 1 : 6}
                sx={{ width: '80%', m: '0 auto', mb: 6, mt: 3 }}>
                {
                    coreValues.map((item) => (
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={item.id}>
                            <Box sx={{
                                mb: 1,
                                '& svg': {
                                    fontSize: 40,
                                    color: blue[800]
                                }
                            }}>
                                {item.icon}
                            </Box>
                            <Typography sx={{
                                fontSize: 24,
                                color: grey[800],
                                fontWeight: 700
                            }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{
                                fontSize: 16,
                                mt: 1
                            }}>
                                {item.content}
                            </Typography>
                        </Grid>
                    ))
                }
            </Grid>
            <Box sx={{
                width: '80%',
                m: '0 auto',
                pt: 4
            }}>
                <Divider sx={DIVIDER_STYLES}>
                    <StyledScript text="Những ngôn ngữ được hỗ trợ"/>
                </Divider>
            </Box>
            <Grid container spacing={2}
                sx={{ width: '80%', m: '0 auto', mb: 10, mt: 3 }}>
                {
                    programmingLanguges.map((item) => (
                        <Grid item xs={12} sm={6} md={3} lg={2} xl={2} key={item.id} justifyContent="center" alignItems="center">
                            <Box sx={{
                                width: '100%',
                                boxSizing: 'border-box',
                                pt: 3, pb: 3,
                                boxShadow: '#d1f4ff 0px 0px 8px!important',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                borderRadius: 3,
                                transition: 'all .35s ease',
                                gap: 2,
                                '& img': {
                                    width: 70,
                                    height: 70
                                },
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '#b1f4fa 0px 0px 16px!important'
                                }
                            }}>

                                <img src={item.image}/>
                                <Typography sx={{ color: blue[900] }}>
                                    {item.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            <Box sx={{
                width: '80%',
                m: '0 auto',
                pt: 4
            }}>
                <Divider sx={DIVIDER_STYLES}>
                    <StyledScript text="Quản trị viên"/>
                </Divider>
            </Box>
            <Box sx={{
                width: '80%',
                m: '0 auto',
                minHeight: 400
            }}>
                <SlickSlider/>
            </Box>
            <Box sx={{
                width: '100%',
                height: 'auto',
                bgcolor: '#fafeff',
                pt: 8, pb: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10
            }}>
                {
                    userComment.map((content) => (
                        <UserRatingComment key={content.id} content={content}/>
                    ))
                }
            </Box>
            <Footer/>
        </Container>
    );
}

export default IntroPage;