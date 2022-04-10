import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Box, Button, Container, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { listQuestions } from 'assets/dataset/questionList';
import NotificationMenu from 'components/NotificationMenu';
import QuestionBox from 'components/QuestionBox';
import ToggleDisplayButton from 'components/ToggleDisplayButton';
import React, { useState } from 'react';


function QuestionPageTest() {
    const [showOption, setShowOption] = useState(10);

    const handleChange = (event) => {
        setShowOption(event.target.value);
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
                        mb: 1,
                        bgcolor: '#fff'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 1.5
                        }}>
                        <Button
                            variant="outlined"
                            sx={{
                                display:{
                                    xs: 'flex',
                                    md: 'none'
                                },
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: '8px 16px',
                                mb: 1
                            }}>
                            Mở bảng điều hướng
                        </Button>
                        <Button
                            variant="outlined"
                            endIcon={<BorderColorIcon sx={{ fontSize: { sm: 15, xs: 12 } }}/>}
                            sx={{
                                p: '8px 16px',
                                mb: { xs: 1, sm: 0 }
                            }}
                        >
                            Đăng câu hỏi
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
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
                        <ToggleDisplayButton/>
                    </Box>
                </Box>
                {
                    listQuestions.map((info, index) => (
                        <QuestionBox info={info} key={index} />
                    ))
                }
            </Box>
            <NotificationMenu/>
        </Container>
    );
}

export default QuestionPageTest;