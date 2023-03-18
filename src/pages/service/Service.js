import React, {useState, useEffect} from 'react';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import CardSlider from "../../components/CardSlider/CardSlider";
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

    const [cardIndex, setCardIndex] = useState(0);
    const cardData = [
        {
            id: 1,
            title: 'Card 1',
            text: 'Some text for Card 1',
        },
        {
            id: 2,
            title: 'Card 2',
            text: 'Some text for Card 2',
        },
        {
            id: 3,
            title: 'Card 3',
            text: 'Some text for Card 3',
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const handleCloud1Click = () => {
        setCardIndex(0);
    };

    const handleCloud2Click = () => {
        setCardIndex(1);
    };

    const renderCards = () => {
        return (
            <div className="card-slider">
                {cardData.map((card, index) => (
                    <CardSlider
                        key={card.id}
                        title={card.title}
                        text={card.text}
                        visible={index === cardIndex}
                    />
                ))}
            </div>
        );
    };
    return (
        <div>
            <Hero
                heading="Service"
                background={serviceImg}
            />
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
            <div className="service-content">
                <div className="service-column">
                    <h2>Column 1 Heading</h2>
                    <p>
                        Some text for Column 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras dapibus vehicula eros ac auctor. Nullam id vestibulum magna. Nullam posuere turpis ut
                        elementum consectetur. Sed ut ex bibendum, sodales velit at, cursus urna.
                    </p>
                    <div className="arrow-keys">
                        <div className="arrow-key" onClick={handleCloud1Click}>&larr;</div>
                        <div className="arrow-key"onClick={handleCloud2Click}>&rarr;</div>
                    </div>
                </div>
                <div className="service-column">
                    {renderCards()}
                </div>
            </div>
        </div>
    );
}

export default Service;
