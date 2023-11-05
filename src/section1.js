


import React, { useState } from 'react';
import { useAppContext } from './AppContext';



function Section1() {
  const { state, dispatch } = useAppContext();
  
  const [companyUEN, setCompanyUEN] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isUENValid, setUENValid] = useState(false);
  const [isNameValid, setNameValid] = useState(false);

  const handleUENFocus = () => {
    setCompanyUEN('Enter your company UEN');
  };

  const handleNameFocus = () => {
    setCompanyName('Enter your company name');
  };

  const handleUENChange = (event) => {
    dispatch({
      type: 'UPDATE_COMPANY_DATA',
      payload: { companyUEN: event.target.value },
    });
    const uenPattern = /^[0-9]{8}[A-Za-z]$/;
    setUENValid(uenPattern.test(event.target.value));
    setCompanyUEN(event.target.value);
  };

  const handleNameChange = (event) => {
    dispatch({
      type: 'UPDATE_COMPANY_DATA',
      payload: { companyName: event.target.value },
    });
    setNameValid(true); // You can add your validation logic here
    setCompanyName(event.target.value);
  };

  return (
    <div className='section'>
      <input
        type="text"
        placeholder={companyUEN}
        onFocus={handleUENFocus}
        onBlur={() => setCompanyUEN('')}
        onChange={handleUENChange}
        style={{ borderColor: isUENValid ? 'black' : 'red' }}
      />

      <input
        type="text"
        placeholder={companyName}
        onFocus={handleNameFocus}
        onBlur={() => setCompanyName('')}
        onChange={handleNameChange}
        style={{ borderColor: isNameValid ? 'black' : 'red' }}
      />
    </div>
  );
}

export default Section1;
