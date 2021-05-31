import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {generateHTMLUrls} from "../scripts/generateHTMLUrls.js";


class uploadHTMLComponent extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      var urls_temp = generateHTMLUrls(this.props.match.params.urls.split("\n"));
      
      var fileRefs = [];
      for (var i = 0; i < urls_temp.length; i++) {
        fileRefs.push(React.createRef())
      }

      this.state = {urls: urls_temp, fileRefs: fileRefs}
    }
    
    handleChange(event) {
        
    }  

    handleSubmit(event) {
        event.preventDefault();
        for (var i = 0; i < this.state.fileRefs.length; i++) {
            const reader = new FileReader()
            reader.onload = async (e) => { 
                const text = (e.target.result)
                console.log(text)
            };
            reader.readAsText(this.state.fileRefs[i].current.files[0]);
        }
    }
  
    render() {
        return (
            <div class="m-3">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="schoolSchedule.courseListings">
                    <Form.Label class="font-weight-bold">Please visit the following URLs, download the HTML (by pressing Command/Ctrl + S), and upload them to the respective fields below. Incorrectly formatted files will be ignored:</Form.Label>
                    {this.state.urls.map((url, index) => <div><Form.Label class="font-weight"><strong>URL to download:</strong> <a href={url} >{url}</a></Form.Label><Form.File id={index} label="Select file: " onChange={this.handleChange.bind(this)} ref={this.state.fileRefs[index]} custom /><br/></div>)}
                </Form.Group>
                <Button variant="primary" type="Submit" value="Submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export {uploadHTMLComponent};