import React, { useState, useEffect } from 'react';
import '../App.css';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const mailtoLink = `mailto:bannysukumar@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        
        window.location.href = mailtoLink;
        
        alert('Thank you for contacting us! Your email client should open. If it doesn\'t, please email us at bannysukumar@gmail.com');
        
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <h1 className="section-title">Contact Us</h1>
                <p className="section-subtitle">We'd love to hear from you. Get in touch with us!</p>
                
                <div className="contact-content">
                    <div className="contact-grid">
                        <div className="contact-card">
                            <div className="contact-icon">📧</div>
                            <h3>Email Support</h3>
                            <p>Send us an email and we'll get back to you as soon as possible.</p>
                            <p><a href="mailto:bannysukumar@gmail.com">bannysukumar@gmail.com</a></p>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-icon">📱</div>
                            <h3>App Support</h3>
                            <p>Get help directly from within the app through our support section.</p>
                            <p>Open My World App → Menu → Help & Support</p>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-icon">💬</div>
                            <h3>Feedback</h3>
                            <p>Have suggestions or feedback? We're always listening!</p>
                            <p>Use the feedback form below or email us directly.</p>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h2 style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--text-dark)'}}>Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name *</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Your Email *</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    required 
                                    placeholder="What is this regarding?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    placeholder="Tell us how we can help you..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            
                            <div className="form-submit">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>

                    <div className="info-section">
                        <h3>Frequently Asked Questions</h3>
                        <p>
                            <strong>How do I report a problem?</strong><br />
                            You can report issues through the contact form above, email us directly, or use the in-app support feature.
                        </p>
                        <p>
                            <strong>How long does it take to get a response?</strong><br />
                            We typically respond within 24-48 hours during business days.
                        </p>
                        <p>
                            <strong>Can I request a feature?</strong><br />
                            Absolutely! We love hearing your ideas. Use the contact form and select "Feature Request" as the subject.
                        </p>
                    </div>

                    <div className="info-section">
                        <h3>App Information</h3>
                        <p>
                            <strong>App Name:</strong> My World<br />
                            <strong>Package Name:</strong> com.My.World<br />
                            <strong>Version:</strong> 1.0<br />
                            <strong>Platform:</strong> Android<br />
                            <strong>Developer:</strong> Bannysukumar
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

