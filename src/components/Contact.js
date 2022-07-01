import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../index.scss'
import '../styles/Contact.scss';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_ydphmc3', 'template_k3gnx83', form.current, '6Rmay5C18rkXyxfHs')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact' className="container announcements">
        <h2>Contact Me</h2>

        <div className="contact-card">

            <form ref={form} onSubmit={sendEmail}>

                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="first_name" required />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="last_name" required />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" required />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                </div>

                <div className="col">
                    <input type="submit" value="Submit" />
                </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Contact;