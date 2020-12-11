import React from 'react';

const GeneralInputs = (props) => {
  const {name, email, phone, setName, setEmail, setPhone, handleSubmit} = props.parameters;
  return (
          <form className="general-form" onSubmit={handleSubmit}>
            <label>Name: 
              <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}></input>
            </label>
            <label>email: 
              <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </label>
            <label>Phone: 
              <input type="tel" required placeholder='555-555-5555' onChange={(e) => setPhone(e.target.value)} value={phone}></input>
            </label>
            <div className="submit-div">
              <input type="submit" value="Submit" />
            </div>
          </form>
  )
}

export default GeneralInputs;