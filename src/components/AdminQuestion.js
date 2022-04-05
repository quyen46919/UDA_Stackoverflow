import { Block, Close, ContentPasteGo, LocalOffer, MarkChatReadOutlined, MoreHoriz } from '@mui/icons-material';
import { Avatar, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import { blue, grey, red } from '@mui/material/colors';
import { Box } from '@mui/system';
import { questionSeedData } from 'assets/questionSeedData';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSearchBar from './AdminSearchBar';

function AdminQuestion() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <AdminSearchBar/>
            <Grid container spacing={2}>
                {
                    questionSeedData.map((item, index) =>
                        <Grid item key={index} xs={12} sm={6} md={4} xl={3}>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                p: '24px 30px',
                                boxSizing: 'border-box',
                                borderRadius: 2,
                                overflow: 'hidden',
                                position: 'relative',
                                transition: 'all .25s ease',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: 'rgba(149, 157, 165, 0.4) 0px 8px 24px'
                                }
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    }}>
                                        {
                                            item.status === 1
                                                ? <IconButton sx={{ bgcolor: '#E5F9FD!important' }} disabled>
                                                    <LocalOffer sx={{ fontSize: 16, color: blue[400] }}/>
                                                </IconButton>
                                                : <IconButton sx={{ bgcolor: '#fde7e5!important' }} disabled>
                                                    <Block sx={{ fontSize: 16, color: red[400] }}/>
                                                </IconButton>
                                        }
                                        <Typography sx={{
                                            color: grey[600],
                                            fontWeight: 700,
                                            fontSize: 16
                                        }}>
                                        Ticket #{item.label}
                                        </Typography>
                                    </Box>
                                    <IconButton sx={{

                                    }}
                                    onClick={handleOpenMenu}
                                    >
                                        <MoreHoriz sx={{ color: grey[400] }}/>
                                    </IconButton>
                                </Box>
                                <Typography sx={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: grey[700]
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{
                                    fontSize: 16,
                                    color: grey[600],
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    mb: 1
                                }}>
                                    {item.content}
                                </Typography>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mt: 'auto'
                                }}>
                                    <Box sx={{ display: 'flex', gap: 0.4, alignItems: 'center' }}>
                                        <Avatar src={item.ownerAvatar} sx={{ width: 24, height: 24 }}/>
                                        <Typography sx={{ fontSize: 14, color: grey[700] }}>
                                        Nguyễn Châu Quyền
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: 14, color: grey[700] }}>
                                            {item.commentCount}
                                        </Typography>
                                        <MarkChatReadOutlined sx={{ fontSize: 14, color: grey[600] }}/>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mt: 1
                                }}>
                                    <Box sx={{ display: 'flex', gap: 0.4, alignItems: 'center' }}>
                                        {/* <AttachFileOutlined sx={{ fontSize: 20, color: grey[600], transform: 'rotate(45deg)' }}/> */}
                                        <Typography sx={{ fontSize: 14, color: grey[700] }}>
                                            {item.tags.join(', ')}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: 14, color: grey[700] }}>
                                            {item.createAt}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    )
                }
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    keepMounted
                    open={open}
                    onClose={handleCloseMenu}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            border: `1px solid ${blue[600]}`,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1
                            },
                            '&:after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: -1,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                borderLeft: `1px solid ${blue[600]}`,
                                borderTop: `1px solid ${blue[600]}`
                            }
                        }
                    }}
                    elevation={0}
                    sx={{ '& svg, & p': { color: grey[500] }, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
                >
                    <MenuItem sx={{ pt: 1.2, pb: 1.2, minWidth: 200 }}>
                        <ListItemIcon>
                            <Close sx={{ color: `${blue[600]}!important` }}/>
                        </ListItemIcon>
                        <ListItemText sx={{ color: grey[700], pr: 1, pl: 1, '& span': { fontSize: 16 } }}>
                        Ẩn câu hỏi này
                        </ListItemText>
                    </MenuItem>
                    <MenuItem sx={{ pt: 1.2, pb: 1.2 }}>
                        <ListItemIcon>
                            <ContentPasteGo sx={{ color: `${blue[600]}!important` }}/>
                        </ListItemIcon>
                        <ListItemText sx={{
                            color: grey[700],
                            pr: 1, pl: 1,
                            '& span': { fontSize: 16 },
                            '& a': {
                                textDecoration: 'none',
                                color: 'inherit'
                            }
                        }}>
                            <Link to="/question/:detailId" target="_blank">
                            Xem chi tiết câu hỏi
                            </Link>
                        </ListItemText>
                    </MenuItem>
                </Menu>
            </Grid>
        </>
    );
}

export default AdminQuestion;