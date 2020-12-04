import React, { useState } from 'react';
import DisplayGeneral from './DisplayGeneral'
import GeneralInputs from './GeneralInputs';

const GeneralSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formData, setForm] = useState({});
  const [showInputs, displayInputs] = useState(true);
  
const handleSubmit = (e) => {
  e.preventDefault();
  setForm({name: name, email: email, phone: phone});
  // displayInputs(!showInputs)
  setName('');
  setPhone('');
  setEmail('');
}

  return (
    <section className="section-wrapper">
      {showInputs && <GeneralInputs parameters={ {name, email, phone, setName, setEmail, setPhone, handleSubmit} } />}
      <DisplayGeneral formData={formData} />
    </section>
  )
}

export default GeneralSection;