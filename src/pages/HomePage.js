import { Button, Container, Typography } from '@mui/material';
import React from 'react';

function HomePage() {
    return (
        <Container>
            this is homepage
            <Button variant="contained" color="primary" disableElevation>
                ĐĂNG NHẬP NGAY
            </Button>
            <Typography>
                this is text
            </Typography>
            <Typography variant="h3">
                this is text
            </Typography>
        </Container>
    );
}

export default HomePage;