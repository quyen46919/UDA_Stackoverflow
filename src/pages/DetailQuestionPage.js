import { Container } from '@mui/material';
import MenuDetailQuestion from 'components/MenuDetailQuestion';
import React from 'react';

function DetailQuestionPage() {
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
                gap: 5,
                transition: '0.2s'
            }}
        >
            <MenuDetailQuestion/>
        </Container>
    );
}

export default DetailQuestionPage;