import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'reactstrap';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
`

class InputForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }
    handleChange = e => {
        e.preventDefault();
        this.setState({input: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.setUser(this.state.input);
        this.setState({input: ""})
    }
    render() {
        return(
            <Container>
                <Form style={{display: 'flex', justifyContent: 'center'}} onSubmit={this.handleSubmit}>
                    <Input style={{fontSize: '2.5rem'}} type="text" placeholder="Github username" value={this.state.input} onChange={this.handleChange}></Input>
                    <Button style={{fontSize: '2rem', marginLeft: '5%'}}>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default InputForm;