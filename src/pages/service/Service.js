import React from 'react';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import serviceImg from "../../asserts/service.jpg"
import "./Service.css"
function Service() {
    const cards = [
        {
            id: 1,
            icon: "fas fa-code",
            heading: "Web Development",
            text: "We develop responsive and dynamic web applications using modern web technologies.",
        },
        {
            id: 2,
            icon: "fas fa-mobile-alt",
            heading: "Mobile Development",
            text: "We develop cross-platform mobile applications using React Native and other frameworks.",
        },
        {
            id: 3,
            icon: "fas fa-desktop",
            heading: "UI/UX Design",
            text: "We design intuitive and user-friendly interfaces for web and mobile applications.",
        },
        {
            id: 4,
            icon: "fas fa-server",
            heading: "Backend Development",
            text: "We build scalable and secure server-side applications using Node.js and other technologies.",
        },
        {
            id: 5,
            icon: "fas fa-cloud",
            heading: "Cloud Solutions",
            text: "We provide cloud solutions using AWS, Google Cloud, and other cloud platforms.",
        },
        {
            id: 6,
            icon: "fas fa-database",
            heading: "Database Management",
            text: "We manage and optimize databases using MySQL, MongoDB, and other database technologies.",
        }
    ];
    return (
        <div>
            <Hero
                heading="Service"
                background={serviceImg}
            />
            {/* Rest of the home page content */}
            <div className="card-section">
                <h2 className="card-section-heading">Our Services</h2>
                <div className="card-container">
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            icon={card.icon}
                            heading={card.heading}
                            text={card.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
