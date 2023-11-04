import React from 'react';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';

function Header() {
  return (
    <>

    
    <br/>
    <div className="header">
      <div className="gradient-background">
      
       <h1>Company Information</h1>
       <Section1 />
      
      </div>
      <div className="gradient-background">
        <h1>Applicant Information</h1>
        <Section2 />
      </div>
     
      <div className="gradient-background">
        <h1>Upload Documents</h1>
        <Section3 />
      </div>
     
      <div className="gradient-background">
        <h1>Terms and Conditions</h1>
        <Section4 />
      </div>
      
      
    </div>
    </>
  );
}

export default Header;
