import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to an API)
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    rows={4}
                />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;