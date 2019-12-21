import React from 'react';
import { Container, InputGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';


//  Admin and Normal user booth are can be use this component for login

const UserLogin = () => {
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
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <ButtonToolbar className="mb-3">
                <Button variant="primary" >Login</Button>
            </ButtonToolbar>
        </Container>
    );
};


export default UserLogin;
