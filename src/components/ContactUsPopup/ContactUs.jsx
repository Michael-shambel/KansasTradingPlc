import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault ();
        try {
            const response = await fetch ('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify (formData),
            });
            if (response.ok) {
            alert ('Message sent successfully!');
            } else {
            alert ('Failed to send message.');
            }
        } catch (error) {
            console.error ('Error', error);
            alert ('An error occurred while sending the message.');
        }
        };

    return <>
        <div className="p-6">
            <h1 className="text-3xl text-black font-bold text-center mb-4">Send Us Message</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName" className="input-label">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="input" onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="lastName" className="input-label">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="input" onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email" className="input-label">Email</label>
                    <input type="email" id="email" name="email" className="input" onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="message" className="input-label">Message</label>
                    <textarea id="message" name="message" className="input h-24" onChange={handleChange} required/>
                </div>
                <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-full mt-7 block w-full hover:scale-105 transition-all duration-300 shadow-custom-inset px-5">
                    send
                </button>
            </form>
        </div>
    </>
};

export default ContactUs;