import { useTheme } from '@emotion/react';
import { Container, Divider, ListItem, ListItemText, MenuItem, TextField, Typography, useMediaQuery } from '@mui/material';
import { blue, grey, teal } from '@mui/material/colors';
import { Box } from '@mui/system';
import { totalQuestionInDay, totalQuestionInYear } from 'assets/chartData';
import { questionHistory } from 'assets/questionHistory';
import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function AdminRecharts() {
    const [showOption, setShowOption] = useState(10);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const matchSMScreen = useMediaQuery(theme.breakpoints.up('sm'));

    const handleChange = (event) => {
        setShowOption(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            p: {
                xs: 0,
                md: 1
            }
        }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                },
                gap: 3,
                borderBottom: `1px solid ${grey[300]}`
            }}>
                <Box sx={{
                    width: {
                        xs: '100%',
                        md: '70%'
                    },
                    pb: {
                        xs: 0,
                        md: 2
                    }
                }}>
                    <Typography
                        sx={{
                            pl: {
                                xs: 0,
                                md: 3
                            },
                            pb: 2,
                            fontSize: {
                                xs: 20,
                                md: 24
                            },
                            color: blue[600],
                            fontWeight: 700,
                            display: 'inline-block'
                        }}>
                        Thống kê số lượng câu hỏi trong ngày
                    </Typography>
                    <ResponsiveContainer width="100%" height={matchSMScreen ? 360 : 250}>
                        <BarChart width={500} height={250} data={totalQuestionInDay}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="questions" fill={blue[700]} />
                            <Bar dataKey="answers" fill={teal[200]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
                <Box sx={{
                    width: {
                        xs: '100%',
                        md: '30%'
                    },
                    pl: {
                        xs: 0,
                        md: 3
                    },
                    borderLeft: {
                        xs: 'none',
                        md: `1px solid ${grey[300]}`
                    },
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            fontSize: 24, color: blue[600], fontWeight: 700, pb: 1
                        }}>
                            Lịch sử
                        </Typography>
                        <TextField
                            select
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={showOption}
                            onChange={handleChange}
                            size="small"
                            sx={{
                                minWidth: 160,
                                transform: 'translateY(-6px)'
                            }}
                        >
                            <MenuItem value={10}>Hôm nay</MenuItem>
                            <MenuItem value={20}>Tuần này</MenuItem>
                            <MenuItem value={30}>Tháng này</MenuItem>
                        </TextField>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: 360,
                        pr: 1,
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                        '&::-webkit-scrollbar': {
                            'WebkitAppearance': 'none!important',
                            'width': '6px!important'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            'background': `${grey[200]}!important`,
                            'borderRadius': '5px!important',
                            mr: 1
                        }
                    }}>
                        {
                            questionHistory.map((item) => (
                                <React.Fragment key={item.id}>
                                    <ListItem>
                                        <Box sx={{
                                            backgroundColor: item.color,
                                            fontSize: 16,
                                            height: 40,
                                            width: 60,
                                            maxWidth: 60,
                                            minWidth: 60,
                                            borderRadius: 1,
                                            mr: 2,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: '#fff'
                                        }}>
                                            {item.programmingLanguage}
                                        </Box>
                                        <ListItemText
                                            primary={
                                                <Typography noWrap>
                                                    {item.title}
                                                </Typography>
                                            }
                                            secondary={item.postDate}
                                        />
                                    </ListItem>
                                    <Divider/>
                                </React.Fragment>
                            ))
                        }
                        <Typography sx={{
                            p: 2,
                            textAlign: 'center',
                            color: grey[600]
                        }}>
                            Cuối danh sách
                        </Typography>
                    </Box>
                    {/* <ResponsiveContainer width="20%" height={360}>
                        <BarChart width={700} height={250} data={totalQuestionInDay}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="questions" fill="#8884d8" />
                            <Bar dataKey="answers" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer> */}
                </Box>
            </Box>
            <Box sx={{
                // p: '24px 20px',
                // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            }}>
                <Typography sx={{ pl: 3, pb: 2, fontSize: 24, color: blue[600], fontWeight: 700 }}>
                    Thống kê số lượng câu hỏi 12 tháng gần nhất
                </Typography>
                <ResponsiveContainer width="100%" height={matchSMScreen ? 360 : 250}>
                    <LineChart
                        width={700}
                        height={400}
                        data={totalQuestionInYear}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend wrapperStyle={{ bottom: 0, left: 25 }}/>
                        <Line type="monotone" dataKey="javascript" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="python" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="CSharp" stroke="#151c52" />
                        <Line type="monotone" dataKey="flutter" stroke="#55125a" />
                        <Line type="monotone" dataKey="nodejs" stroke="#9982ad" />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Container>
    );
}