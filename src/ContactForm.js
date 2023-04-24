import React, { useState } from "react";
import "./styles/ContactForm.css";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/8088c040-d798-11ed-a62e-917cebf1b719";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  // if (submitted) {
    // return (
      // <>
      //   <div>Thank you!</div>
      //   <div>We'll be in touch soon.</div>
      // </>
  //   );
  // }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input
          className="first-name"
          type="text"
          placeholder="name"
          name="name"
          required
        />
      </div>
      <div>
        <input
          className="first-name"
          type="email"
          placeholder="email"
          name="email"
          required
        />
      </div>
      <div>
        <textarea
        className="textarea"
        type="text"
        placeholder="Your message"
        name="message"
        required
        />
      </div>
      <div>
        <button
          type="submit"
          className="send-button"
        >
            send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;