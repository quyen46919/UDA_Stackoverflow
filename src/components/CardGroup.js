import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import { AccessTime, AccountCircle, FolderSpecial, MoreHoriz } from '@mui/icons-material';

CardGroup.propTypes = {
    group: PropTypes.object.isRequired
};

function CardGroup(props) {
    const { group } = props;
    const { extend } = props;
    const { title, time } = (group || extend);
    return (
        <Grid item xs={12} lg={3} md={6} sm={4}>
            <Box
                sx={{
                    width: '100%',
                    height: '145px',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    transition: 'box-shadow .18s ease-in-out',
                    boxShadow: 'rgba(182, 189, 196, 0.2) 0px 8px 18px',
                    boxSizing: 'border-box',
                    padding: '28px 23px 20px 23px',
                    // @include displayFlex(column, nowrap, flex-start, flex-start),
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
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
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
                        // @include displayFlex(row, nowrap, space-between, center);
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
                        // @include displayFlex(column, nowrap, center, flex-start);
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: 'auto',
                        gap: '2px'
                    }}
                >
                    <Box
                        sx={{
                            fontSize: '16px',
                            color: '#2C3337',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '215px'
                        }}
                    >
                        {title}
                    </Box>
                    <Box
                        sx={{
                            fontSize: '13px',
                            color: '#BCBCBC',
                            fontWeight: 500,
                            // @include displayFlex(row, nowrap, flex-start, center),
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
        </Grid>
    );
}

export default CardGroup;