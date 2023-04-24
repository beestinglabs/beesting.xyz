import React from "react";
import "../styles/Contact.css";

import ContactForm from "../ContactForm";

const ContactDesktop = () => {
return (
<div className="contact-container">
    <div className="contact-form-container">
        <h1>Contact</h1>
        <ContactForm />
        <h1>Us</h1>
    </div>
</div>
);
}

export default ContactDesktop;