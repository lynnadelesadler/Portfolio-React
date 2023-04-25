import React, { useState, useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
// import * as dotenv from "dotenv";
// dotenv.config();

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

const Contact = () => {
  const form = useRef();
   // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ugdv5r",
        "template_nylzckf",
        form.current,
        "0OxQSovRCG0W3Njik"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert(`Thank you for your message!`);
          // If everything goes according to plan, we want to clear out the input after a successful registration.
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
       <h3>Hello {name}</h3>
      <form className="form" ref= {form} onSubmit={sendEmail}>
      <label>Name</label>
        <input type="text" name="name" value={name}  onChange={handleInputChange}/>
        <label>Email</label>
        <input type="email" name="email" value={email}  onChange={handleInputChange}/>
        <label>Message</label>
        <input className="textarea"name="message" value={message}  onChange={handleInputChange} />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;

