import { AttachFile, LocalOffer, Tour } from '@mui/icons-material';
import Comment from '@mui/icons-material/Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Box } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

QuestionBox.propTypes = {
    info: PropTypes.object.isRequired
};

function QuestionBox(props) {
    const { info } = props;
    const { number, time, name, title, des, avatar } = info;
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    px: 3,
                    py: 2,
                    boxSizing: 'border-box',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 1,
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
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            gap:1,
                            alignItems: 'center'
                        }}
                    >
                        <LocalOffer sx={{ fontSize: '19px', color: blue[500] }}/>
                        <Typography
                            sx={{ margin: 0, fontWeight: 500, color: grey[500], fontSize: 16 }}
                            variant="subtitle1"
                            gutterBottom
                        >
                        Câu hỏi #{number}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            gap:2,
                            alignItems: 'center'
                        }}
                    >
                        <Typography sx={{ margin: 0, fontWeight: 600, color: grey[400], fontSize: 14 }}>
                            {time}
                        </Typography>
                        <MoreHorizIcon sx={{ fontSize: 18, color: grey[400] }}/>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '87%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        '& a':{ textDecoration: 'none', color: 'inherit' },
                        pr: 5.5
                    }}
                >
                    <Link to="/home/question/questionId">
                        <Typography
                            sx ={{
                                width: '100%',
                                display: '-webkit-box',
                                WebkitLineClamp: {
                                    xs: 3,
                                    md: 2,
                                    lg: 1
                                },
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: 18,
                                pl: 1,
                                fontWeight: 700,
                                color: grey[800],
                                'lineHeight': 'normal',
                                marginBottom: '3px',
                                textDecoration: 'none'
                            }}
                        >
                            {title}
                        </Typography>
                    </Link>
                    <Typography
                        sx ={{
                            width: '100%',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            marginBottom: '10px',
                            fontSize: 16,
                            pl: 1,
                            color: grey[600]
                        }}
                        gutterBottom
                    >
                        {des} {des} {des}
                    </Typography>

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
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            gap:1,
                            alignItems: 'center'
                        }}
                    >
                        <Avatar sx={{ height: 30, width: 30 }} alt="User" src={avatar} />
                        <Typography sx={{ margin: 0, fontWeight: 500, color: grey[700] }}>
                            {name}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            pl:1,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            gap:1,
                            alignItems: 'center',
                            '& svg':{
                                color: grey[500]
                            }
                        }}
                    >
                        <Tour sx={{ fontSize: 16 }}/>
                        <Typography
                            sx={{
                                margin: 0,
                                color: grey[400],
                                fontSize: 14,
                                display: { xs: 'none', sm: 'block' }
                            }}
                            noWrap
                        >
                            Design, Help, Ui, Figma
                        </Typography>
                        <AttachFile sx={{ fontSize: 16 }}/>
                        <Typography sx={{ margin: 0, color: grey[400], fontSize: 14 }}>
                            7
                        </Typography>
                        <Comment sx={{ fontSize: 16 }}/>
                        <Typography sx={{ margin: 0, color: grey[400], fontSize: 14 }}>
                            10
                        </Typography>
                    </Box>
                </Box>
            </Box></Box>

    );
}

export default QuestionBox;