import { Box, Button, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import { listGroupData, listGroupExtend } from 'assets/dataset/groupData';
import CardGroup from 'components/CardGroup';
import React from 'react';

function GroupPage() {
    return (
        <Container
            maxWidth="xl"
            sx= {{
                width: {
                    xs: '100%',
                    lg: 'calc(100% - 300px)'
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
                    md: 0,
                    lg: 1
                },
                bgcolor: '#f5f6fb'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    px: { xs: 0, md: 3 },
                    boxSizing: 'border-box',
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
                <Typography
                    gutterBottom
                    sx={{
                        width: '100%',
                        color: grey[700],
                        fontWeight: 700,
                        mb: 1,
                        pl: 3,
                        pt: 1
                    }}
                >
                    Các không gian làm việc của bạn
                </Typography>
                <Grid container spacing={2}>
                    {
                        listGroupData.map((group, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                                <CardGroup group={group} />
                            </Grid>
                        ))
                    }
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Button variant='outlined'
                            sx={{
                                width: '100%',
                                height: '100%',
                                minHeight: 145,
                                bgcolor: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: 2,
                                alignItems: 'center',
                                textTransform: 'uppercase',
                                '&:hover': { bgcolor: '#fff' }
                            }}
                        >
                            Tạo nhóm mới
                        </Button>

                    </Grid>
                </Grid>
                <Typography
                    gutterBottom
                    sx={{
                        width: '100%',
                        color: grey[700],
                        fontWeight: 700,
                        mb: 1,
                        pl: 3,
                        pt: 1
                    }}
                >
                    Các không gian làm việc bạn có thể tham gia
                </Typography>
                <Grid container spacing={2} sx={{ p: 1, pb: 3 }}>
                    {
                        listGroupExtend.map((extend, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                                <CardGroup group={extend}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    );
}

export default GroupPage;