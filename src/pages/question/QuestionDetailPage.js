import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { blue, grey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import AnswerAPI from 'api/answer.api';
import QuestionAPI from 'api/question.api';
import TextEditor from 'components/TextEditor';
import parse from 'html-react-parser';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function QuestionDetailPage({ match }) {
    const { questionId } = match.params;
    const [question, setQuestion] = useState({});
    const [answerList, setAnswerList] = useState([]);
    const [answerContent, setAnswerContent] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const { user } = useSelector(state => state.user.current);
    const ref = useRef();
    useEffect(() => {
        ref.current.scrollIntoView();
    }, []);

    useEffect(() => {
        const loadQuestion = async () => {
            try {
                const response = await QuestionAPI.fetchQuestionDetail(questionId);
                // console.log(response.data);
                setQuestion(response.data.question);
                setAnswerList(response.data.answerList || []);
            } catch (err) {
                // console.log(err.message);
            }
        };
        loadQuestion();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionId]);

    const handleContentChange = (newContent) => {
        setAnswerContent(newContent);
    };

    const handleSubmitForm = async () => {
        const formValues = {
            content: answerContent,
            question_id: question?.id,
            user_id: user?.id
        };

        try {
            const response = await AnswerAPI.createNewAnswer(formValues);
            enqueueSnackbar(`${response?.data?.message}, trang web sẽ reload trong 2 giây`, { variant: 'success' });

            setTimeout(() => {
                window.location.reload();
            }, [2000]);
        } catch (err) {
            enqueueSnackbar('Đăng tải thất bại', { variant: 'error' });
        }
    };

    return (
        <>
            <Box ref={ref} sx={{ mt: -100 }}/>
            <Container
                maxWidth="xl"
                sx= {{
                    width: {
                        xs: '100%',
                        lg: 'calc(100% - 360px)'
                    },
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems:'flex-start',
                    gap: 5,
                    pb: 6,
                    pt: 2,
                    mt: { xs: 0, lg: 1 },
                    ml: { xs: 0, lg: 3 },
                    mr: { xs: 0, md: 3 },
                    backgroundColor: 'secondary.main',
                    borderRadius: 2
                }}
            >
                <Box
                    sx={{
                        height: 'auto',
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
                        borderRadius: 2,
                        overflowWrap: 'anywhere'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 24,
                            fontWeight: 700,
                            color: 'text.primary'
                        }}
                    >
                        {question?.title}
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            boxSizing: 'border-box',
                            p: 2.5,
                            pl: 0,
                            pt: 1,
                            gap: 2
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 2

                            }}
                        >
                            <Stack direction="row">
                                <Avatar
                                    alt="Avatar"
                                    src= {question?.avatar} />
                            </Stack>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        color: grey[600],
                                        m: 0,
                                        fontSize: 16
                                    }}
                                >
                                    {question?.username}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: grey[500],
                                        m: 0,
                                        fontSize: 14
                                    }}
                                >
                                    {moment(question?.created_at).format('DD-MM-YYYY h:mm:ss a')}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                m: 0
                            }}>
                            {question?.content && parse(question?.content)}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                width: '100%'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 1
                                }}
                            >
                                <FavoriteBorderIcon sx={{ color: grey[400] }} />
                                <Typography
                                    sx={{
                                        color: grey[400],
                                        m: 0,
                                        fontSize: 14
                                    }}
                                    variant="subtitle1"
                                    gutterBottom component="div">
                                        4 Likes
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <PriorityHighIcon sx={{ color: grey[400] }} />
                                <Typography
                                    sx={{
                                        color: grey[500],
                                        m: 0,
                                        fontSize: 14
                                    }}>
                                    Báo cáo bài viết này
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            boxSizing: 'border-box',
                            gap: 2,
                            pb: 3
                        }}
                    >
                        <Typography
                            sx={{
                                m: 0,
                                fontSize: 18,
                                fontWeight: 600,
                                width: '100%',
                                pb: 1
                            }}>
                            {answerList.length} Câu trả lời
                        </Typography>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {answerList.map((answer) => (
                                <Box
                                    key={answer.id}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        pb: 3,
                                        gap: 2
                                    }}
                                >
                                    <Divider sx={{ width: '100%' }}/>
                                    <Box sx={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        pt: 1,
                                        gap: 2
                                    }}>
                                        <Stack direction="row">
                                            <Avatar
                                                alt={answer?.username}
                                                src={answer?.user_avatar}/>
                                        </Stack>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-around',
                                                alignItems: 'flex-start',
                                                height: '50px!important'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-around',
                                                    alignItems: 'flex-start'
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: grey[600],
                                                        m: 0,
                                                        fontSize: 16
                                                    }}
                                                >
                                                    {answer?.username}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        color: grey[500],
                                                        m: 0,
                                                        fontSize: 14
                                                    }}
                                                >
                                                    {moment(answer?.created_at).format('DD-MM-YYYY h:mm:ss a')}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            m: 0
                                        }}>
                                        {answer?.content && parse(answer?.content)}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Divider sx={{ width: '100%' }}/>
                    <Box sx={{
                        width: '100%',
                        mt: 1
                    }}>
                        <Typography sx={{ color: grey[700], mb: 1.5 }}>
                            Nhập câu trả lời của bạn
                        </Typography>
                    </Box>
                    <TextEditor handleContentChange={handleContentChange}/>
                    <Button sx={{
                        width: 300,
                        bgcolor: `${blue[50]}!important`,
                        color: blue[600],
                        textTransform: 'initial',
                        px: 4, py: 1,
                        mt: 3
                    }}
                    onClick={handleSubmitForm}
                    >
                        Đăng tải câu hỏi
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default QuestionDetailPage;