// Carousel.js

import React, { useState, useEffect } from 'react';

const CarouselImages = [
    { 
        src: `${process.env.PUBLIC_URL}/images/downtown-austin-skyline-copy.jpg`, 
        text: "Empower city departments and the community with climate data and tools", 
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        isQuote: false 
    },
    { 
        src: `${process.env.PUBLIC_URL}/images/doggetposter.jpg`, 
        text: "Fostering collaboration between researchers, policymakers, and communities to develop innovative solutions that address climate challenges and build resilient urban environments.", 
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        isQuote: false 
    },
    { 
        src: `${process.env.PUBLIC_URL}/images/Quotezach.png`, 
        text: `"The power of the UT-City Climate CoLab lies in its ability to combine research, policy, and community engagement to create lasting climate solutions that benefit everyone."`, 
        overlayColor: 'rgba(0, 151, 178, 0.5)',
        name: "- Zach Baumer",
        affiliation: "City of Austin’s Office of Sustainability, Chief Sustainability Officer",
        isQuote: true 
    },
    { 
        src: `${process.env.PUBLIC_URL}/images/Quotemarc.png`, 
        text: `"By bringing together experts, policymakers, and communities, the UT-City Climate CoLab is shaping a more resilient future for cities in the face of climate change.”`, 
        overlayColor: 'rgba(28, 53, 131, 0.5)',
        name: "- Marc Coudert",
        affiliation: "City of Austin’s Office of Sustainability, Chief Sustainability Officer",
        isQuote: true 
    },
    { 
        src: `${process.env.PUBLIC_URL}/images/Quote1.png`, 
        text: `"Cities have the capability of providing something for everybody, only because, and only when, they are created by everybody."`, 
        overlayColor: 'rgba(28, 53, 131, 0.5)',
        name: "- Jane Jacobs",
        affiliation: "",
        isQuote: true 
    },
    // Add more images, texts, and colors here
];

const Carousel = ({ isQuote }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Filter images based on the isQuote prop
    const imagesToUse = CarouselImages.filter(image => image.isQuote === isQuote);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === imagesToUse.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [imagesToUse.length]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imagesToUse.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagesToUse.length - 1 : prevIndex - 1
        );
    };

    const currentImage = imagesToUse[currentIndex];

    return (
        <div className="carousel">
            <img src={currentImage.src} className="top-image" alt="Carousel" />
            <div className="overlay" style={{ backgroundColor: isQuote ? currentImage.overlayColor : 'rgba(0, 0, 0, 0.4)' }}></div>
            <div className="text-overlay" style={{ color: isQuote ? 'white' : currentImage.color }}>
                <h1>{currentImage.text}</h1>
                {isQuote && (
                    <div className="quote-details">
                        <p className="quote-name">{currentImage.name}</p>
                        <p className="quote-affiliation">{currentImage.affiliation}</p>
                    </div>
                )}
            </div>
            <button className="carousel-scroll-button left" onClick={goToPrevious}>
                &lt;
            </button>
            <button className="carousel-scroll-button right" onClick={goToNext}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;