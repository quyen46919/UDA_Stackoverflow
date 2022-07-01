import { AccountCircle, Close, ContentPasteGo, MoreHoriz, Person, Star } from '@mui/icons-material';
import { Avatar, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Pagination, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { userData } from 'assets/dataset/users';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSearchBar from '../../components/AdminSearchBar';

function AdminUserTable() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{
            width: '100%',
            p: 2,
            boxSizing: 'border-box'
        }}>
            <AdminSearchBar/>
            <Grid container spacing={2}>
                {
                    userData.map((item) => <Grid item key={item.src} xs={12} md={4} sm={6} lg={3}>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
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
                            {
                                item.role === 'Quản trị viên'
                                    ? <Box sx={{
                                        position: 'absolute',
                                        left: 20,
                                        top: 15,
                                        '& svg, & .MuiTypography-root': { color: blue[600] },
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 0.4
                                    }}>
                                        <Star sx={{ transform: 'translateY(-1px)', fontSize: 18 }}/>
                                        <Typography sx={{ fontSize: 16 }}>Admin</Typography>
                                    </Box>
                                    : <Person sx={{
                                        position: 'absolute',
                                        left: 20,
                                        top: 15,
                                        color: grey[400]
                                    }}/>
                            }
                            <IconButton sx={{
                                position: 'absolute',
                                right: 15,
                                top: 8,
                                color: grey[400]
                            }}
                            onClick={handleOpenMenu}
                            >
                                <MoreHoriz/>
                            </IconButton>
                            <Avatar src={item.src} sx={{
                                width: 120, height: 120, m: '8px auto 0', cursor: 'pointer'
                            }}/>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                overflowWrap: 'break-word',
                                mt: 2
                            }}>
                                <Typography textAlign='center' sx={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: grey[700]
                                }}>
                                    {item.nickname}
                                </Typography>
                            </Box>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                overflowWrap: 'break-word'
                            }}>
                                <Typography textAlign='center' sx={{
                                    fontSize: 16,
                                    color: grey[500]
                                }}>
                                    {item.email}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>)
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
                            // boxShadow: 'rgba(0, 136, 255, 0.58) 0px 2px 8px 0px',
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                transform: 'translate(3px, 3px)!important'
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
                                // boxShadow: 'rgba(0, 136, 255, 0.58) -4px -4px 10px -2px'
                                // boxShadow: 'rgba(0, 136, 255, 0.58) -4px -4px 10px -2px'
                            }
                        }
                    }}
                    elevation={0}
                    sx={{ '& svg, & p': { color: grey[500] }, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
                >
                    <MenuItem sx={{ pt: 1.2, pb: 1.2, minWidth: 200 }}>
                        <ListItemIcon>
                            <AccountCircle sx={{ color: `${blue[600]}!important` }}/>
                        </ListItemIcon>
                        <ListItemText sx={{ color: grey[700], pr: 1, pl: 1, '& span': { fontSize: 16 } }}>
                                        Chỉ định làm quản trị viên
                        </ListItemText>
                    </MenuItem>
                    <MenuItem sx={{ pt: 1.2, pb: 1.2, minWidth: 200 }}>
                        <ListItemIcon>
                            <Close sx={{ color: `${blue[600]}!important` }}/>
                        </ListItemIcon>
                        <ListItemText sx={{ color: grey[700], pr: 1, pl: 1, '& span': { fontSize: 16 } }}>
                                        Khóa tài khoản
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
                            <Link to="/user/detail">
                                            Xem thông tin chi tiết
                            </Link>
                        </ListItemText>
                    </MenuItem>
                </Menu>
            </Grid>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination count={50} color="primary" />
            </Box>
        </Box>
    );
}

export default AdminUserTable;