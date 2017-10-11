import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class ContactMe extends Component {
    render() {
        return(
        <div className="Contact-Me">
        <Form>
            <FormGroup>
                <Label for="exampleName"><h5>Name</h5></Label>
                <Input name="name" id="exampleName" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail"><h5>Email</h5></Label>
                <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText"><h5>Message</h5></Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
        </Form>
        <Button color="primary" size="lg" className="float-right">Submit</Button>
        </div>
        );
    }
}
export default ContactMe;