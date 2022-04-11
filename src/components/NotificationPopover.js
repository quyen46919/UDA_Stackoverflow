import { Divider, Link, MenuItem, Popover, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import React from 'react';
import PropTypes from 'prop-types';
import { notifications } from 'assets/dataset/notifications';
import { Box } from '@mui/system';
import { Campaign } from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

NotificationPopover.propTypes = {
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
};

function NotificationPopover(props) {
    const { open, anchorEl, handleClose } = props;
    const history = useHistory();

    const handleClick = (url) => {
        handleClose();
        history.push(url);
    };

    return (
        <Popover
            sx={{
                transform: 'translate(-2px, 5px)!important',
                boxShadow: 0,
                '& .MuiPopover-paper': {
                    width: 400,
                    maxWidth: 400,
                    maxHeight: 400,
                    border: `1px solid ${blue[700]}`,
                    boxShadow: 0,
                    // overflowY: 'scroll',
                    overflow: 'hidden'
                },
                '& .MuiPopover-paper li svg': {
                    mr: 2, color: blue[600]
                }
            }}
            id="notification-popover"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <Typography sx={{
                p: '8px 16px',
                boxSizing: 'border-box',
                color: blue[800],
                fontWeight: 700
            }}>
                Thông báo (5)
            </Typography>
            <Divider/>
            <Box sx={{
                width: '100%',
                height: 280,
                overflow: 'scroll',
                overflowX: 'hidden',
                '&::-webkit-scrollbar':{
                    'webkitAppearance': 'none',
                    width: 5
                },
                '&::-webkit-scrollbar-thumb':{
                    background: grey[300],
                    borderRadius: '5px'
                }
            }}>
                { notifications.map((noti) => (
                    <MenuItem
                        onClick={() => handleClick(`/profile/notificationList/${noti.id}`)}
                        key={noti.id}
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            '& a': {
                                textDecoration: 'none',
                                color: blue[500],
                                fontSize: 14
                            }
                        }}
                    >
                        <Campaign/>
                        <Box sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start'
                        }}>
                            <Typography sx={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'break-spaces!important',
                                color: grey[700],
                                fontSize: 16
                            }}>
                                {noti.title}
                            </Typography>
                            <Typography sx={{
                                color: grey[500],
                                fontSize: 14
                            }}>
                                {noti.createAt}
                            </Typography>
                            <Link to={`/profile/list/notification/${noti.id}`}>
                               Xem chi tiết &gt;
                            </Link>
                        </Box>
                    </MenuItem>
                ))}
            </Box>
            <Divider/>
            <Typography
                onClick={() => handleClick('/profile/notificationList')}
                sx={{
                    cursor: 'pointer',
                    p: '8px 16px',
                    boxSizing: 'border-box',
                    color: blue[800],
                    fontWeight: 700,
                    '& a': {
                        textDecoration: 'none',
                        color: 'inherit'
                    }
                }}
            >
                Xem tất cả &gt;
            </Typography>
        </Popover>
    );
}

export default NotificationPopover;