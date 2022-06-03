import { useTheme } from '@emotion/react';
import { Close } from '@mui/icons-material';
import { Alert, Button, Collapse, FormHelperText, IconButton, TextField, Typography, useMediaQuery } from '@mui/material';
import Chip from '@mui/material/Chip';
import { blue, grey, red } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import QuestionAPI from 'api/question.api';
import TagAPI from 'api/tags.api';
import TextEditor from 'components/TextEditor';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ITEM_HEIGHT = 44;
const ITEM_PADDING_TOP = 6;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium
    };
}

function PostQuestionPage() {
    const [postContent, setPostContent] = useState({
        title: '',
        content: '',
        tag_list: []
    });
    const theme = useTheme();
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [open, setOpen] = useState(true);
    const downSM = useMediaQuery(theme.breakpoints.down('sm'));
    const { user } = useSelector(state => state.user.current);
    const [allTags, setAllTags] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const loadTags = async () => {
            const response = await TagAPI.fetchAllTags();
            setAllTags(response.data.tags);
        };
        loadTags();
    }, []);

    const handleContentChange = (newContent) => {
        setPostContent((prevState) => ({
            ... prevState,
            content: newContent
        }));
    };

    const handleChange = (event) => {
        setErrorMessage('');
        const { target: { value } } = event;
        setPostContent(prevState => ({
            ...prevState,
            tag_list: typeof value === 'string' ? value.split(',') : value
        })
        );
    };

    const handleSubmitForm = async () => {
        if (postContent.tag_list.length === 0) {
            setErrorMessage('Bạn phải chọn ít nhất 1 thẻ');
            return;
        }

        let convertTagNameToId = [];
        for (let i = 0; i < allTags.length - 1; i++) {
            const foundTag = allTags.find((tag) => tag.name === postContent.tag_list[i]);
            if (foundTag) {
                convertTagNameToId.push(foundTag.id);
            }
        }

        const formValues = {
            ... postContent,
            tag_list: convertTagNameToId,
            team_id: null,
            user_id: user?.id
        };

        try {
            const response = await QuestionAPI.createNewQuestion(formValues);
            enqueueSnackbar(`${response?.data?.message}, trang web sẽ reload trong 2 giây`, { variant: 'success' });
            setSuccessMessage(response?.data?.message);

            setTimeout(() => {
                window.location.reload();
            }, [2000]);
        } catch (err) {
            enqueueSnackbar(err?.message, { variant: 'error' });
        }
    };

    const handleTitleChange = (e) => {
        setPostContent((prevState) => ({
            ... prevState,
            title: e.target.value
        }));
    };

    // const ref = useRef();
    // useEffect(() => {
    //     ref.current.scrollIntoView();
    // }, []);


    return (
        <>
            {/* <Box ref={ref} sx={{ mt: -220 }}/> */}
            <Box sx={{
                width: '100%',
                minHeight: 400,
                m: { xs: '8px 0 0 0', lg: 1.5 },
                mt: 2.6,
                borderRadius: 2,
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                },
                gap: 2,
                '& > div': {
                    bgcolor: 'secondary.main',
                    borderRadius: 2,
                    p: 2,
                    pl: { xs: 2, md: 4 }, pr: { xs: 2, md: 4 },
                    boxSizing: 'border-box'
                }
            }}>
                <Box sx={{
                    width: {
                        xs: '100%',
                        lg: 'calc(100% - 400px)'
                    },
                    maxWidth: {
                        xs: '100%',
                        lg: 'calc(100% - 400px)'
                    },
                    '& p': { mb: 1, color: 'text.secondary', fontSize: 16 }
                }}>
                    <Collapse in={open}>
                        <Alert
                            severity="info"
                            sx={{ mb: 1, bgcolor: `${blue[50]}!important`, color: theme.palette.mode === 'light' ? blue[600] : '#3d3d3d' }}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <Close fontSize="inherit" />
                                </IconButton>
                            }
                        >
                        Nếu đây là lần đầu tiên bạn đăng câu hỏi, hãy đọc hướng dẫn sử dụng ở phía bên phải trước nhé
                        </Alert>
                        {
                            downSM && <Alert severity="warning" sx={{ mb: 1 }}>
                            Tính năng upload ảnh trên mobile đang có khả năng xảy ra lỗi, nếu bạn sử dụng điện thoại, đừng upload ảnh bạn nhé
                            </Alert>
                        }
                    </Collapse>
                    <Typography>Nhập nội dung chính câu hỏi</Typography>
                    <TextField fullWidth size="small" multiline
                        onChange={handleTitleChange}
                        sx={{
                            '& input': { color: grey[700] },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: grey[400]
                                },
                                '&:hover fieldset': {
                                    borderColor: blue[500]
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: blue[500]
                                }
                            }
                        }}
                    />
                    <Typography sx={{ mt: 2, mb: 1 }}>Chọn các tag của câu hỏi</Typography>
                    <FormControl fullWidth sx={{ '& legend span': { display: 'none' } }}>
                        <Select
                            size="small"
                            error={errorMessage}
                            multiple
                            sx={{
                                '&:hover fieldset, &.Mui-focused fieldset': {
                                    borderColor: `${blue[600]}!important`
                                }
                            }}
                            value={postContent.tag_list}
                            onChange={handleChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {allTags.map((tag) => (
                                <MenuItem
                                    key={tag.id}
                                    value={tag.name}
                                    style={getStyles(tag.name, allTags, theme)}
                                >
                                    {tag.name}
                                </MenuItem>
                            ))}
                        </Select>
                        {
                            errorMessage && <FormHelperText sx={{
                                color: `${red[500]}!important`,
                                fontSize: '14px!important'
                            }}>{errorMessage}</FormHelperText>
                        }
                    </FormControl>
                    <Typography sx={{ mt: 2, mb: 1 }}>Nhập nội dung câu hỏi</Typography>
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
                    {
                        successMessage && <Alert severity="success" sx={{ mt: 2 }}>
                            {successMessage}
                        </Alert>
                    }
                </Box>
                <Box sx={{
                    width: { xs: '100%', lg: 400 },
                    maxWidth: { xs: '100%', lg: 400 }
                }}>
                    <Typography sx={{ mb: 1, color: 'text.primary', fontWeight: 600, textTransform: 'uppercase' }}>
                    Hướng dẫn đăng tải câu hỏi
                    </Typography>
                    <Typography sx={{ mb: 0.5 }}>
                    1. Nội dung chính câu hỏi
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 15 }}>
                    Là mô tả ngắn gọn và trọng tâm vào điều bạn cần hỏi hay lỗi mà bạn gặp phải
                    </Typography>
                    <Typography sx={{ mb: 0.5, mt: 1 }}>
                    2. tag của câu hỏi
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 15 }}>
                    Là tên của các ngôn ngữ lập trình, library, framework, database,... liên quan đến câu hỏi
                    </Typography>
                    <Typography sx={{ mb: 0.5, mt: 1 }}>
                    3. Nội dung câu hỏi
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 15 }}>
                    Là phần văn bản nội dung câu hỏi, bạn có thể ghi text, link, image, emoji, code block, quote block,...<br/>
                    - Có thể sử dụng Ctrl Z hoặc Ctrl Shift Z để tiến lùi giữa các bước
                        <br/>
                    - Nếu bạn muốn thể hiện một đoạn code, hãy chọn ở mục Normal
                        <br/>
                    - Xuống dòng mà không break line bằng tổ hợp phím Ctrl Enter
                        <br/>
                    - Lưu ý khi chèn ảnh, bạn hãy để width thấp hơn 600 và height là auto nhé!
                        <br/>
                    - Ảnh khi chèn vào chỉ có thể căn chỉnh vị trí (trái - phải - giữa), bạn có thể xóa ảnh vừa mới chèn với tổ hợp phím Ctrl + Z
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default PostQuestionPage;