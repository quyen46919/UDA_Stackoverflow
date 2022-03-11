import { FacebookOutlined, School, ShopOutlined, SubscriptionsOutlined } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import footerBg from 'assets/images/footer-bg.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Container maxWidth="xl"
            sx={{
                height: 'auto',
                minHeight: 320,
                backgroundImage: `url('${footerBg}')`,
                backgroundSize: 'cover',
                mt: 3,
                pb: {
                    xs: 3,
                    sm: 3
                }
            }}
        >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={4} xl={4}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <School sx={{ mr: { xs: 1.5, md: 1 }, color: blue[500] }} fontSize="large"/>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{
                                display: 'block',
                                color: blue[500], fontWeight: 600
                            }}
                        >
                        UDA Stackoverflow
                        </Typography>
                    </Box>
                    <Typography>
                        UDA Stackoverflow là website trao đổi học tập của sinh viên khoa công nghệ thông tin đại học Đông Á - Đà Nẵng, hoạt động vào tháng 4 / 2022
                        <br/>
                        Mọi hoạt động của chúng tôi hiện tại được quản lí bởi khoa công nghệ thông tin đại học Đông Á - Đà Nẵng
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={4} sx={{ pt: '0!important' }}>
                    <ListItem sx={{ pt: 0, pl: { xs: 0 } }}>
                        <ListItemText
                            primary={
                                <Typography sx={{
                                    fontSize: 18,
                                    fontWeight: 500,
                                    color: grey[500]
                                }}>
                                    Số điện thoại
                                </Typography>
                            }
                            secondary={
                                <Typography sx={{
                                    fontSize: 24,
                                    borderLeft: `3px solid ${blue[500]}`,
                                    pl: 1,
                                    color: blue[800]
                                }}>
                                    0347 124 122
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pl: { xs: 0 } }}>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography sx={{
                                    fontSize: 18,
                                    fontWeight: 500,
                                    color: grey[500]
                                }}>
                                    Email
                                </Typography>}
                            secondary={
                                <Typography sx={{
                                    fontSize: 24,
                                    borderLeft: `3px solid ${blue[500]}`,
                                    pl: 1,
                                    color: blue[800],
                                    wordWrap: 'break-word'
                                }}>
                                    uda.stackoverflow@donga.edu.vn
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pl: { xs: 0 } }}>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography sx={{
                                    fontSize: 18,
                                    fontWeight: 500,
                                    color: grey[500]
                                }}>
                                    Theo dõi chúng tôi tại
                                </Typography>
                            }
                            secondary={<Box>
                                <IconButton>
                                    <FacebookOutlined/>
                                </IconButton>
                                <IconButton>
                                    <SubscriptionsOutlined/>
                                </IconButton>
                                <IconButton>
                                    <ShopOutlined/>
                                </IconButton>
                            </Box>}
                        />
                    </ListItem>
                </Grid>
                <Grid item xs={6} sm={6} md={2} xl={2}
                    sx={{
                        '& p:not(:first-of-type)': { mt: 1 },
                        '& p a': {
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'all 0.1s ease'
                        },
                        '& p:hover a': {
                            borderLeft: `3px solid ${blue[500]}`,
                            pl: 1,
                            color: blue[600],
                            fontWeight: 700
                        }
                    }}
                >
                    <Typography sx={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: grey[500],
                        mb: 1
                    }}>
                        Mục khác
                    </Typography>
                    <Typography>
                        <Link to="#">Về chúng tôi</Link>
                    </Typography>
                    <Typography>
                        <Link to="#">Blogs</Link>
                    </Typography>
                    <Typography>
                        <Link to="#">Liên hệ cộng tác</Link>
                    </Typography>
                    <Typography>
                        <Link to="#">Quảng cáo</Link>
                    </Typography>
                    <Typography>
                        <Link to="#">Hỏi đáp</Link>
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={2} xl={2}>
                    <Typography sx={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: grey[500],
                        mb: 1
                    }}>
                        Bản quyền
                    </Typography>
                    <Typography>© 2021 Chiasetro.<br/> All rights reserved.</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;