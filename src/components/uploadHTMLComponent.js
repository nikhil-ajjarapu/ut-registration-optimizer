import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {generateSchedule} from "../scripts/generateSchedule.js";
import {generateOptimalCourseList} from "../scripts/generateOptimalCourseList.js"
import * as d3 from 'd3';
import agg_grades from '../scripts/data/agg.csv';

class uploadHTMLComponent extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      
      var fileRefs = [];
      var fileLabels = [];
      for (var i = 0; i < this.props.location.state.urls.length; i++) {
        fileRefs.push(React.createRef())
        fileLabels.push("Select file: ")
      }

      this.state = {urls: this.props.location.state.urls, fileRefs: fileRefs, fileLabels: fileLabels}
    }
    
    handleChange(index, event) {
        let fileLabels_copy = this.state.fileLabels;
        fileLabels_copy[index] = this.state.fileRefs[index].current.files[0].name;
        this.setState({
            fileLabels: fileLabels_copy
        })
    }  

    async handleSubmit(event) {
        event.preventDefault();
        var promises = [];
        for (var i = 0; i < this.state.fileRefs.length; i++) {
            let courseName = this.props.location.state.classnames[i];
            let fileRef = this.state.fileRefs[i];
            let filePromise = new Promise(resolve => {
                const reader = new FileReader()
                reader.onload = async (e) => { 
                    let result_unique = await generateSchedule(e.target.result);
                    resolve([courseName, result_unique]);
                };
                reader.readAsText(fileRef.current.files[0]);
            });
            promises.push(filePromise);
        }


        Promise.all(promises).then(classList => {
            let finalCourseMap = new Map();
            for (var j = 0; j < classList.length; j++) {
                finalCourseMap.set(classList[j][0], classList[j][1])
            }
            this.setState({finalCourseMap: finalCourseMap});
            let hist = this.props.history;
            // process the .csv files in ../data/*    
            d3.csv(agg_grades).then(function (data) {
                hist.push({
                    pathname: '/ut-registration-optimizer/generateSchedule/',
                    state: {possibleClasses: generateOptimalCourseList(finalCourseMap, data)}
                });
            });
            
        });
    } 
  
    render() {
        return (
            <div class="m-3">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="schoolSchedule.courseListings">
                    <Form.Label class="font-weight-bold">Please visit the following URLs, download the HTML (by pressing Command/Ctrl + S), and upload the primary HTML file (you can ignore the other files/folders) to the respective fields below. Incorrectly formatted files will be ignored:</Form.Label>
                    {this.state.urls.map((url, index) => 
                        <div class="p-2">
                            <Form.Label id={index} class="font-weight"><strong>URL to download:</strong> <a href={url} >{url}</a></Form.Label>
                            <Form.File id={index} label={this.state.fileLabels[index]} onChange={this.handleChange.bind(this, index)} ref={this.state.fileRefs[index]} custom />
                            
                            <br/>
                        </div>
                    )}
                </Form.Group>
                <Button variant="primary" type="Submit" value="Submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export {uploadHTMLComponent};