import React from 'react';
import { Container, Box, Button } from '@mui/material';
import ActionMenu from 'components/ActionMenu';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../scss/QuestionPage.scss';
import Questions from 'components/QuestionBox';
import { Sort } from '@mui/icons-material';
import TextField from '@mui/material/TextField';

const listQuestions = [
    {
        vote: '1',
        answers: '5',
        views: '12',
        title: 'Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day ',
        des: 'Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day '
        // con phan mapping các loại ngôn ngữ tao đang bí
    },
    {
        vote: '1',
        answers: '5',
        views: '12',
        title: 'Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day ',
        des: 'Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day '
        // con phan mapping các loại ngôn ngữ tao đang bí
    },
    {
        vote: '1',
        answers: '5',
        views: '12',
        title: 'Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day ',
        des: 'Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day '
        // con phan mapping các loại ngôn ngữ tao đang bí
    },
    {
        vote: '1',
        answers: '5',
        views: '12',
        title: 'Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day Chung ta co the dat ten o day ',
        des: 'Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day Chung ta dat mo ta o day '
        // con phan mapping các loại ngôn ngữ tao đang bí
    }
];

function QuestionPage() {
    const [alignment, setAlignment] = React.useState(1);

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [age, setAge] = React.useState(0);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container
            maxWidth="xl"
            sx= {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#e9f5fa',
                gap: 2
            }}>
            <ActionMenu />
            <Box
                sx= {{
                    height: '100vh',
                    overflow: 'auto',
                    '&::-webkit-scrollbar':{
                        '-webkit-appearance': 'none',
                        width: '8px'
                    },
                    '&::-webkit-scrollbar-thumb':{
                        background: 'rgb(214, 214, 214)',
                        borderRadius: '5px'
                    },
                    display: 'flex',
                    flexDirection: 'column!important',
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 1,
                    marginTop: '10px',
                    borderRadius: 2
                }}
            >
                <Box sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: 2
                }}>
                    <Box
                        sx= {{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            boxSizing: 'border-box',
                            padding: '20px'
                        }}>
                        <Typography sx={{ fontWeight: 700 }} variant="h4" gutterBottom component="div">
                        All Questions
                        </Typography>
                        <Button variant='contained' disableElevation
                        >Ask Question</Button>
                    </Box>
                    <Box
                        sx= {{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            boxSizing: 'border-box',
                            padding: '15px 20px'
                        }}
                    >
                        <Typography sx={{ fontSize: 18 }} variant="subtitle1" gutterBottom component="div">
                        132 questions
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 5
                            }}
                        >

                            <ToggleButtonGroup
                                value={alignment}
                                exclusive
                                onChange={handleAlignment}
                                aria-label="text alignment"
                                sx={{
                                    '& button':{
                                        fontSize:17
                                    }
                                }}
                            >
                                <ToggleButton
                                    value="1"

                                >
                                Newest
                                </ToggleButton>
                                <ToggleButton
                                    value="2"
                                >
                                Active
                                </ToggleButton>
                                <ToggleButton value="3"
                                >
                                Bountied
                                </ToggleButton>
                                <ToggleButton value="4"
                                >
                                Unanswered
                                </ToggleButton>
                                <ToggleButton value="5"
                                    sx={{
                                        padding: 0
                                    }}
                                >
                                    <FormControl
                                        sx={{
                                            minWidth: 50,
                                            margin: 0,
                                            padding: 0,
                                            maxHeight:50
                                        }}>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx ={{
                                                padding: 0,
                                                maxHeight: 51,
                                                borderRadius: 0,
                                                outline: '0'
                                            }}
                                        >
                                            <MenuItem disabled value={0} sx={{ maxHeight: 51 }}>
                                                <p>More</p>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </ToggleButton>
                            </ToggleButtonGroup>
                            <ToggleButtonGroup exclusive>
                                <ToggleButton
                                    sx={{
                                        padding: 0
                                    }}>
                                    <FormControl
                                        sx={{
                                            minWidth: 50,
                                            margin: 0,
                                            padding: 0,
                                            maxHeight:50,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            '& div div svg.MuiSelect-icon':{ display: 'none' },
                                            '& div div div':{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }
                                        }}>
                                        <TextField
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            select
                                            sx ={{
                                                padding: 0,
                                                maxWidth: 100,
                                                maxHeight: 51,
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <MenuItem disabled value={0} sx={{
                                                maxHeight: 51,
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center' }}>
                                                <Sort/> <p>Filter</p>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </TextField>
                                    </FormControl>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Box>
                </Box>
                {
                    listQuestions.map((info, index) => (
                        <Questions info={info} key={index} />
                    ))
                }
            </Box>
        </Container>
    );
}

export default QuestionPage;