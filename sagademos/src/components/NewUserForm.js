import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewUserForm extends Component {

    state = {
        username: '',
        name: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        const {username, name} = this.state;

        this.props.onSubmit({
            username,
            name
        });

        this.setState({
            username: '',
            name: ''
        });
    };

    handleUserNameChange = e => {
        this.setState({
            username: e.currentTarget.value
        });
    };

    handleNameChange = e => {
        this.setState({
            name: e.currentTarget.value
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>
                        First name
                    </Label>
                    <Input required type="text" value={this.state.username} onChange={this.handleUserNameChange} />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Last name
                    </Label>
                    <Input required type="text" value={this.state.name} onChange={this.handleNameChange} />
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color="primary">
                        Create
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default NewUserForm;