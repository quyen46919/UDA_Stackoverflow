import { useTheme } from '@emotion/react';
import { Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { blue, grey, red } from '@mui/material/colors';
import { notifications } from 'assets/dataset/notifications';
import React from 'react';

function AllNotificationPage() {
    const theme = useTheme();
    const upSM = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            width: {
                xs: '100%', lg: '60%'
            },
            flexDirection: 'column',
            ml: { xs: 0, md: 0, lg: 2 },
            boxSizing: 'border-box',
            display: 'flex',
            gap: 1
        }}>
            { notifications.map((noti) => (
                <ListItem key={noti.id}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: { xs: 'flex-start', md: 'center' },
                        bgcolor: 'secondary.main',
                        p: 2,
                        boxSizing: 'border-box',
                        borderRadius: 2,
                        '& a': {
                            textDecoration: 'none',
                            color: blue[500],
                            fontSize: 14
                        }
                    }}
                >
                    <ListItemAvatar>
                        <Avatar src={noti.actionUserAvatar} alt="action user"
                            sx={{ mt: { xs: 1, md: 0 } }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'break-spaces!important',
                                color: 'text.secondary',
                                fontSize: 16
                            }}>
                                {noti.title}
                            </Typography>
                        }
                        secondary={
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography component="span" sx={{
                                    fontSize: 15,
                                    color: grey[500]
                                }}>
                                    {noti.createAt}
                                </Typography>
                                {
                                    !upSM && <Button sx={{
                                        bgcolor: `${red[50]}!important`,
                                        color: red[500],
                                        mt: 1,
                                        minWidth: 100
                                    }}>
                                        Xóa
                                    </Button>
                                }
                            </Box>
                        }
                    />
                    {
                        upSM && <Button sx={{
                            bgcolor: `${red[50]}!important`,
                            color: red[500],
                            ml: 5,
                            minWidth: 100
                        }}>
                            Xóa
                        </Button>
                    }
                </ListItem>
            ))}
        </Box>
    );
}

export default AllNotificationPage;