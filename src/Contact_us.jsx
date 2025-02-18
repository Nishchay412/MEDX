import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Header } from './Header';
export function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nwtflti', // Replace with your EmailJS Service ID
        'template_laxzme7', // Replace with your EmailJS Template ID
        form.current,
        'ew1oNlrRO99KMy-WC' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          alert('Email sent successfully! You will receive an acknowledgment shortly.');
          setFormData({ user_name: '', user_email: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div>
 <Header/>
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 p-4">
     
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
        Contact Us
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-6 space-y-4 backdrop-blur-lg"
      >
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-300">
            Name:
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:ring-green-500 focus:border-green-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-300">
            Email:
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:ring-green-500 focus:border-green-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:ring-green-500 focus:border-green-500"
            placeholder="Your Message"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 font-bold text-lg border-2 border-green-500 bg-transparent hover:bg-green-500 hover:text-black transition duration-300 rounded-md shadow-md"
        >
          Send
        </button>
      </form>
    </div>
    </div>
  );
}
