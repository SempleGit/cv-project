import React from 'react';

const DisplayExperience = (props) => {
  const dutiesList = (duties) => {
    return duties.split(/,|\.|\n/gm).map( (duty, index) => {
      return (
        <ul key={index}>
          <li>{duty}</li>
        </ul>
      )
    })
  }

  const experienceList = props.formData.map(({jobTitle, duties, startDate, endDate, id}) => (
        <div className="item-display" key={id}>
            <p>{jobTitle}</p>
            <p>{startDate} - {endDate}</p> 
            <p>Job Duties: {dutiesList(duties)}</p> 
          <button onClick={() => props.onDelete(id)}>Delete</button>
          <button onClick={() => props.onEdit(id)}>Edit</button> 
        </div>
      )
    )

  return (
    <div className="general-display">
      <h2 className="section-header">Experience</h2>
      {experienceList}
    </div>
  )
}

export default DisplayExperience;   