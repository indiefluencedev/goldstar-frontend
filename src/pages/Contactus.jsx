import React from 'react';

import Contacts from '../components/contactus/Contacts';

const ContactUs = () => {
    return (
        <div className="mx-auto xs:pt-48 xs:mb-28 md:pt-16">
            {/* Hide the banner on mobile view */}
          
            <Contacts />
         
        </div>
    );
};

export default ContactUs;
