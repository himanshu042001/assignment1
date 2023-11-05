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
      <div className='flat'>
       <h1>Company Information</h1>
       </div>
       <Section1 />
      
      </div>
      <div className="gradient-background">
      <div className='flat'>
        <h1>Applicant Information</h1>
        </div>
        <Section2 />
      </div>
     
      <div className="gradient-background">
      <div className='flat'>
        <h1>Upload Documents</h1>
        </div>
        <Section3 />
        
      </div>
     
      <div className="gradient-background">
      <div className='flat'>
        <h1>Terms and Conditions</h1>
        </div>
        <Section4 />
      </div>
      
      
    </div>
    </>
  );
}

export default Header;
