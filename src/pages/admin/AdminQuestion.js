import { Close, ContentPasteGo } from '@mui/icons-material';
import { Box, Grid, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { questionSeedData } from 'assets/dataset/questionSeedData';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSearchBar from '../../components/AdminSearchBar';
import QuestionBox from '../../components/QuestionBox';

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
        <Box sx={{
            width: '100%',
            boxSizing: 'border-box',
            p: 2
        }}>
            <AdminSearchBar/>
            <Grid container spacing={2}>
                {
                    questionSeedData.map((item, index) =>
                        <Grid item key={index} xs={12} sm={6} md={4} xl={3}>
                            <QuestionBox item={item} isAdminBox={true} handleOpenMenu={handleOpenMenu}/>
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
                            transform: 'translate(3px, 3px)!important',
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
    );
}

export default AdminQuestion;