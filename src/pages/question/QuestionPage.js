import { Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';
import QuestionAPI from 'api/question.api';
import noItem from 'assets/images/no-item.png';
import NotificationMenu from 'components/NotificationMenu';
import QuestionBox from 'components/QuestionBox';
import ToggleDisplayButton from 'components/ToggleDisplayButton';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

function QuestionPage() {
    const [lineDisplay, setLineDisplay] = useState(true);
    const [questionList, setQuestionList] = useState([]);
    const [ref, inView] = useInView();
    const [loading, setLoading] = useState(false);
    const [isEndOfPage, setIsEndOfPage] = useState(false);
    const { searchText } = useSelector(state => state.globalState);
    const [filters, setFilters] = useState({
        page: 1,
        limit: 5,
        sortBy: '-created_at',
        search: searchText || ''
    });
    const [totalPages, setTotalPages] = useState(0);

    const handleChangeDisplayType = (newBoolean) => {
        setLineDisplay(newBoolean);
    };

    const handleSelectChange = (event) => {
        setFilters(prevState => ({
            ...prevState,
            page: 1,
            sortBy: event.target.value
        }));
        setQuestionList([]);
    };

    useEffect(() => {
        setLoading(true);
        const loadInitData = async () => {
            try {

                // filter values
                const filteredValues = cloneDeep(filters);
                Object.keys(filteredValues).forEach(key => filteredValues[key] === '' && delete filteredValues[key]);

                // call api
                const response = await QuestionAPI.fetchQuestions(filteredValues);
                setQuestionList(prevState => [...prevState, ...response.data.questions]);
                setTotalPages(response.data.totalPages);

                // setState
                setLoading(false);
            } catch (err) {
                // console.log(err?.message);
            }
        };
        loadInitData();
    }, [filters]);

    useEffect(() => {
        setFilters(prevState => ({
            ...prevState,
            page: 1,
            search: searchText || ''
        }));
        setQuestionList([]);
    }, [searchText]);


    useEffect(() => {
        setLoading(true);
        if (filters.page <= totalPages) {
            setFilters(prevState => ({
                ...prevState,
                page: prevState.page + 1
            }));
        } else {
            setLoading(false);
            setIsEndOfPage(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

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
                backgroundColor: 'primary.main',
                gap: { xs: 0, md: 1 },
                transition: '0.2s',
                p: {
                    xs: 0,
                    lg: 1
                },
                bgcolor: 'transparent'
            }}
        >
            <Box
                sx={{
                    overflow: 'auto',
                    maxWidth: '100%',
                    width: '100%',
                    px: { xs: 0, lg: 1 },
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
                    marginTop: 0.5,
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
                        bgcolor: 'secondary.main'
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
                            value={filters.sortBy}
                            onChange={handleSelectChange}
                            sx={{
                                minWidth: 160,
                                borderRadius: 2,
                                '& div, & svg': {
                                    color: 'background.default',
                                    fontSize: 16
                                },
                                '& .MuiSelect-select': {
                                    pt: 1.4, pb: 1.4
                                },
                                '& fieldset': {
                                    borderColor: 'background.default'
                                }
                            }}
                        >
                            <MenuItem value="created_at">Mới nhất</MenuItem>
                            <MenuItem value="-created_at">Cũ nhất</MenuItem>
                        </TextField>
                        <ToggleDisplayButton
                            handleChangeDisplayType={handleChangeDisplayType}
                            lineDisplay={lineDisplay}
                        />
                    </Box>
                </Box>
                {
                    lineDisplay
                        ? questionList.map((item, index) => (
                            <QuestionBox item={item} key={index} isLine={true}/>
                        ))
                        : <Grid container spacing={2}>
                            {
                                questionList.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}>
                                        <QuestionBox item={item} square={true}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                }
                {
                    questionList.length === 0 && <Box sx={{
                        width: '100%',
                        minHeight: 300,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src={noItem}/>
                        <Typography sx={{ color: grey[500] }}>Danh sách câu hỏi trống</Typography>
                    </Box>
                }
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
                    {
                        loading && !isEndOfPage
                            ? <Typography sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center', gap: 1,
                                color: blue[500] }}
                            >
                                <CircularProgress sx={{
                                    width: '20px!important',
                                    height: '20px!important'
                                }}/>
                                Đang tải...
                            </Typography>
                            : <Button
                                variant='contained'
                                disableElevation
                                ref={ref}
                                sx={{
                                    bgcolor: '#fff!important',
                                    color: blue[700],
                                    fontSize: 16,
                                    p: '8px 24px',
                                    textTransform: 'initial'
                                }}
                            >
                                { loading && 'Đang tải thêm...' }
                                { !loading && isEndOfPage && 'Không còn câu hỏi nào khác' }
                            </Button>
                    }
                    {/* {
                        isEndOfPage
                            ? <Typography>Đã tới cuối danh sách</Typography>
                            : loading
                                ? <Typography sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', gap: 1,
                                    color: blue[500] }}
                                >
                                    <CircularProgress sx={{
                                        width: '20px!important',
                                        height: '20px!important'
                                    }}/>
                                    Đang tải...
                                </Typography>
                                : <Button
                                    variant='contained'
                                    disableElevation
                                    ref={ref}
                                    sx={{
                                        bgcolor: '#fff!important',
                                        color: blue[700],
                                        fontSize: 18,
                                        p: '8px 24px'
                                    }}
                                >
                                    Tải thêm
                                </Button>
                    } */}
                </Box>
            </Box>
            <NotificationMenu/>
        </Container>
    );
}

export default QuestionPage;