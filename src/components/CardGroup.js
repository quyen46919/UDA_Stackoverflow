import { AccessTime, AccountCircle, FolderSpecial, MoreHoriz } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

CardGroup.propTypes = {
    group: PropTypes.object.isRequired
};

function CardGroup(props) {
    const { group } = props;
    const { extend } = props;
    const { title, time, id } = (group || extend);
    const history = useHistory();
    return (
        <Box
            onClick={() => history.push(`/home/group/${id}`)}
            sx={{
                width: '100%',
                height: '145px',
                borderRadius: '8px',
                backgroundColor: 'white',
                transition: 'box-shadow .18s ease-in-out',
                boxShadow: 'rgba(182, 189, 196, 0.2) 0px 8px 18px',
                boxSizing: 'border-box',
                padding: '28px 23px 20px 23px',
                display: 'flex',
                flexDirection:'column',
                flexWrap: 'nowrap',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '15px',
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 18px'
                }
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    right: '23px',
                    top: '9px',
                    color: '#BCBCBC'
                }}
            >
                <MoreHoriz />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <FolderSpecial sx={{ fontSize: '45px!important', color: '#00C4D4' }}/>
                <Box sx={{ transform: 'translateX(15px)' }}>
                    <AccountCircle
                        sx={{
                            fontSize: '22px',
                            color: '#9BD5FD',
                            backgroundColor: 'white',
                            borderRadius: '50%'
                        }}/>
                    <AccountCircle
                        sx={{
                            fontSize: '22px',
                            color: '#3DDDF3',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            transform: 'translateX(-5px)'
                        }}/>
                    <AccountCircle
                        sx={{
                            fontSize: '22px',
                            color: '#4EA4DC',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            transform: 'translateX(-10px)'
                        }}/>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    height: 'auto',
                    gap: '2px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: 16,
                        color: grey[900],
                        fontWeight: 500,
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        fontSize: '13px',
                        color: '#BCBCBC',
                        fontWeight: 500,
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '5px',

                        'svg' :{
                            fontSize: '13px',
                            transform: 'translateY(2px)'
                        }
                    }}
                >
                    <AccessTime />
                    {time}
                </Box>
            </Box>
        </Box>
    );
}

export default CardGroup;