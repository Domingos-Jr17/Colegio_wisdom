import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-6">
                If you have any questions or need further information, please fill out the form below or reach out to us directly.
            </p>
            <ContactForm />
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-blue-900">Our Location</h2>
                <div className="mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153153!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e3b3%3A0x5045675218ceed30!2sCol%C3%A9gio%20Wisdom!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;