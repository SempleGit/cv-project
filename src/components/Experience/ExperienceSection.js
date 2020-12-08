import React, { Component } from 'react';
import DisplayExperience from './DisplayExperience';
import ExperienceInputs from './ExperienceInputs';
import uniqid from 'uniqid';

class ExperienceSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      duties: '',
      startDate: '',
      endDate: '',    
      id: '',
      formData: []
    };
  }

  deleteItem = (deleteId) => {
    let formCopy = [...this.state.formData];
    this.setState({formData: formCopy.filter( ({id}) => id !== deleteId)});
  } 

  editItem = (editId) => {
    const editRef = this.state.formData.find( ({id}) => id === editId);
    this.setState(editRef);
  } 

  handleChange = (e) => {
    this.setState(() => ({[e.target.name]: e.target.value}))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( ({jobTitle, duties, startDate, endDate, formData, id}) => {
      let copyForm = [...formData];
      const index = formData.findIndex( data => data.id === id);
      if (index > -1) {
        copyForm.splice(index, 1, {jobTitle, duties, startDate, endDate, id});
      } else {
        copyForm = copyForm.concat({jobTitle, duties, startDate, endDate, id: uniqid()});
      }
        
      return {  
        jobTitle: '',
        duties: '',
        startDate: '',
        endDate: '',    
        id: '',
        formData: copyForm
      }
    });
  }

  render() {
    return (
      <section className="section-wrapper">
        <ExperienceInputs onChange={this.handleChange} onSubmit={this.handleSubmit} parameters={this.state}/>
        <DisplayExperience formData={this.state.formData} onDelete={this.deleteItem} onEdit={this.editItem}/>
      </section>
    )
  }
}

export default ExperienceSection;