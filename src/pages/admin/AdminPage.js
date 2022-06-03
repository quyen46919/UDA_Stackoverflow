import { AdminPanelSettings, NotificationsActive, Person } from '@mui/icons-material';
import TabContext from '@mui/lab/TabContext';
import { Box, Container, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { blue, deepOrange, deepPurple, grey, teal } from '@mui/material/colors';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AdminPage() {
    const [value, setValue] = useState('analysis');
    const history = useHistory();

    const handleChange = (e, newValue) => {
        setValue(newValue);
        if (newValue === 'analysis') {
            history.push('/admin');
            return;
        }
        history.push(`/admin/${newValue}`);
    };

    return (
        <Container maxWidth="xl" sx={{
            pt: 2, pb: 2,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                p: {
                    xs: 0,
                    md: '10px 40px 10px 40px'
                },
                boxSizing: 'border-box',
                gap: {
                    xs: 2,
                    lg: 0
                }
            }}>
                <Box sx={{
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <IconButton disabled sx={{ backgroundColor: '#E5F9FD!important' }}>
                        <AdminPanelSettings fontSize='large' sx={{ color: blue[400] }}/>
                    </IconButton>
                    <Box>
                        <Typography sx={{ fontSize: 24, color: blue[700], fontWeight: 700 }}>
                            Quản trị viên
                        </Typography>
                        <Typography sx={{ fontSize: 15, color: grey[600], lineHeight: { xs: 1.4, md: 1 } }}>
                            Cập nhật lần cuối vào 23:12:00 12/3/2022
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: {
                        xs: 1,
                        md: 3
                    }
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <IconButton sx={{ bgcolor: `${deepPurple[50]}!important`, width: 24, height: 24 }}>
                            <NotificationsActive sx={{ color: deepPurple[400], fontSize: 14 }}/>
                        </IconButton>
                        <Typography sx={{ color: deepPurple[500], fontWeight: 500, fontSize: 14 }}>
                            524 câu hỏi
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <IconButton sx={{ bgcolor: `${teal[50]}!important`, width: 24, height: 24 }}>
                            <Person fontSize='small' sx={{ color: teal[500], fontSize: 14 }}/>
                        </IconButton>
                        <Typography sx={{ color: teal[500], fontWeight: 500, fontSize: 14 }}>
                            121 người dùng
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <IconButton sx={{ bgcolor: `${deepOrange[50]}!important`, width: 24, height: 20 }}>
                            <Person fontSize='small' sx={{ color: deepOrange[400], fontSize: 14 }}/>
                        </IconButton>
                        <Typography sx={{ color: deepOrange[400], fontWeight: 500, fontSize: 14 }}>
                            3 quản trị viên
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <TabContext value={value}>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: {
                        xs: '5px 0',
                        md: 0
                    }
                }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        sx={{
                            '& button': {
                                textTransform: 'uppercase!important'
                            },
                            '.MuiTabScrollButton-root.Mui-disabled': {
                                opacity: '0.3'
                            }
                        }}
                    >
                        <Tab label="Thống kê" value="analysis"/>
                        <Tab label="Người dùng" value="users"/>
                        <Tab label="Câu hỏi" value="questions"/>
                    </Tabs>
                </Box>
            </TabContext>
        </Container>
    );
}

export default AdminPage;