import React, { Component } from 'react';
import EducationInputs from './EducationInputs';
import DisplayEducation from './DisplayEducation';
import uniqid from 'uniqid';


class EducationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      major: '',
      graduationDate: '',
      formData: [{
        school: 'University of Montana',
        major: 'Geology and Zoology',
        graduationDate: 'May 1986',
        id: 'defaultEdu'
      }]
    }
  }

  handleChange = (e) => {
    this.setState(() => ({[e.target.name]: e.target.value}))
  }

  deleteItem = (deleteId) => {
    let formCopy = [...this.state.formData];
    this.setState({formData: formCopy.filter( ({id}) => id !== deleteId)});
  } 

  editItem = (editId) => {
    const editRef = this.state.formData.find( ({id}) => id === editId);
    this.setState(editRef);
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( ({school, major, graduationDate, formData, id}) => {
      let copyForm = [...formData];
      const index = formData.findIndex( data => data.id === id);
      if (index > -1) {
        copyForm.splice(index, 1, {school, major, graduationDate, id});
      } else {
        copyForm = copyForm.concat({school, major, graduationDate, id: uniqid()});
      }
        
      return {  
        school: '',
        major: '',
        graduationDate: '',   
        id: '',
        formData: copyForm
      }
    });
  }

  render() {
    return (
      <section className="section-wrapper">
        <EducationInputs onSubmit={this.handleSubmit} onChange={this.handleChange} parameters={this.state} />
        <DisplayEducation formData={this.state.formData} onDelete={this.deleteItem} onEdit={this.editItem}/>
      </section>
    )
  }
}

export default EducationSection;