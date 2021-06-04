import React from 'react';
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {generateHTMLUrls} from "../scripts/generateHTMLUrls.js";

class FormComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {classnames:''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({classnames: event.target.value})
    }  

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.classnames.includes("\n")) {
            this.setState({classnames: [this.state.classnames]})
        };
        var urls = generateHTMLUrls(this.state.classnames.split("\n"));
        this.props.history.push({
            pathname: '/ut-registration-optimizer/uploadHTML/',
            state: {urls: urls, classnames: this.state.classnames.split('\n')}
        });
    }
  
    render() {
        return (
            <div class="m-3">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="schoolSchedule.classNames">
                    <Form.Label class="font-weight-bold">Enter all your classes below on separate lines (e.g CS 314, CH 320M, etc.). Invalid classes will be ignored when generating schedule. </Form.Label>
                    <Form.Control as="textarea" rows={5} onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Button variant="primary" type="Submit" value="Submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(FormComponent);