import React from 'react';

const EducationInputs = (props) => {
  const {onSubmit, onChange, parameters: { school, major, graduationDate} } = props;
  return (
          <form className="education-form" onSubmit={onSubmit}>
            <label>School:
              <input type="text" name="school" onChange={onChange} value={school}></input>
            </label>
            <label>Major:
              <input type="text" name="major" onChange={onChange} value={major}></input>
            </label>
            <label>Graduation Date: 
              <input type="text" name="graduationDate" onChange={onChange} value={graduationDate}></input>
            </label>
            <div className="submit-div">
              <input type="submit" value="Submit" />
            </div>
          </form>
  )
}

export default EducationInputs;