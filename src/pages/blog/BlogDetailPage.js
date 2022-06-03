import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import backgroundimg from 'assets/images/travel.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

function BlogDetailPage() {
    return (
        <Container maxWidth="xl"
            sx={{
                height: 'auto',
                pb:4,
                pt:'30px'
            }}>,
            <Box
                sx={{
                    width: '100%',
                    height: '500px',
                    pb: '30px',
                    // backgroundImage: `url(${backgroundimg})`,
                    '& img': {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }
                }}>
                <img src={backgroundimg}/>
            </Box>,
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: {
                        sm: 'column',
                        md: 'row',
                        xs: 'column'
                    }
                }}>
                <Box
                    sx={{
                        width: '100px',
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: {
                            sm: 'row',
                            md: 'column',
                            xs: 'row'
                        }
                    }}>
                    <Box
                        sx={{
                            width: {
                                sm: '150px',
                                md: '100%',
                                xs: '110px'

                            },
                            height: '65px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: {
                                md: '10px 0 0 0',
                                sm: '0 0 0 30px',
                                xs: '0 0 0 30px'
                            }
                        }}>
                        <Typography
                            sx={{
                                fontSize:{
                                    md: '1.4rem',
                                    sm: '2rem',
                                    xs: '2rem'
                                },
                                fontWeight: 900,
                                color:'#5a7184',
                                pr: {
                                    sm: '30px',
                                    xs: '30px'
                                }
                            }}>
                            Share
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '65px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pr: {
                                sm: '30px',
                                xs: '30px'
                            }
                        }}>
                        <TwitterIcon
                            sx={{
                                color:'#5a7184',
                                cursor: 'pointer',
                                fontSize:{
                                    sm: '2.5rem',
                                    md: '2rem',
                                    xs: '2rem'
                                }
                            }}/>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '65px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pr: {
                                sm: '30px',
                                xs: '30px'
                            }
                        }}>
                        <FacebookIcon
                            sx={{
                                color:'#5a7184',
                                cursor: 'pointer',
                                fontSize:{
                                    sm: '2.5rem',
                                    md: '2rem',
                                    xs: '2rem'
                                }
                            }}/>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pr: {
                                sm: '30px',
                                xs: '30px'
                            }
                        }}>
                        <TelegramIcon
                            sx={{
                                color:'#5a7184',
                                cursor: 'pointer',
                                fontSize:{
                                    sm: '2.5rem',
                                    md: '2rem',
                                    xs: '2rem'
                                }
                            }}/>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '65px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pr: {
                                sm: '30px',
                                xs: '30px'
                            }
                        }}>
                        <InstagramIcon
                            sx={{
                                color:'#5a7184',
                                cursor: 'pointer',
                                fontSize:{
                                    sm: '2.5rem',
                                    md: '2rem',
                                    xs: '2rem'
                                }
                            }}/>
                    </Box>

                </Box>,
                <Box
                    sx={{
                        width: 'calc(100% - 50px)',
                        height: '100%',
                        pl: '30px'
                    }}>
                    <Box
                        sx={{
                            width: {
                                xl:'70%',
                                lg: '70%',
                                md: '100%'
                            },
                            height: '100%'
                        }}>
                        <Typography
                            sx={{
                                fontSize: {
                                    md: '4rem',
                                    sm: '3rem',
                                    xs: '2rem'
                                },
                                fontWeight: 'bold',
                                color: '#193c57'
                            }}>
                            How They Did It: First Spotify Design PodCast
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '1.3rem',
                                fontWeight: 'bold',
                                color: '#7f919f',
                                pb: '20px'
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '1.3rem',
                                fontWeight: 'bold',
                                color: '#7f919f',
                                pb: '30px'
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: '#193c57',
                                pb: '20px'
                            }}>
                            Proposing the podcast
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '1.3rem',
                                fontWeight: 'bold',
                                color: '#7f919f',
                                pb: '30px'
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                height: {
                                    md: '400px',
                                    sm: 'auto'
                                },
                                background: '#ffc564',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Typography
                                sx={{
                                    p: {
                                        sm: '30px 0 30px 0',
                                        xs: '30px 0 30px 0'
                                    },
                                    fontSize: {
                                        md: '4rem',
                                        xs: '2rem',
                                        sm: '3rem'
                                    },
                                    fontWeight: 'bold',
                                    color: 'black',
                                    textAlign: 'center'
                                }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                            </Typography>
                        </Box>
                    </Box>
                </Box>,
            </Box>
        </Container>
    );
}

export default BlogDetailPage;