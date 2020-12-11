import React from 'react';

const ExperienceInputs = (props) => {
  const { onChange, onSubmit, parameters: { employer, jobTitle, duties, startDate, endDate } } = props;
  return (
          <form className="experience-form" onSubmit={onSubmit}>
            <label>Employer:
              <input type="text" name="employer" onChange={onChange} value={employer}></input>
            </label>
            <label>Job Title:
              <input type="text" name="jobTitle" onChange={onChange} value={jobTitle}></input>
            </label>
            <label>Duties:
              <textarea rows="8" type="text" name="duties" onChange={onChange} value={duties}></textarea>
            </label>
            <label>Start Date: 
              <input type="text" name="startDate" onChange={onChange} value={startDate}></input>
            </label>
            <label>End Date: 
              <input type="text" name="endDate" onChange={onChange} value={endDate}></input>
            </label>
            <div className="submit-div">
              <input type="submit" value="Submit" />
            </div>
          </form>
  )
}

export default ExperienceInputs;