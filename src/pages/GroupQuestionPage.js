import { Box, Container, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { initialNoteData } from 'assets/dataset/initialNoteData';
import { questionSeedData } from 'assets/dataset/questionSeedData';
import GroupBoardFolder from 'components/GroupBoardFolder';
import QuestionBox from 'components/QuestionBox';
import React from 'react';

function GroupQuestionPage() {

    return (
        <Container
            maxWidth="xl"
            sx= {{
                width: {
                    xs: '100%',
                    lg: 'calc(100% - 300px)'
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
                    width: '100%',
                    px: { xs: 1, md: 3 },
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
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        width: '100%',
                        color: grey[700],
                        fontWeight: 700,
                        mb: 0,
                        pl: 3
                    }}
                >
                    Bảng ghi chú nhóm
                </Typography>
                <Grid container spacing={2} column={12} padding={1}>
                    {
                        initialNoteData.boards.map((board) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={board.id}>
                                <GroupBoardFolder board={board}/>
                            </Grid>
                        ))
                    }
                </Grid>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        width: '100%',
                        color: grey[700],
                        fontWeight: 700,
                        mb: 0,
                        pl: 3
                    }}
                >
                    Câu hỏi trong nhóm
                </Typography>
                <Grid container spacing={2}>
                    {
                        questionSeedData.map((item, index) =>
                            <Grid item key={index} xs={12} sm={6} md={4} xl={4} lg={4}>
                                <QuestionBox item={item}/>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container>
    );
}

export default GroupQuestionPage;