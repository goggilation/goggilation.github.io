import React from "react";
import Contact from './Contact';

const ContactStart = () => {
  gtag('set', 'page', '/Contact');
  gtag('send', 'pageview');
  return (
    <div>
        <Contact />
    </div>
  );
};
export default ContactStart;