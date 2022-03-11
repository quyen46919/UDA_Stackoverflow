import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { grey, yellow } from '@mui/material/colors';
import TourIcon from '@mui/icons-material/Tour';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import user from 'assets/images/intro-HuuTai.jpg';

Questions.propTypes = {
    info: PropTypes.object.isRequired
};

function Questions(props) {
    const { info } = props;
    const { number, time, name, title, des } = info;
    return (
        <Box sx={{ pb: 2 }}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    px: 3,
                    boxSizing: 'border-box',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 1,
                    pt: 2.5,
                    boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
                    pb: 2.5,
                    backgroundColor: 'white',
                    borderRadius: 2
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '2px'
                    }}
                >
                    <Box
                        sx={{
                        // width: '30%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            gap:1,
                            alignItems: 'center'
                        }}
                    >
                        <WbSunnyIcon sx={{ fontSize: '19px', color: yellow[500] }}/>
                        <Typography sx={{ margin: 0, fontWeight: 600, color: grey[600] }} variant="subtitle1" gutterBottom component="div">
                        Ticket #{number}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                        // width: '30%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            gap:2,
                            alignItems: 'center'
                        }}
                    >
                        <Typography sx={{ margin: 0, fontWeight: 600, color: grey[500] }} variant="subtitle1" gutterBottom component="div">
                            {time}
                        </Typography>
                        <Link to= {''}>
                            <MoreHorizIcon sx={{ fontSize: '19px', color: grey[500] }}/>
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '87%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        '& a':{ textDecoration: 'none' },
                        pr: 5.5
                    }}
                >
                    <Typography
                        sx ={{
                            width: '100%',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            // display: '-webkit-box',
                            // '-webkit-line-clamp': '1',
                            // '-webkit-box-orient': 'vertical',
                            // overflow: 'hidden',
                            // textOverflow: 'ellipsis',
                            fontSize: 21,
                            pl: 1,
                            fontWeight: 700,
                            color: grey[800],
                            'lineHeight': 'normal',
                            marginBottom: '3px',
                            textDecoration: 'none'
                        }}
                        variant="subtitle1" gutterBottom component="div">{title}
                    </Typography>
                    <Typography
                        sx ={{
                            width: '100%',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            marginBottom: '10px',
                            fontSize: 18,
                            pl: 1,
                            fontWeight: 600,
                            color: grey[500]
                        }}
                        variant="body2" gutterBottom>{des}</Typography>

                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap:1
                    }}
                >
                    <Box
                        sx={{
                            pl:1,
                            // width: '30%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            gap:1,
                            alignItems: 'center'
                        }}
                    >
                        <Avatar sx={{ height: 30, width: 30 }} alt="Remy Sharp" src={ user } />
                        <Typography sx={{ margin: 0, fontWeight: 600, color: grey[700] }} variant="subtitle1" gutterBottom component="div">
                            {name}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            pl:1,
                            // width: '60%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            gap:1,
                            alignItems: 'center',
                            '& svg':{
                                color: grey[600]
                            }
                        }}
                    >
                        <TourIcon/>
                        <Typography sx={{ margin: 0, fontWeight: 600, color: grey[400], display: { xs: 'none', sm: 'block' } }} variant="subtitle1" gutterBottom component="div">
                            Design, Help, Ui, Figma
                        </Typography>
                        <AttachFileIcon/>
                        <Typography sx={{ margin: 0, fontWeight: 600, color: grey[700] }} variant="subtitle1" gutterBottom component="div">
                            7
                        </Typography>
                        <Link to={''} ><CommentIcon/></Link>
                        <Typography sx={{ margin: 0, fontWeight: 600, color: grey[700] }} variant="subtitle1" gutterBottom component="div">
                            10
                        </Typography>
                    </Box>
                </Box>
            </Box></Box>

    );
}

export default Questions;