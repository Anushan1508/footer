import React from 'react';
import Hero from '../../components/Hero/Hero';
import contactUsImg from "../../asserts/contact.jpg"
import './Contact.css';



function Contact() {
    return (
        <div>
            <Hero
                heading="Contact Us"
                background={contactUsImg}
            />
            <div className="map-container">
                <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.98123529268!2d-73.94604099999999!3d40.678178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1573855593777!5m2!1sen!2sin">
                </iframe>
                <div className="contact-container">
                    <div className="contact-form-container">
                        <h2>Get in Touch</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message"></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="company-details-container">
                        <div className="company-address">
                            <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
                            <p>123 Main St</p>
                            <p>New York, NY 10001</p>
                        </div>
                        <div className="company-phone-email">
                            <h3><i className="fas fa-phone-alt"></i> Phone &amp; Email</h3>
                            <p><i className="fas fa-phone"></i> (123) 456-7890</p>
                            <p><i className="fas fa-envelope"></i> info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
