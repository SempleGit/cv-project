import React, { Component } from 'react';
import DisplayExperience from './DisplayExperience';
import ExperienceInputs from './ExperienceInputs';

class ExperienceSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      duties: '',
      startDate: '',
      endDate: '',
      formData: {}
    };
  }

  handleChange = (e) => {
    this.setState(() => ({[e.target.name]: e.target.value}))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( ({jobTitle, duties, startDate, endDate}) => {
      return {formData: {jobTitle, duties, startDate, endDate}};
    });
  }

  render() {
    return (
      <section className="section-wrapper">
        <ExperienceInputs onChange={this.handleChange} onSubmit={this.handleSubmit} parameters={this.state}/>
        <DisplayExperience formData={this.state.formData} />
      </section>
    )
  }
}

export default ExperienceSection;