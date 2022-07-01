import React from 'react';
import Search from '@mui/icons-material/Search';
import { Container, Grid, InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { Star } from '@mui/icons-material';
import ListBlog from 'components/ListBlog';
import img1 from 'assets/images/travel.jpg';
import avt1 from 'assets/images/travel.jpg';
import hashtag1 from 'assets/images/moiramat.jpg';
import hashtag2 from 'assets/images/thinhhanh.jpg';
import img2 from 'assets/images/intro-HuuNghia.jpg';

const Trendding24H = [
    {
        id: 1,
        image: img2,
        title: 'Khoá học Javascript từ cơ bản đến nâng cao dành cho người mới',
        avatar:  avt1,
        name: 'John Doe',
        hashtag: hashtag2
    },
    {
        id: 2,
        image: img1,
        title: 'Tự học thiết kế website hiệu quả với khoá học HTML CSS cơ bản cho người mới',
        avatar: avt1,
        name: 'John Doe',
        hashtag: hashtag2
    },
    {
        id: 3,
        image: img1,
        title: 'Võ Thanh Duy: Thành thạo làm website cơ bản trong 7 tiếng -  Khóa học WordPress 2021 chi tiết nhất.',
        avatar:  avt1,
        name: 'John Doe',
        hashtag: hashtag2
    }
];

const Hot = [
    {
        id: 1,
        image: img1,
        title: 'Tự học thiết kế website hiệu quả với khoá học HTML CSS cơ bản cho người mới',
        avatar:  avt1,
        name: 'John Doe',
        hashtag: hashtag1
    },
    {
        id: 2,
        image: img1,
        title: 'Võ Thanh Duy: Thành thạo làm website cơ bản trong 7 tiếng -  Khóa học WordPress 2021 chi tiết nhất.',
        avatar: avt1,
        name: 'John Doe',
        hashtag: hashtag2
    },
    {
        id: 3,
        image: img1,
        title: '(Miễn phí) Facebook Ads 100 - Quảng Cáo Facebook Hiệu Quả Dành Cho Người Mới',
        avatar:  avt1,
        name: 'John Doe',
        hashtag: hashtag1
    },
    {
        id: 4,
        image: img1,
        title: 'Khóa học Tối ưu quảng cáo chuyển đổi online - Web Conversion Optimization (WCO) - Kỹ thuật chạy & tối ưu quảng cáo chuyển đổi',
        avatar:  avt1,
        name: 'John Doe',
        hashtag: hashtag1
    },
    {
        id: 5,
        image: img1,
        title: '(Miễn phí) Facebook Ads 100 - Quảng Cáo Facebook Hiệu Quả Dành Cho Người Mới',
        avatar: avt1,
        name: 'John Doe',
        hashtag: hashtag2
    },
    {
        id: 6,
        image: img1,
        title: 'Khóa học Tối ưu quảng cáo chuyển đổi online - Web Conversion Optimization (WCO) - Kỹ thuật chạy & tối ưu quảng cáo chuyển đổi',
        avatar:  avt1,
        name: 'John Doe',
        hashtag: hashtag1
    }
];

function BlogsPage() {
    return (
        <Container maxWidth="lg">
            <Box sx={{
                pt: '30px',
                width: '100%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pb: 3
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        lg: 'row'
                    },
                    textAlign: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography
                        sx={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#273167'
                        }}
                    >Chào Bạn👋&nbsp;</Typography>
                    <Typography
                        sx={{
                            fontSize: 26,
                            color: '#273167'
                        }}
                    >
                        hôm nay, bạn muốn học gì?
                    </Typography>
                </Box>
                <TextField
                    variant="outlined"
                    placeholder="Nhập tên chủ đề"
                    sx={{
                        padding: '20px 0 45px 0',
                        height: '30px',
                        width: {
                            sm: '400px',
                            md: '500px'
                        },
                        color: 'grey',
                        ontSize:'18px',
                        '.Mui-focused': { border: 'none', outline: 'none' },
                        '& ::placeholder': { fontSize: 18 },
                        '& svg': { color: grey[500], pr: 0 },
                        '& input': { color: grey[700] },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: grey[400]
                            },
                            '&:hover fieldset': {
                                borderColor: grey[500]
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: grey[500]
                            }
                        }
                    }}
                    spellCheck="false"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Search/></InputAdornment>
                    }}
                />
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        p: '20px 0 20px 40px'
                    }}>
                    <Star
                        sx={{
                            fontSize: '2rem',
                            padding: '0 10px 0 0',
                            float: 'left',
                            color: '#273167'
                        }}>
                    </Star>
                    <Typography
                        sx={{
                            fontSize: 24,
                            color: '#273167',
                            fontWeight: 'bold'
                        }}>
                            Đề xuất cho bạn
                    </Typography>
                </Box>
                <Grid container spacing={3}
                    sx={{
                        width: '100%',
                        padding: '0 0 0 1rem'
                    }}>
                    {Trendding24H.map((item) => (
                        <Grid item key={item.id} lg={4} xl={4} md={4} sm={6} xs={12} >
                            <ListBlog data={item}/>
                        </Grid>
                    ))}
                </Grid>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        p: '20px 0 20px 40px'
                    }}>
                    <Star
                        sx={{
                            fontSize: '2rem',
                            padding: '0 10px 0 0',
                            float: 'left',
                            color: '#273167'
                        }}>
                    </Star>
                    <Typography
                        sx={{
                            fontSize: 24,
                            color: '#273167',
                            fontWeight: 'bold'
                        }}>
                        Nổi bật Trong Tháng
                    </Typography>
                </Box>
                <Grid container spacing={3}
                    sx={{
                        width: '100%',
                        padding: '0 0 0 1rem'
                    }}>
                    {Hot.map((item) => (
                        <Grid item key={item.id} lg={4} xl={4} md={4} sm={6} xs={12} >
                            <ListBlog data={item}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default BlogsPage;