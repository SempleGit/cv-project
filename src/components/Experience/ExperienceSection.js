import React, { useState } from 'react';
import DisplayExperience from './DisplayExperience';
import ExperienceInputs from './ExperienceInputs';
import uniqid from 'uniqid';

const ExperienceSection = () => {
 const [state, setState] = useState({
      employer: '',
      jobTitle: '',
      duties: '',
      startDate: '',
      endDate: '',    
      id: '',
      formData: [{
        employer: 'Jurassic Park',
        jobTitle: 'Paleoentologist',
        duties: `Acted as a dinosaur expert for the park. Reviewed park safety precautions and types of dinosaurs. When the dinosaurs escaped from captivity assisted in saving the children and blowing up the island.`,
        startDate: 'Mar 1993',
        endDate: 'Apr 1993',    
        id: 'default1',
      },
      {
        employer: 'Jurassic Park II',
        jobTitle: 'Paleoentologist',
        duties: `Without any other paleoentologists available, was taken as a captive dinosaur expert. Main functions include searching for some lost hiker named Eric, who elected to go hiking on a dinosaur infested island.`,
        startDate: 'July 1995',
        endDate: 'Aug 1995',    
        id: 'default2',
      }
    ]
    });

  const deleteItem = (deleteId) => {
    let formCopy = [...state.formData];
    setState({formData: formCopy.filter( ({id}) => id !== deleteId)});
  } 

  const editItem = (editId) => {
    const editRef = state.formData.find( ({id}) => id === editId);
    setState(editRef);
  } 

  const handleChange = (e) => {
    setState(() => ({[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setState( ({employer, jobTitle, duties, startDate, endDate, formData, id}) => {
      let copyForm = [...formData];
      const index = formData.findIndex( data => data.id === id);
      if (index > -1) {
        copyForm.splice(index, 1, {employer, duties, startDate, endDate, id});
      } else {
        copyForm = copyForm.concat({employer, duties, startDate, endDate, id: uniqid()});
      }
        
      return {  
        employer: '',
        jobTitle: '',
        duties: '',
        startDate: '',
        endDate: '',    
        id: '',
        formData: copyForm
      }
    });
  }

  return (
    <section className="section-wrapper">
      <ExperienceInputs onChange={handleChange} onSubmit={handleSubmit} parameters={state}/>
      <DisplayExperience formData={state.formData} onDelete={deleteItem} onEdit={editItem}/>
    </section>
  )
}

export default ExperienceSection;