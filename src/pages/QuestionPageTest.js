import { Box, Button, Container } from '@mui/material';
import ActionMenu from 'components/ActionMenu';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import Questions from 'components/Questions';
import user1 from 'assets/images/intro-HuuTai.jpg';
import user2 from 'assets/images/intro-HuuNghia.jpg';
import user3 from 'assets/images/intro-ChauQuyen.jpg';
import user4 from 'assets/images/intro-ChauQuyen.jpg';


const listQuestions = [
    {
        number: '1',
        time: '12:05 AM',
        name: 'Hoàng Hữu Tài',
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        des: 'Lorem, ipsum dolor sit amet cons',
        file: '4',
        comment: '34',
        image: user1
    },
    {
        number: '2',
        time: '9:05 AM',
        name: 'Nguyễn Châu Quyền',
        title: 'Tại sao tôi không thể cài đặt reactJs',
        des: 'Veniam amet dolor, in autem deserunt odit earum doloribus inventore porro, officiis tenetur aperiam blanditiis?',
        file: '4',
        comment: '34',
        image: user2
    },
    {
        number: '3',
        time: '16:30 AM',
        name: 'Hoàng Hữu Nghĩa',
        title: 'Tôi không thể cài đặt Typescript',
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam amet dolor, in autem deserunt odit earum doloribus inventore porro, officiis tenetur aperiam blanditiis?',
        image: user3
    },
    {
        number: '4',
        time: '8:00 AM',
        name: 'Nguyễn Tuân',
        title: 'Tôi đang cố gắng chạy chương trình reactJs đầu tiên cho mình',
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam amet dolor, in autem deserunt odit earum doloribus inventore porro, officiis tenetur aperiam blanditiis?',
        image: user4
    }
];

function QuestionPageTest() {
    const [view, setView] = React.useState('list');

    const handleChange2 = (event, nextView) => {
        setView(nextView);
    };
    const [script, setScript] = React.useState('');

    const handleChange = (event) => {
        setScript(event.target.value);
    };

    const handleClick = () => {
        // console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        // console.info('You clicked the delete icon.');
    };
    return (
        <Container
            maxWidth="xl"
            sx= {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems:'flex-start',
                pt: 6,
                backgroundColor: 'white',
                gap: { xs: 0, md: 5 },
                transition: '0.2s'
            }}
        >
            <ActionMenu/>
            <Box
                sx={{
                    height: '100vh',
                    width: { xs:'100vw', md: '80vw' },
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
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1.5
                        }}>
                        <Button
                            sx={{
                                display:{
                                    xs: 'flex',
                                    md: 'none'
                                },
                                boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 50
                            }}><MenuIcon sx={{ color: grey[400] }}/></Button>
                        <Stack
                            sx={{
                                backgroundColor: 'white',
                                boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                borderRadius: 0

                            }}
                        >
                            <Chip
                                sx={{
                                    borderRadius: 0,
                                    backgroundColor: 'transparent',
                                    padding: '24px 12px',
                                    fontWeight: 600,
                                    color: grey[500],
                                    fontSize: { sm: '15px', xs: '12px' }
                                }}
                                deleteIcon={<BorderColorIcon sx={{ fontSize: { sm: '15px', xs: '12px' } }}/>}
                                label="NEW TICKET"
                                onClick={handleClick}
                                onDelete={handleDelete}
                            />
                        </Stack>
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
                        <FormControl
                            sx={{
                                m: 1,
                                display: 'flex',
                                justifyContent: 'flex-end',
                                '& > div':{
                                    // fontSize: 1,
                                    width: { xs: '35px', sm: 'auto' },
                                    border: 'none',
                                    borderRadius: 0,
                                    boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                    padding: '5px 12px'
                                }
                            }}>
                            <Select
                                sx={{
                                    margin: 0,
                                    '& > div':{
                                        padding: 1,
                                        fontWeight: 600,
                                        color: grey[500]
                                    },
                                    '& p':{
                                        display: { xs: 'none', sm: 'block' },
                                        margin: '0!important'
                                    },
                                    '& fieldset':{
                                        borderColor: 'transparent'
                                    }
                                }}
                                value={script}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem sx={{ '& p':{ margin: '0!important' } }} value="">
                                    <p>Sắp xếp: A-Z</p>
                                </MenuItem>
                                <MenuItem sx={{ '& p':{ margin: '0!important' } }} value={1}>
                                    <p>Sắp xếp: Z-A</p>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <ToggleButtonGroup
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 1,
                                '& button':{
                                    border: 'none',
                                    borderRadius: 0,
                                    boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px'
                                }
                            }}
                            orientation="vertical"
                            value={view}
                            exclusive
                            onChange={handleChange2}
                        >
                            <ToggleButton
                                value="list"
                                aria-label="list">
                                <ViewListIcon />
                            </ToggleButton>
                            <ToggleButton value="module" aria-label="module">
                                <ViewModuleIcon />
                            </ToggleButton>

                        </ToggleButtonGroup>

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

export default QuestionPageTest;