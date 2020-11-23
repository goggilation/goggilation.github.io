import React from "react";
import Contact from './Contact';
import config from '../config';

const ContactStart = () => {
  gtag('config', config.GA_MEAS_ID, {
    'page_title' : 'Contact Page',
    'page_path': '/Contact'});
  return (
    <div>
        <Contact />
    </div>
  );
};
export default ContactStart;