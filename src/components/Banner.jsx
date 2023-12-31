import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    const carouselImages = [
        { index: 1, url: "https://bit.ly/2YYUbLr", name: "Index" },
        { index: 2, url: "https://bit.ly/3aTtuul", name: "Prime Video" },
        { index: 6, url: "https://bit.ly/3lVrdFe", name: "Fashion" },
        { index: 4, url: "https://bit.ly/3aUWWjK", name: "Amazon Music" },
        { index: 3, url: "https://bit.ly/3Ge4RHp", name: "Books & Games" },
        { index: 7, url: "https://bit.ly/2Z3swJt", name: "Home & kitchen" },
        { index: 8, url: "https://bit.ly/2ZbLduD", name: "Gromming" },
        { index: 5, url: "https://bit.ly/3DWPVeF", name: "Audible" },
    ];
    return (
        <div className="hero-banner">
            <Carousel
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                stopOnHover={false}
                interval={4000}
                transitionTime={200}
                autoPlay={true}
                infiniteLoop={true}
            >
                {carouselImages.map((carousel) => {
                    return (
                        <div key={carousel.index}>
                            <img src={carousel.url} alt={carousel.name} loading="lazy" />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    )
}

export default Banner