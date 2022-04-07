import { NotificationsActiveOutlined } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { hotHashtag } from 'hotHashtag';
import React from 'react';

function NotificationMenu() {
    return (
        <Box sx={{
            width: 300,
            minWidth: 300,
            pt: 1,
            display: {
                xs: 'none',
                lg: 'block'
            },
            boxSizing: 'border-box',
            position: 'sticky',
            top: '80px'
        }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'flex-start',
                //boxShadow:`${grey[200]} 0px 0px 16px`,
                p: 2,
                boxSizing: 'border-box',
                borderRadius: 3,
                bgcolor: '#fff'
            }}>
                <Typography sx={{
                    color: grey[600],
                    pb: 1
                }}>
                    Thông báo chính thức
                </Typography>
                <Box sx={{
                    width: '100%'
                }}>
                    <List sx={{ p: 0, width: '100%' }}>
                        <ListItem
                            sx={{ p: 0,
                                '& .MuiListItemButton-root:hover': {
                                    bgcolor: blue[50],
                                    borderRadius: 3
                                },
                                '& .MuiListItemButton-root:hover p.MuiTypography-root': {
                                    color: `${blue[800]}!important`
                                }
                            }}>
                            <ListItemButton sx={{ p: 0, alignItems: 'flex-start' }}>
                                <NotificationsActiveOutlined sx={{
                                    color: blue[400],
                                    p: 2, pt: 1, pr: 2, pl: 1
                                }}/>
                                <ListItemText primary={
                                    <Typography sx={{
                                        fontSize: 16,
                                        color: grey[600]
                                    }}>
                                        Thông báo về nội dung kỳ thực tập doanh nghiệp tháng 10/2022
                                    </Typography>
                                } />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            sx={{ p: 0,
                                '& .MuiListItemButton-root:hover': {
                                    bgcolor: blue[50],
                                    borderRadius: 3
                                },
                                '& .MuiListItemButton-root:hover p.MuiTypography-root': {
                                    color: `${blue[800]}!important`
                                }
                            }}>
                            <ListItemButton sx={{ p: 0, alignItems: 'flex-start' }}>
                                <NotificationsActiveOutlined sx={{
                                    color: blue[400],
                                    p: 2, pt: 1, pr: 2, pl: 1
                                }}/>
                                <ListItemText primary={
                                    <Typography sx={{
                                        fontSize: 16,
                                        color: grey[600]
                                    }}>
                                        Thông báo về học phí ngành CNTT học kỳ 2 - 2022
                                    </Typography>
                                } />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <br/>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'flex-start',
                //boxShadow:`${grey[200]} 0px 0px 16px`,
                p: 2,
                boxSizing: 'border-box',
                borderRadius: 3,
                bgcolor: '#fff'
            }}>
                <Typography sx={{
                    color: grey[600],
                    pb: 1
                }}>
                    Chủ đề hot tuần qua
                </Typography>
                {
                    hotHashtag.map((tag, index) => (
                        <Box key={index} sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            boxSizing: 'border-box',
                            transition: 'all .15s',
                            pb: 1, pl: 2, pt: 1, pr: 2,
                            borderRadius: 3,
                            '&:hover': {
                                bgcolor: blue[50]
                            }
                        }}>
                            <Typography sx={{
                                fontSize: 18,
                                color: grey[700],
                                fontWeight: 600
                            }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 600 }} component="span"> # </Typography>
                                {tag.tagName}
                            </Typography>
                            <Typography sx={{
                                fontSize: 15,
                                color: grey[500]
                            }}>
                                {tag.viewCount} lượt xem - {tag.commentCount} bình luận
                            </Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}

export default NotificationMenu;