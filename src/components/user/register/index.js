import React from 'react';
import { Container, InputGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';


const RegisterUser = () => {
    return (
        <Container>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Email Address"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Password"
                    aria-label="Password1"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Confirm Password"
                    aria-label="Password2"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <ButtonToolbar className="mb-3">
                <Button variant="primary" >Register</Button>
            </ButtonToolbar>
        </Container>
    );
};


export default RegisterUser;
