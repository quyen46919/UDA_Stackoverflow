import { LocalOffer, Tour } from '@mui/icons-material';
import Comment from '@mui/icons-material/Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Box, IconButton } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

QuestionBox.propTypes = {
    item: PropTypes.object.isRequired,
    // using for full width display type
    isLine: PropTypes.bool,
    // using for admin page
    isAdminBox: PropTypes.bool,
    handleOpenMenu: PropTypes.func
};

function QuestionBox(props) {
    const { item, isAdminBox, handleOpenMenu, isLine } = props;
    const { content, title, owner, ownerAvatar, tags, label, commentCount, createAt } = item;
    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
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
                    borderRadius: 2,
                    boxShadow: isAdminBox ? 'rgba(149, 157, 165, 0.2) 0px 8px 24px' : ''
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
                        Câu hỏi #{label}
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
                        <Typography sx={{ margin: 0, mr: -1.6, fontWeight: 600, color: grey[400], fontSize: 14 }}>
                            {createAt}
                        </Typography>
                        { isAdminBox && <IconButton onClick={handleOpenMenu}>
                            <MoreHorizIcon sx={{ fontSize: 18, color: grey[400] }}/>
                        </IconButton> }
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
                        {content}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: !isLine ? 'column' : { xs: 'column', sm: 'row' },
                        justifyContent: !isLine ? 'center' : { xs: 'flex-start', sm: 'space-between' },
                        alignItems: !isLine ? 'flex-start' : { xs: 'flex-start', sm: 'center' },
                        gap: 1,
                        mt: 'auto'
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
                        <Avatar sx={{ height: 30, width: 30 }} alt="User" src={ownerAvatar} />
                        <Typography sx={{ margin: 0, fontWeight: 500, color: grey[700] }}>
                            {owner}
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
                                fontSize: 14
                            }}
                            noWrap
                        >
                            { tags.join(', ') }
                        </Typography>
                        <Comment sx={{ fontSize: 16 }}/>
                        <Typography sx={{ margin: 0, color: grey[400], fontSize: 14 }}>
                            {commentCount}
                        </Typography>
                    </Box>
                </Box>
            </Box></Box>

    );
}

export default QuestionBox;