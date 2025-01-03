import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    }  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat p-4">
      <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4 bg-opacity-90 backdrop-blur-sm"
      >
        <div>
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Message"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md"
        >
          Send
        </button>
      </form>
    </div>
  );
}
