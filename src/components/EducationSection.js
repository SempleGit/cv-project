import React, { Component } from 'react';
import EducationInputs from './EducationInputs';
import DisplayEducation from './DisplayEducation';


class EducationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      major: '',
      graduationDate: '',
      formData: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log("change");
    this.setState(() => {
      return {[e.target.name]: e.target.value}
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => (
        {
          formData: {
            school: state.school,
            major: state.major,
            graduationDate: state.graduationDate
          },
          school: '',
          major: '',
          graduationDate: ''
        }
      )
    );
  }

  render() {
    return (
      <section className="education-section-wrapper">
        <EducationInputs onSubmit={this.handleSubmit} onChange={this.handleChange} parameters={this.state} />
        <DisplayEducation formData={this.state.formData} />
      </section>
    )
  }
}

export default EducationSection;