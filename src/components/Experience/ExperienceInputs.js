import React from 'react';

const ExperienceInputs = (props) => {
  const { onChange, onSubmit, parameters: { jobTitle, duties, startDate, endDate } } = props;
  return (
          <form className="experience-form" onSubmit={onSubmit}>
            <label>Job Title:
              <input type="text" name="jobTitle" onChange={onChange} value={jobTitle}></input>
            </label>
            <label>Duties:
              <input type="text" name="duties" onChange={onChange} value={duties}></input>
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