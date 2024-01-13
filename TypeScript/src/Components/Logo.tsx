// Import React library, logo image and stylesheet for the Logo component
import React from "react";
import redeveloperlogo from '../assets/relogo.png';
import '../Styles/Logo.css';

// Functional component for the Logo
const Logo: React.FC = () => {
  return (
    // Container for the REDeveloper logo
    <div className='redeveloper-logo-container'>
      {/* Display the REDeveloper logo image */}
      <img
        src={redeveloperlogo}
        alt='REDeveloper Logo'
        className='redeveloper-logo'
      />
    </div>
  );
};

// Export the Logo component as the default export
export default Logo;
