import { useTheme } from '@emotion/react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { donateUser } from 'assets/dataset/donateUser';
import React from 'react';
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <IconButton
//             onClick={onClick}
//             sx={{
//                 width: 40,
//                 height: 40,
//                 bgcolor: `${blue[50]}!important`,
//                 ...style,
//                 '& svg': {
//                     color: blue[700]
//                 }
//             }}
//             className={className}
//         >
//             <ArrowForward/>
//         </IconButton>
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: 'block', background: 'green' }}
//             onClick={onClick}
//         />
//     );
// }

function SlickSlider() {
    const theme = useTheme();
    const belowSM = useMediaQuery(theme.breakpoints.down('sm'));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: belowSM ? 1 : 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            '& button.slick-arrow': {
                boxShadow: '#d1f4ff 10px 18px 124px!important',
                zIndex: 999,
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            '& button.slick-arrow:before, & button.slick-arrow:after': {
                width: '100%',
                height: '100%',
                color: '#2979ff',
                fontSize: 40,
                bgcolor: '#fff',
                borderRadius: '50%'
            },
            '& .slick-track': {
                display: 'flex',
                alignItems: {
                    xs: 'stretch',
                    md: 'stretch'
                },
                gap: 3,
                pt: 2,
                pb: 2
            },
            '& .slick-track > div': {
                height: 400
            },
            '& .slick-track > div > div': {
                width: '100%',
                height: '100%'
            }
        }}>
            <Slider {...settings}>
                {
                    donateUser.map((user, index) => (
                        <Box key={index} sx={{
                            height: '100%',
                            boxShadow: '#d1f4ff 0px 0px 16px!important',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderRadius: 4,
                            p: 3,
                            boxSizing: 'border-box'
                        }}>
                            <Box sx={{
                                width: 140,
                                height: 140,
                                m: '0 auto',
                                mt: 1,
                                borderRadius: '',
                                position: 'relative',
                                '& img': {
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: 150,
                                    height: 150,
                                    top: '-5px',
                                    left: '-5px',
                                    zIndex: -1,
                                    borderRadius: '50%',
                                    boxShadow: '#d1f4ff 0px 0px 16px!important'
                                }
                            }}>
                                <img src={user.avatarUrl}/>
                            </Box>
                            <Typography sx={{
                                pt: 3,
                                fontSize: { xs: 18, md: 20 },
                                color: blue[900],
                                fontWeight: 700
                            }}>
                                {user.name}
                            </Typography>
                            <Typography sx={{
                                fontSize: 16,
                                color: blue[900],
                                fontWeight: 600
                            }}>
                                {user.university}
                            </Typography>
                            <Typography sx={{
                                pt: 2,
                                fontSize: { xs: 14, md: 16 },
                                color: grey[600]
                            }}>
                                {user.description}
                            </Typography>
                        </Box>
                    ))
                }
            </Slider>
        </Box>
    );
}

export default SlickSlider;