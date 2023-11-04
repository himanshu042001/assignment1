import React, { useState } from 'react';

function Section1() {
  const [companyUEN, setCompanyUEN] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleUENFocus = () => {
    setCompanyUEN('Enter your company UEN');
  };

  const handleNameFocus = () => {
    setCompanyName('Enter your company name');
  };

  return (
    <div className='section'>
      {/* <div className="input-div"> */}
        <input
          type="text"
          placeholder={companyUEN}
          onFocus={handleUENFocus}
          onBlur={() => setCompanyUEN('')}
        />
      {/* </div> */}
      
      {/* <div className="input-div"> */}
        <input
          type="text"
          placeholder={companyName}
          onFocus={handleNameFocus}
          onBlur={() => setCompanyName('')}
        />
      {/* </div> */}
    </div>
  );
}

export default Section1;
