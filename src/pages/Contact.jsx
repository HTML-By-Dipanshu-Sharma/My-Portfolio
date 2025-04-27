
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
        mobile_number: '',
    });
    const [error, setError] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.from_email || !formData.message || !formData.mobile_number) {
            setError('All fields are required.');
            return;
        }

        setError('');

        emailjs
            .send('service_won6pdb', 'template_ohfycje', formData, '6fg5QRKF3RZm0oh-b')
            .then(
                () => {
                    setPopupMessage('Message sent successfully!');
                    setPopupVisible(true);
                    setFormData({ from_name: '', from_email: '', message: '', mobile_number: '' });
                },
                (error) => {
                    setPopupMessage('Failed to send the message. Please try again.');
                    setPopupVisible(true);
                }
            );
    };

    const closePopup = () => {
        setPopupVisible(false);
        setPopupMessage('');
    };

    return (
        <div className='formmainDiv'>
            <form className='form' onSubmit={sendEmail}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <label>Name</label>
                <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                />
                <label>Mobile</label>
                <input
                    type="tel"
                    name="mobile_number"
                    value={formData.mobile_number}
                    pattern="[0-9]{10}"
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                />
                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <input type="submit" value="Send" />
            </form>

            {isPopupVisible && (
                <div
                    className='mainDivChilde1'
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'white',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        zIndex: 1000,
                    }}
                >
                    <p>{popupMessage}</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            )}
            {isPopupVisible && (
                <div
                    className='mainDivChilde2'
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999,
                    }}
                    onClick={closePopup}
                ></div>
            )}
        </div>
    );
};

export default Contact;
