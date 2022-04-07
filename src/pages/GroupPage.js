import { AccessTime, AccountCircle, FolderSpecial, MoreHoriz } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import Grid from '@mui/material/Grid';
import { listGroupData, listGroupExtend } from 'assets/dataset/groupData';
import CardGroup from 'components/CardGroup';

function GroupPage() {
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
                        variant="h5"
                        gutterBottom
                        sx={{
                            width: '100%',
                            color: grey[700],
                            fontWeight: 700,
                            mb: 0
                        }
                        }
                    >
                        Các không gian làm việc của bạn
                    </Typography>
                </Box>
                <Grid container spacing={2} column={12} padding={1}>
                    {
                        listGroupData.map((group, index) => (
                            <CardGroup group={group} key={index} />
                        ))
                    }
                    <Grid item xs={12} lg={3} md={6} sm={4}>
                        <Button variant='container' sx={{ width: '100%', padding: 0 }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '145px',
                                    borderRadius: '8px',
                                    backgroundColor: grey[100],
                                    transition: 'box-shadow .18s ease-in-out',
                                    boxShadow: 'rgba(182, 189, 196, 0.2) 0px 8px 18px',
                                    boxSizing: 'border-box',
                                    padding: '28px 23px 20px 23px',
                                    // @include displayFlex(column, nowrap, flex-start, flex-start),
                                    display: 'flex',
                                    flexDirection:'column',
                                    flexWrap: 'nowrap',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '15px',
                                    cursor: 'pointer',

                                    '&:hover': {
                                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 18px'
                                    }

                                }}
                            >
                                <Typography>Tạo bảng mới</Typography>
                            </Box>
                        </Button>

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
                        bgcolor: 'transparent',
                        pt: 3
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            width: '100%',
                            color: grey[700],
                            fontWeight: 700,
                            mb: 0
                        }
                        }
                    >
                        Các không gian làm việc bạn có thể tham gia
                    </Typography>
                </Box>
                <Grid container spacing={2} column={12} padding={1}>
                    {
                        listGroupExtend.map((extend, index) => (
                            <CardGroup group={extend} key={index} />
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    );
}

export default GroupPage;