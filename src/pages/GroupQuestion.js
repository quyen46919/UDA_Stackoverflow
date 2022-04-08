import { Block, Close, ContentPasteGo, LocalOffer, MarkChatReadOutlined, MoreHoriz } from '@mui/icons-material';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { Avatar, Box, Container, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import { blue, grey, red } from '@mui/material/colors';
import { questionSeedData } from 'assets/dataset/questionSeedData';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GroupQuestion() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    return (
        <Container
            maxWidth="xl"
            sx= {{
                width: {
                    xs: '100%',
                    md: 'calc(100% - 300px)'
                },
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems:'flex-start',
                backgroundColor: 'white',
                gap: { xs: 0, md: 1 },
                transition: '0.2s',
                p: {
                    xs: 0,
                    md: 1
                },
                bgcolor: '#f5f6fb'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    overflow: 'auto',
                    px: { xs: 1, md: 3 },
                    boxSizing: 'border-box',
                    '&::-webkit-scrollbar':{
                        'webkitAppearance': 'none',
                        width: 0
                    },
                    '&::-webkit-scrollbar-thumb':{
                        background: 'rgb(214, 214, 214)',
                        borderRadius: '5px'
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 1,
                    marginTop: '10px',
                    borderRadius: 2
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 1,
                        boxSizing: 'border-box',
                        borderRadius: 2,
                        // mb: 1,
                        bgcolor: 'transparent'
                    }}
                >
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            width: '100%',
                            color: grey[700],
                            fontWeight: 700,
                            mb: 0
                        }
                        }
                    >
                        Group Note Board
                    </Typography>
                </Box>
                <Grid container spacing={2} column={12} padding={1}>
                    <Grid item xs={12} lg={3} md={6} sm={4}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '55px',
                                borderRadius: '8px',
                                // backgroundColor: 'white',
                                transition: 'box-shadow .18s ease-in-out',
                                // boxShadow: 'rgba(182, 189, 196, 0.2) 0px 8px 18px',
                                border: '1px solid #c9c9c9',
                                boxSizing: 'border-box',
                                padding: '28px 13px 20px 13px',
                                // @include displayFlex(column, nowrap, flex-start, flex-start),
                                display: 'flex',
                                flexDirection:'roww',
                                flexWrap: 'nowrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '5px',
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
                            <FolderSharedIcon sx={{ color: grey[600] }}/>
                            <Typography
                                gutterBottom
                                sx={{
                                    width: '80%',
                                    color: grey[700],
                                    fontWeight: 700,
                                    mb: 0,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Tệp Scss + html  Tệp Scss + html Tệp Scss + html Tệp Scss + html Tệp Scss + html
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} lg={3} md={6} sm={4}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '55px',
                                borderRadius: '8px',
                                // backgroundColor: 'white',
                                transition: 'box-shadow .18s ease-in-out',
                                // boxShadow: 'rgba(182, 189, 196, 0.2) 0px 8px 18px',
                                border: '1px solid #c9c9c9',
                                boxSizing: 'border-box',
                                padding: '28px 13px 20px 13px',
                                // @include displayFlex(column, nowrap, flex-start, flex-start),
                                display: 'flex',
                                flexDirection:'roww',
                                flexWrap: 'nowrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '5px',
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
                            <FolderSharedIcon sx={{ color: grey[600] }}/>
                            <Typography
                                gutterBottom
                                sx={{
                                    width: '80%',
                                    color: grey[700],
                                    fontWeight: 700,
                                    mb: 0,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Tệp Scss + html  Tệp Scss + html Tệp Scss + html Tệp Scss + html Tệp Scss + html
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} lg={3} md={6} sm={4}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '55px',
                                borderRadius: '8px',
                                // backgroundColor: 'white',
                                transition: 'box-shadow .18s ease-in-out',
                                // boxShadow: 'rgba(182, 189, 196, 0.2) 0px 8px 18px',
                                border: '1px solid #c9c9c9',
                                boxSizing: 'border-box',
                                padding: '28px 13px 20px 13px',
                                // @include displayFlex(column, nowrap, flex-start, flex-start),
                                display: 'flex',
                                flexDirection:'roww',
                                flexWrap: 'nowrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '5px',
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
                            <FolderSharedIcon sx={{ color: grey[600] }}/>
                            <Typography
                                gutterBottom
                                sx={{
                                    width: '80%',
                                    color: grey[700],
                                    fontWeight: 700,
                                    mb: 0,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Tệp Scss + html  Tệp Scss + html Tệp Scss + html Tệp Scss + html Tệp Scss + html
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} lg={3} md={6} sm={4}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '55px',
                                borderRadius: '8px',
                                // backgroundColor: 'white',
                                transition: 'box-shadow .18s ease-in-out',
                                // boxShadow: 'rgba(182, 189, 196, 0.2) 0px 8px 18px',
                                border: '1px solid #c9c9c9',
                                boxSizing: 'border-box',
                                padding: '28px 13px 20px 13px',
                                // @include displayFlex(column, nowrap, flex-start, flex-start),
                                display: 'flex',
                                flexDirection:'roww',
                                flexWrap: 'nowrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '5px',
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
                            <FolderSharedIcon sx={{ color: grey[600] }}/>
                            <Typography
                                gutterBottom
                                sx={{
                                    width: '80%',
                                    color: grey[700],
                                    fontWeight: 700,
                                    mb: 0,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Tệp Scss + html  Tệp Scss + html Tệp Scss + html Tệp Scss + html Tệp Scss + html
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} lg={3} md={6} sm={4}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '55px',
                                borderRadius: '8px',
                                // backgroundColor: 'white',
                                transition: 'box-shadow .18s ease-in-out',
                                // boxShadow: 'rgba(182, 189, 196, 0.2) 0px 8px 18px',
                                border: '1px solid #c9c9c9',
                                boxSizing: 'border-box',
                                padding: '28px 13px 20px 13px',
                                // @include displayFlex(column, nowrap, flex-start, flex-start),
                                display: 'flex',
                                flexDirection:'roww',
                                flexWrap: 'nowrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '5px',
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
                            <FolderSharedIcon sx={{ color: grey[600] }}/>
                            <Typography
                                gutterBottom
                                sx={{
                                    width: '80%',
                                    color: grey[700],
                                    fontWeight: 700,
                                    mb: 0,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Tệp Scss + html  Tệp Scss + html Tệp Scss + html Tệp Scss + html Tệp Scss + html
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 1,
                        boxSizing: 'border-box',
                        borderRadius: 2,
                        // mb: 1,
                        bgcolor: 'transparent'
                    }}
                >
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            width: '100%',
                            color: grey[700],
                            fontWeight: 700,
                            mb: 0
                        }
                        }
                    >
                        Group Question
                    </Typography>
                </Box>
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
            </Box>
        </Container>
    );
}

export default GroupQuestion;