import { useTheme } from '@emotion/react';
import { Close } from '@mui/icons-material';
import { Alert, Collapse, IconButton, TextField, Typography, useMediaQuery } from '@mui/material';
import Chip from '@mui/material/Chip';
import { blue, grey } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import TextEditor from 'components/TextEditor';
import React, { useEffect, useState } from 'react';

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

const names = [
    'Javascript',
    'C#',
    'C++',
    'Java',
    'Python',
    'NodeJS',
    'ReactJS',
    'TailwindCSS',
    'SCSS',
    'HTML',
    'CSS',
    'LESS',
    'Dart',
    'JQuery',
    'Bootstrap',
    'Material UI',
    'So on'
];

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
        shortDescription: '',
        content: ''
    });
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [open, setOpen] = useState(true);
    const downSM = useMediaQuery(theme.breakpoints.down('sm'));

    const handleContentChange = (newContent) => {
        setPostContent((prevState) => ({
            ... prevState,
            content: newContent
        }));
    };

    const handleChange = (event) => {
        const {
            target: { value }
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    // const ref = useRef();
    useEffect(() => {
        // ref.current.scrollIntoView();
    }, []);


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
                    bgcolor: '#fff',
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
                    '& p': { mb: 1, color: grey[600], fontSize: 16 }
                }}>
                    <Collapse in={open}>
                        <Alert
                            severity="info"
                            sx={{ mb: 1 }}
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
                        Nếu đây là lần đầu tiên bạn đăng câu hỏi, hãy đọc hướng dẫn sử dụng ở phía bên phải trước nhé,
                        điều này sẽ giúp định dạng chuẩn cho bài viết và khả năng được xét duyệt sẽ rất cao
                        </Alert>
                        {
                            downSM && <Alert severity="warning" sx={{ mb: 1 }}>
                            Tính năng upload ảnh trên mobile đang có khả năng xảy ra lỗi, nếu bạn sử dụng điện thoại, đừng upload ảnh bạn nhé
                            </Alert>
                        }
                    </Collapse>
                    <Typography>Nhập nội dung chính câu hỏi</Typography>
                    <TextField fullWidth size="small" multiline
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
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            sx={{
                                '&:hover fieldset, &.Mui-focused fieldset': {
                                    borderColor: `${blue[600]}!important`
                                }
                            }}
                            value={personName}
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
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography sx={{ mt: 2, mb: 1 }}>Nhập nội dung câu hỏi</Typography>
                    <TextEditor handleContentChange={handleContentChange}/>
                </Box>
                <Box sx={{
                    width: { xs: '100%', lg: 400 },
                    maxWidth: { xs: '100%', lg: 400 }
                }}>
                    <Typography sx={{ mb: 1, color: blue[700], fontWeight: 600, textTransform: 'uppercase' }}>
                    Hướng dẫn đăng tải câu hỏi
                    </Typography>
                    <Typography sx={{ mb: 0.5 }}>
                    1. Nội dung chính câu hỏi
                    </Typography>
                    <Typography sx={{ color: grey[600] }}>
                    Là mô tả ngắn gọn và trọng tâm vào điều bạn cần hỏi hay lỗi mà bạn gặp phải
                    </Typography>
                    <Typography sx={{ mb: 0.5, mt: 1 }}>
                    2. tag của câu hỏi
                    </Typography>
                    <Typography sx={{ color: grey[600] }}>
                    Là tên của các ngôn ngữ lập trình, library, framework, database,... liên quan đến câu hỏi
                    </Typography>
                    <Typography sx={{ mb: 0.5, mt: 1 }}>
                    3. Nội dung câu hỏi
                    </Typography>
                    <Typography sx={{ color: grey[600] }}>
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