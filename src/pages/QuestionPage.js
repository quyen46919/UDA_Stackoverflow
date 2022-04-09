import { Box, Container, Grid, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { questionSeedData } from 'assets/dataset/questionSeedData';
import NotificationMenu from 'components/NotificationMenu';
import QuestionBox from 'components/QuestionBox';
import ToggleDisplayButton from 'components/ToggleDisplayButton';
import React, { useState } from 'react';

function QuestionPage() {
    const [showOption, setShowOption] = useState(10);
    const [lineDisplay, setLineDisplay] = useState(true);

    const handleChangeDisplayType = (newBoolean) => {
        setLineDisplay(newBoolean);
    };

    const handleChange = (event) => {
        setShowOption(event.target.value);
    };

    return (
        <Container
            maxWidth="xl"
            sx= {{
                width: {
                    xs: '100%',
                    lg: 'calc(100% - 300px)'
                },
                minWidth: {
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
                    lg: 1
                },
                bgcolor: '#f5f6fb'
            }}
        >
            <Box
                sx={{
                    overflow: 'auto',
                    maxWidth: '100%',
                    width: '100%',
                    px: { xs: 0, lg: 3 },
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
                        minWidth: '100%',
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 1,
                        boxSizing: 'border-box',
                        borderRadius: 2,
                        mb: 1,
                        bgcolor: '#fff'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            minWidth: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 2
                        }}
                    >
                        <TextField
                            size="small"
                            select
                            value={showOption}
                            onChange={handleChange}
                            sx={{
                                minWidth: 160,
                                '& div': {
                                    fontSize: 16
                                },
                                '& .MuiSelect-select': {
                                    pt: 1.4, pb: 1.4
                                }
                            }}
                        >
                            <MenuItem value={30}>Xếp mặc định</MenuItem>
                            <MenuItem value={10}>A -&gt; Z</MenuItem>
                            <MenuItem value={20}>Z -&gt; A</MenuItem>
                        </TextField>
                        <ToggleDisplayButton
                            handleChangeDisplayType={handleChangeDisplayType}
                            lineDisplay={lineDisplay}
                        />
                    </Box>
                </Box>
                {
                    lineDisplay
                        ? questionSeedData.map((item, index) => (
                            <QuestionBox item={item} key={index} isLine={true}/>
                        ))
                        : <Grid container spacing={2}>
                            {
                                questionSeedData.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}>
                                        <QuestionBox item={item} square={true}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                }
            </Box>
            <NotificationMenu/>
        </Container>
    );
}

export default QuestionPage;