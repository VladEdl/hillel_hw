import React from 'react';
import {Box, Container, CssBaseline} from "@mui/material";
import PropTypes from "prop-types";

const DummyComponent = ({age}) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#ccc', height: '100vh' }} />
            </Container>
        </React.Fragment>
    );
};

DummyComponent.propTypes = {
    age: PropTypes.number.isRequired,
}

export default DummyComponent;