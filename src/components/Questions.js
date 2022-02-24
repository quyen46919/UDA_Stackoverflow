import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

Questions.propTypes = {
    info: PropTypes.object.isRequired
};

function Questions(props) {
    const { info } = props;
    const { vote, answers, views, title, des } = info;
    const handleClick = () => {};
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: 4,
                paddingTop: 4,
                paddingBottom: 4,
                backgroundColor: 'white',
                borderRadius: 2
            }}
        >
            <Box
                sx={{
                    width: '13%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    paddingTop: '2px',
                }}
            >
                <Typography
                    sx={{ fontSize: 18 }}
                    variant="body2"
                    gutterBottom>{vote} votes</Typography>
                <Typography sx={{ color: '#757575', fontSize: 18 }} variant="body2" gutterBottom>{answers} answers</Typography>
                <Typography sx={{ color: '#757575', fontSize: 18 }} variant="body2" gutterBottom>{views} views</Typography>
            </Box>
            <Box
                sx={{
                    width: '87%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    '& a':{ textDecoration: 'none' },
                    paddingRight: 5
                }}
            >
                <Link to='#'>
                    <Typography
                        sx ={{
                            width: '100%',
                            display: '-webkit-box',
                            '-webkit-line-clamp': '2',
                            '-webkit-box-orient': 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: 21,
                            color: '#077fd0',
                            'line-height': 'normal',
                            marginBottom: 0,
                            textDecoration: 'none'
                        }}
                        variant="subtitle1" gutterBottom component="div">{title}
                    </Typography>
                </Link>
                <Typography
                    sx ={{
                        width: '100%',
                        display: '-webkit-box',
                        '-webkit-line-clamp': '2',
                        '-webkit-box-orient': 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginBottom: '5px',
                        fontSize: 19,
                        color: '#757575'
                    }}
                    variant="body2" gutterBottom>{des}</Typography>
                <Box>

                    <Stack direction="row" spacing={1}>
                        <Chip label="javascript" sx={{ backgroundColor: '#f6ea8c', color: 'white' }} onClick={handleClick} />
                        <Chip label="java" sx={{ backgroundColor: '#c69145', color: 'white' }} onClick={handleClick} />
                        <Chip label="c++" sx={{ backgroundColor: '#fa8bac', color: 'white' }} onClick={handleClick} />
                        <Chip label="c#" sx={{ backgroundColor: '#27b20a', color: 'white' }} onClick={handleClick} />
                        <Chip label="c" sx={{ backgroundColor: '#6e6767', color: 'white' }} onClick={handleClick} />
                        <Chip label="python" sx={{ backgroundColor: '#408ed0', color: 'white' }} onClick={handleClick} />
                        <Chip label="shell" sx={{ backgroundColor: '#a0e871', color: 'white' }} onClick={handleClick} />
                        <Chip label="other" sx={{ backgroundColor: '#ededed' }} onClick={handleClick} />
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default Questions;