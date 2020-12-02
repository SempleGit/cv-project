import React, { Component } from 'react';
import DisplayEducation from './DisplayEducation';

class EducationInput extends Component {
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
    this.setState((state) => {
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
        <form className="education-form" onSubmit={this.handleSubmit}>
          <label>School:
            <input type="text" name="school" onChange={this.handleChange} value={this.state.school}></input>
          </label>
          <label>Major:
            <input type="text" name="major" onChange={this.handleChange} value={this.state.major}></input>
          </label>
          <label>Graduation Date: 
            <input type="text" name="graduationDate" onChange={this.handleChange} value={this.state.graduationDate}></input>
          </label>
          <div className="submit-div">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <DisplayEducation formData={this.state.formData} />
      </section>
    )
  }
}

export default EducationInput;