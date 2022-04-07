import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import * as React from 'react';

export default function ListBlog(props) {
    const { data } = props;
    const { name, image, title, hashtag, avatar } = data;
    return (
        <Box sx={{
            height: 360,
            width: {
                xl: 350,
                lg: '100%'
            },
            borderRadius: 2,
            position: 'relative',
            boxShadow: ' rgba(149, 157, 165, 0.2) 0px 8px 24px',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s',
            '&:hover': { boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' },
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{
                height: '180px',
                width: '100%',
                borderRadius: '15px 15px 0 0',
                '& img': {
                    height: '100%',
                    width: '100%',
                    borderRadius: '15px 15px 0 0',
                    objectFit: 'cover'
                }
            }}>
                <img src={image} />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '160px',
                p: 2
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: grey[800],
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {title}
                    </Typography>
                </Box>
                <Box sx={{
                    height: '30px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                }}>
                    <Box sx={{
                        height: '100%',
                        width: '150px',
                        display: 'flex',
                        fexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            height: '25px',
                            width: '25px',
                            marginRight: '10px',
                            '& img': {
                                height: '25px',
                                width: '25px',
                                borderRadius: '50%'
                            }
                        }}>
                            <img src={avatar} />
                        </Box>
                        <Box sx={{
                            '& p': {
                                height: '30px',
                                width: '100px',
                                color: '#8d8d8d',
                                fontFamily: 'inherit',
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center'

                            }
                        }}>
                            <Typography>
                                {name}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className='blog-list-hastag' sx={{
                        height: '100%',
                        width: '190px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        '& img': {
                            height: '23px',
                            width: '120px'
                        }
                    }}>
                        <img className='blog-list-hastag__img' src={hashtag} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
